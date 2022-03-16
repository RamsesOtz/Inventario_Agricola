const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/addPrivilegios', isLoggedIn, (req, res) => {
    res.render('privilegios/addPrivilegios');
});

router.post('/addPrivilegios', isLoggedIn, async (req, res) => {
    const { NomPriv, DescPriv } = req.body;
    const newPrivilegio = {
        NomPriv,
        DescPriv
    };
    await pool.query('INSERT INTO privilegios set ? ', [newPrivilegio]);
        //creamos mensaje
        req.flash('completo', 'Privilegio creado correctamente');
    res.redirect('/privilegios');
});

router.get('/', isLoggedIn, async (req, res) => {
    const privilegios = await pool.query('SELECT * FROM privilegios');
    console.log(privilegios);
    res.render('privilegios/listaPrivilegios', { privilegios });
});

router.get('/deletePrivilegios/:ID_priv', isLoggedIn, async (req, res) => {
    const { ID_priv } = req.params;
    await pool.query('DELETE FROM privilegios WHERE ID_priv = ?', [ID_priv] );
        //creamos mensaje
        req.flash('completo', 'Privilegio eliminado correctamente');
    res.redirect('/privilegios');
});

router.get('/editPrivilegios/:ID_priv', isLoggedIn, async (req, res) => {
    const { ID_priv } = req.params;
    const privilegios = await pool.query('SELECT * FROM privilegios WHERE ID_priv = ?', [ID_priv]);
    res.render('privilegios/editPrivilegios', { privilegio:privilegios[0]});
});


router.post('/editPrivilegios/:ID_priv', isLoggedIn, async (req, res) => {
    const { ID_priv } = req.params;
    const { NomPriv, DescPriv } = req.body;
    const newPrivilegio = { 
        NomPriv,
        DescPriv
    };
    await pool.query('UPDATE privilegios set ? WHERE ID_priv = ?', [newPrivilegio, ID_priv]);
        //creamos mensaje
        req.flash('completo', 'Privilegio modificado correctamente');
    res.redirect('/privilegios');
});
module.exports = router;