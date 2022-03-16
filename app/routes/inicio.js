/*const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//pagina Inicial
router.get('/Inicio', isLoggedIn, async (req, res) => {
    res.render('inicio/inicio');
});

module.exports = router;*/