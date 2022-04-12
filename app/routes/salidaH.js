const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//redirecciona al formulario
router.get('/addSalidaH', isLoggedIn, (req, res) => {
    res.render('salidaH/addSalidaH');
});

router.post('/addSalidaH', isLoggedIn, async (req, res) => {
    const {        
        Nom_mpHS,
        Medida_mpHS,
        Cant_mpHS,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo
     } = req.body;
    const newSalidaH = { 
        Nom_mpHS,
        Medida_mpHS,
        Cant_mpHS,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        ID_Recinto: req.user.ID_Recinto
    };
    await pool.query('INSERT INTO salidaH set ? ', [newSalidaH]);
        //creamos mensaje
        req.flash('completo', 'Registro de materia prima en inventario con exito');
    res.redirect('/Coordinador/salidaH');
});

router.get('/', isLoggedIn, async (req, res) => {
    const salidasH = await pool.query('SELECT * FROM salidaH WHERE ID_Recinto = ?', [req.user.ID_Recinto]);
    res.render('salidaH/listaSalidaH', { salidasH });
});

router.get('/deleteSalidaH/:ID_salidaH', isLoggedIn, async (req, res) => {
    const { ID_salidaH } = req.params;
    await pool.query('DELETE FROM salidaH WHERE ID_salidaH = ?', [ID_salidaH] );
                //creamos mensaje
                req.flash('completo', 'Registro de materia prima eliminado correctamente');
    res.redirect('/Coordinador/salidaH');
});

router.get('/editSalidaH/:ID_salidaH', isLoggedIn, async (req, res) => {
    const { ID_salidaH } = req.params;
    const salidasH = await pool.query('SELECT * FROM salidaH WHERE ID_salidaH = ?', [ID_salidaH]);
    res.render('salidaH/editSalidaH', { salidaH:salidasH[0]});
});


router.post('/editSalidaH/:ID_salidaH', isLoggedIn, async (req, res) => {
    const { ID_salidaH } = req.params;
    const { 
        Nom_mpHS,
        Medida_mpHS,
        Cant_mpHS,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        NomUs_recibio
        //,Date_HrS
    } = req.body;
    const newSalidaH = { 
        Nom_mpHS,
        Medida_mpHS,
        Cant_mpHS,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        NomUs_recibio
        //,Date_HrS
    };
    
    try{

        const resultado = await pool.query('UPDATE salidaH set ? WHERE ID_salidaH = ?', [newSalidaH, ID_salidaH]);
        //console.log(resultado);
            //creamos mensaje
            req.flash('completo', 'Registro de materia prima modificada correctamente');
            res.redirect('/Coordinador/salidaH');

    }catch(error) {
        console.log(error);
    }
    
});
module.exports = router;