const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//ENTRADAS
router.get('/entradaMp', isLoggedIn, (req, res) => {
    res.render('mp/EntradaMp');
});

router.get('/addEntradaMp', isLoggedIn, (req, res) => {
    res.render('mp/addEntradaMp');
});

router.post('/addEntradaMp', isLoggedIn, async (req, res) => {
    const {
        Nom_mp,
        Desc_mp,
        Medida_mp,
        Cant_mp,
        NomUs_dejo,
        proveedor,
        //,Date_Hr
    } = req.body;
    const newEntradaMp = {
        Nom_mp,
        Desc_mp,
        Medida_mp,
        Cant_mp,
        NomUs_dejo,
        proveedor,
        //,Date_Hr
    };
    await pool.query('INSERT INTO entradaMp set ? ', [newEntradaMp]);
        //creamos mensaje
        req.flash('completo', 'Registro de entrada de materia prima correcto');
    res.redirect('/Administrador/mp/addMp');
});

router.get('/listaEntradaMp', isLoggedIn, async (req, res) => {
    const mpes = await pool.query('SELECT * FROM entradaMp');
    console.log(mpes);
    res.render('mp/listaEntradaMp', { mpes });
});

router.get('/deleteEntradaMp/:ID_entradaMp', isLoggedIn, async (req, res) => {
    const { ID_entradaMp } = req.params;
    await pool.query('DELETE FROM entradaMp WHERE ID_entradaMp = ?', [ID_entradaMp] );
        //creamos mensaje
        req.flash('completo', 'Registro de entrada de materia prima eliminada correctamente');
    res.redirect('/Administrador/mp/listaEntradaMp');
});

router.get('/editEntradaMp/:ID_entradaMp', isLoggedIn, async (req, res) => {
    const { ID_entradaMp } = req.params;
    const mpes = await pool.query('SELECT * FROM entradaMp WHERE ID_entradaMp = ?', [ID_entradaMp]);
    res.render('mp/editEntradaMp', { mpe:mpes[0]});
});

router.post('/editEntradaMp/:ID_entradaMp', async (req, res) => {
    const { ID_entradaMp } = req.params;
    const { 
        Nom_mp,
        Desc_mp,
        Medida_mp,
        Cant_mp,
        NomUs_dejo,
        proveedor
     } = req.body;
    const newEntradaMp = { 
        Nom_mp,
        Desc_mp,
        Medida_mp,
        Cant_mp,
        NomUs_dejo,
        proveedor
    };
    await pool.query('UPDATE entradaMp set ? WHERE ID_entradaMp = ?', [newEntradaMp, ID_entradaMp]);
        //creamos mensaje
        req.flash('completo', 'Registro modificado correctamente');
    res.redirect('/Administrador/mp/listaEntradaMp');
});
//ENTRADAS

//SALIDAS
router.get('/entradaMp', isLoggedIn, (req, res) => {
    res.render('mp/EntradaMp');
});

router.get('/addSalidaMp', isLoggedIn, (req, res) => {
    res.render('mp/addSalidaMp');
});

router.post('/addSalidaMp', isLoggedIn, async (req, res) => {
    const {
        Nom_mp,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo
        //,Date_Hr
    } = req.body;
    const newSalidaMp = {
        Nom_mp,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo
        //,Date_Hr
    };
    await pool.query('INSERT INTO salidaMp set ? ', [newSalidaMp]);
        //creamos mensaje
        req.flash('completo', 'Registro de salida de materia prima correcto');
    res.redirect('/Administrador/mp/listaSalidaMp');
});

router.get('/listaSalidaMp', isLoggedIn, async (req, res) => {
    const mpss = await pool.query('SELECT * FROM salidaMp');
    console.log(mpss);
    res.render('mp/listaSalidaMp', { mpss });
});

router.get('/deleteSalidaMp/:ID_salidaMp', isLoggedIn, async (req, res) => {
    const { ID_salidaMp } = req.params;
    await pool.query('DELETE FROM salidaMp WHERE ID_salidaMp = ?', [ID_salidaMp] );
        //creamos mensaje
        req.flash('completo', 'Registro de salida de materia prima eliminada correctamente');
    res.redirect('/Administrador/mp/listaSalidaMp');
});

router.get('/editSalidaMp/:ID_salidaMp', isLoggedIn, async (req, res) => {
    const { ID_salidaMp } = req.params;
    const mpss = await pool.query('SELECT * FROM salidaMp WHERE ID_salidaMp = ?', [ID_salidaMp]);
    res.render('mp/editSalidaMp', { mps:mpss[0]});
});

router.post('/editSalidaMp/:ID_salidaMp', isLoggedIn, async (req, res) => {
    const { ID_salidaMp } = req.params;
    const { 
        Nom_mp,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        NomUs_recibio
        //,Date_Hr
     } = req.body;
    const newSalidaMp = { 
        Nom_mp,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        NomUs_recibio
        //,Date_Hr
    };
    await pool.query('UPDATE salidaMp set ? WHERE ID_salidaMp = ?', [newSalidaMp, ID_salidaMp]);
        //creamos mensaje
        req.flash('completo', 'Registro modificado correctamente');
    res.redirect('/Administrador/mp/listaSalidaMp');
});
//SALIDAS








router.get('/addMp', (req, res) => {
    res.render('mp/addMp');
});

router.post('/addMp', async (req, res) => {
    const { 
        Nom_materiaPrima,
        Desc_materiaPrima,
        Medida_materiaPrima,
        Cant_materiaPrima,
        stock
    } = req.body;
    const newMp = {
        Nom_materiaPrima,
        Desc_materiaPrima,
        Medida_materiaPrima,
        Cant_materiaPrima,
        stock
    };

    await pool.query('INSERT INTO inventarioP set ? ', [newMp]);
        //creamos mensaje
        req.flash('completo', 'Materia prima añadida al inventario correctamente');
    res.redirect('/Administrador/mp');
});

router.get('/', async (req, res) => {
    const msp = await pool.query('SELECT * FROM inventarioP');
    console.log(msp);
    res.render('mp/listaMp', { msp });
});

router.get('/deleteMp/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;
    await pool.query('DELETE FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima] );
        //creamos mensaje
        req.flash('completo', 'Materia prima eliminada correctamente');
    res.redirect('/Administrador/mp');
});

router.get('/editMp/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;
    const msp = await pool.query('SELECT * FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
    res.render('mp/editMp', { mp:msp[0]});
});


router.post('/editMp/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;
    const { Nom_materiaPrima, Desc_materiaPrima, Medida_materiaPrima, Cant_materiaPrima, stock } = req.body;
    const newMp = { 
        Nom_materiaPrima,
        Desc_materiaPrima,
        Medida_materiaPrima,
        Cant_materiaPrima,
        stock
    };
    await pool.query('UPDATE inventarioP set ? WHERE ID_materiaPrima = ?', [newMp, ID_materiaPrima]);
        //creamos mensaje
        req.flash('completo', 'Materia prima modificada correctamente');
    res.redirect('/Administrador/mp');
});

/*
router.get('/listaPedidoRes', isLoggedIn, async (req, res) => {
    const msp = await pool.query('SELECT * FROM inventarioP');
    console.log(msp);
    res.render('mp/listaPedidoRes', { msp });
});
*/

module.exports = router;