const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/addRecintos', isLoggedIn, (req, res) => {
    res.render('recintos/addRecintos');
});

router.post('/addRecintos', isLoggedIn, async (req, res) => {
    const { Recinto, Ubicacion, Npatron, Apatron, usuario } = req.body;
    const newRecinto = {
        Recinto,
        Ubicacion,
        Npatron,
        Apatron,
        usuario
    };
    await pool.query('INSERT INTO recintos set ? ', [newRecinto]);
        //creamos mensaje
        req.flash('completo', 'Recinto creado correctamente');
    res.redirect('/recintos');
});

router.get('/', isLoggedIn, async (req, res) => {
    const recintos = await pool.query('SELECT * FROM recintos');
    console.log(recintos);
    res.render('recintos/listaRecintos', { recintos });
});

router.get('/deleteRecintos/:ID_Recinto', isLoggedIn, async (req, res) => {
    const { ID_Recinto } = req.params;
    await pool.query('DELETE FROM recintos WHERE ID_Recinto = ?', [ID_Recinto] );
        //creamos mensaje
        req.flash('completo', 'Recinto eliminado correctamente');
    res.redirect('/recintos');
});

router.get('/editRecintos/:ID_Recinto', isLoggedIn, async (req, res) => {
    const { ID_Recinto } = req.params;
    const recintos = await pool.query('SELECT * FROM recintos WHERE ID_Recinto = ?', [ID_Recinto]);
    res.render('recintos/editRecintos', { recinto:recintos[0]});
});


router.post('/editRecintos/:ID_Recinto', isLoggedIn, async (req, res) => {
    const { ID_Recinto } = req.params;
    const { Recinto, Ubicacion, Npatron, Apatron, usuario } = req.body;
    const newRecinto = { 
        Recinto,
        Ubicacion,
        Npatron,
        Apatron,
        usuario
    };
    await pool.query('UPDATE recintos set ? WHERE ID_Recinto = ?', [newRecinto, ID_Recinto]);
        //creamos mensaje
        req.flash('completo', 'Recinto modificado correctamente');
    res.redirect('/recintos');
});
module.exports = router;