const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//redirecciona al formulario
router.get('/addUsuarios', isLoggedIn, (req, res) => {
    res.render('usuarios/addUsuarios');
});

router.get('/',  async (req, res) => {
    const usuarios = await pool.query('SELECT * FROM usuarios');
    res.render('usuarios/listaUsuarios', { usuarios });
});

router.get('/deleteUsuarios/:ID_emp', isLoggedIn, async (req, res) => {
    const { ID_emp } = req.params;
    await pool.query('DELETE FROM usuarios WHERE ID_emp = ?', [ID_emp] );
                //creamos mensaje
                req.flash('completo', 'Usuario eliminado correctamente');
    res.redirect('/Administrador/usuarios');
});

router.get('/editUsuarios/:ID_emp', isLoggedIn, async (req, res) => {
    const { ID_emp } = req.params;
    const usuarios = await pool.query('SELECT * FROM usuarios WHERE ID_emp = ?', [ID_emp]);
    res.render('usuarios/editUsuarios', { usuario:usuarios[0]});
});


router.post('/editUsuarios/:ID_emp', isLoggedIn, async (req, res) => {
    const { ID_emp } = req.params;
    const { 
        Nom_emp,
        Apellido_emp,
        usuario,
        correo
        //,pass
        ,NomRol
        ,Recinto
    } = req.body;
    const newUsuario = { 
        Nom_emp,
        Apellido_emp,
        usuario,
        correo
        //,pass
        ,NomRol
        ,Recinto
    };
    
    try{

        const resultado = await pool.query('UPDATE usuarios set ? WHERE ID_emp = ?', [newUsuario, ID_emp]);
        //console.log(resultado);
            //creamos mensaje
            req.flash('completo', 'Usuario modificado correctamente');
            res.redirect('/Administrador/usuarios');

    }catch(error) {
        console.log(error);
    }
    
});
module.exports = router;