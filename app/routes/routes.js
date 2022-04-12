const express = require('express');
//const passport = require('passport');
const router = express.Router();

//const { isLoggedIn, isNotloggedIn } = require('../lib/UsuariosAuth');
const { isLoggedIn} = require('../lib/UsuariosAuth');


router.get('/', (req, res) => {
    res.render('login')
});

//Aministrador
router.get('/Administrador', isLoggedIn, (req, res) => {
    res.redirect('/Administrador/inicio')
});

router.get('/Administrador/inicio', isLoggedIn, (req, res) => {
    res.render('inicio/inicioAdmin')
});

//Coordinador
router.get('/Coordinador', isLoggedIn, (req, res) => {
    res.redirect('/Coordinador/inicio')
});

router.get('/Coordinador/inicio', isLoggedIn, (req, res) => {
    res.render('inicio/inicioCoord')
});

//Empleado
router.get('/Empleado', isLoggedIn, (req, res) => {
    res.redirect('/Empleado/inicio')
});

router.get('/Empleado/inicio', isLoggedIn, (req, res) => {
    res.render('inicio/inicioEmp')
});

module.exports = router;