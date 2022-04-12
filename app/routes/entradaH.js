const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//redirecciona al formulario
router.get('/addEntradaH', isLoggedIn, (req, res) => {
    res.render('entradaH/addEntradaH');
});

router.post('/addEntradaH', isLoggedIn, async (req, res) => {
    const {        
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo
        //,Date_HrE
     } = req.body;
    const newEntradaH = { 
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo,
        ID_Recinto: req.user.ID_Recinto
        //,Date_HrE
    };
    await pool.query('INSERT INTO entradaH set ? ', [newEntradaH]);
        //creamos mensaje
        req.flash('completo', 'Registro de materia prima en inventario con exito');
    res.redirect('/Coordinador/entradaH');
});

router.get('/', isLoggedIn, async (req, res) => {
    const entradasH = await pool.query('SELECT * FROM entradaH WHERE ID_Recinto = ?', [req.user.ID_Recinto]);
    res.render('entradaH/listaEntradaH', { entradasH });
});

router.get('/deleteEntradaH/:ID_entradaH', isLoggedIn, async (req, res) => {
    const { ID_entradaH } = req.params;
    await pool.query('DELETE FROM entradaH WHERE ID_entradaH = ?', [ID_entradaH] );
                //creamos mensaje
                req.flash('completo', 'Registro de materia prima eliminado correctamente');
    res.redirect('/Coordinador/entradaH');
});

router.get('/editEntradaH/:ID_entradaH', isLoggedIn, async (req, res) => {
    const { ID_entradaH } = req.params;
    const entradasH = await pool.query('SELECT * FROM entradaH WHERE ID_entradaH = ?', [ID_entradaH]);
    res.render('entradaH/editEntradaH', { entradaH:entradasH[0]});
});


router.post('/editEntradaH/:ID_entradaH', isLoggedIn, async (req, res) => {
    const { ID_entradaH } = req.params;
    const {
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo
        //, Date_HrE
    } = req.body;
    const newEntradaH = { 
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo
        //,Date_HrE
    };
    
    try{

        const resultado = await pool.query('UPDATE entradaH set ? WHERE ID_entradaH = ?', [newEntradaH, ID_entradaH]);
        //console.log(resultado);
            //creamos mensaje
            req.flash('completo', 'Registro de materia prima modificada correctamente');
            res.redirect('/Coordinador/entradaH');

    }catch(error) {
        console.log(error);
    }
    
});
module.exports = router;