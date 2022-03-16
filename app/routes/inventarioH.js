const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//redirecciona al formulario
router.get('/addInventarioH', isLoggedIn, (req, res) => {
    res.render('inventarioH/addInventarioH');
});

router.post('/addInventarioH', isLoggedIn, async (req, res) => {
    const {        
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        ,ID_entradaH,
        ID_salidaH
     } = req.body;
    const newInventarioH = { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        ,ID_entradaH,
        ID_salidaH
    };
    await pool.query('INSERT INTO inventarioH set ? ', [newInventarioH]);
        //creamos mensaje
        req.flash('completo', 'Peticion enviada con exito');
    res.redirect('/inventarioH');
});

router.get('/', isLoggedIn, async (req, res) => {
    const inventariosH = await pool.query('SELECT * FROM inventarioH');
    res.render('inventarioH/listaInventarioH', { inventariosH });
});

router.get('/deleteInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    await pool.query('DELETE FROM inventarioH WHERE ID_mpH = ?', [ID_mpH] );
                //creamos mensaje
                req.flash('completo', 'Materia prima eliminada correctamente');
    res.redirect('/inventarioH');
});

router.get('/editInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    res.render('inventarioH/editInventarioH', { inventarioH:inventariosH[0]});
});


router.post('/editInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        ,ID_entradaH,
        ID_salidaH
    } = req.body;
    const newInventarioH = { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        EstatusH
        ,ID_entradaH,
        ID_salidaH
    };
    
    try{

        const resultado = await pool.query('UPDATE inventarioH set ? WHERE ID_emp = ?', [newInventarioH, ID_mpH]);
        //console.log(resultado);
            //creamos mensaje
            req.flash('completo', 'Materia prima modificada correctamente');
            res.redirect('/inventarioH');

    }catch(error) {
        console.log(error);
    }
    
});
module.exports = router;