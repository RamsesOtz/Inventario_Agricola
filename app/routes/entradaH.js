const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/', isLoggedIn, async (req, res) => {
    const entradasH = await pool.query('SELECT * FROM entradaH WHERE Recinto = ?', [req.user.Recinto]);
    res.render('entradaH/listaEntradaH', { entradasH });
});

router.get('/deleteEntradaH/:ID_entradaH', isLoggedIn, async (req, res) => {
    const { ID_entradaH } = req.params;
    await pool.query('DELETE FROM entradaH WHERE ID_entradaH = ?', [ID_entradaH] );
                //creamos mensaje
                req.flash('completo', 'Registro de materia prima eliminado correctamente');
    res.redirect('/Coordinador/entradaH');
});

module.exports = router;