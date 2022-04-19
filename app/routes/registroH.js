const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');


router.get('/addRegistroH', isLoggedIn, (req, res) => {
    res.render('registroH/addRegistroH');
});

router.post('/addRegistroH', isLoggedIn, async (req, res) => {
    const { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH
    } = req.body;
    const newRegistroH = {
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        Recinto: req.user.Recinto
    };

    await pool.query('INSERT INTO inventarioH set ? ', [newRegistroH]);
        //creamos mensaje
        req.flash('completo', 'Materia prima añadida al inventario correctamente');
    res.redirect('/Empleado/registroH');
});

router.get('/', isLoggedIn, async (req, res) => {
    const productos = await pool.query('SELECT * FROM inventarioH WHERE Recinto = ?', [req.user.Recinto]);
    console.log(productos);
    res.render('registroH/listaRegistroH', { productos });
});

router.get('/deleteRegistroH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    await pool.query('DELETE FROM inventarioH WHERE ID_mpH = ?', [ID_mpH] );
        //creamos mensaje
        req.flash('completo', 'Materia prima eliminada correctamente');
    res.redirect('/Empleado/registroH');
});

router.get('/editRegistroH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const productos = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    res.render('registroH/editRegistroH', { producto:productos[0]});
});


router.post('/editRegistroH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        //,Desc_estatusH,
        //ID_entradaH
    } = req.body;
    const newRegistroH = {
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        //,Desc_estatusH,
        //ID_entradaH
    };
    await pool.query('UPDATE inventarioH set ? WHERE ID_mpH = ?', [newRegistroH, ID_mpH]);
        //creamos mensaje
        req.flash('completo', 'Materia prima modificada correctamente');
    res.redirect('/Empleado/registroH');
});

module.exports = router;