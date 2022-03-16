const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');



router.get('/listaPedidoRes', isLoggedIn, async (req, res) => {
    const msp = await pool.query('SELECT * FROM inventarioP');
    console.log(msp);
    res.render('pedido/listaPedidoRes', { msp });
});


module.exports = router;