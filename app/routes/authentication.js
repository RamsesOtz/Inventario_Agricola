const express = require('express');
const router = express.Router();

//importamos la biblioteca (passport) parapoder usar sus metodos
const passport = require('passport');
//importamos el modulo que creamos isLoggedIn: para proteger rutas al estar loegeado, isNotloggedIn: evita rutas una vez estando logeado
const { isLoggedIn, isNotloggedIn } = require('../lib/UsuariosAuth');


//registrar
//redirecciona al formulario
router.get('/registrar', (req, res) => {
    res.redirect('/usuarios/addUsuarios');
});
//recibe los datos del formulario
    //authenticate: nos sirve para tomar el nombre de la autenticacion que creamos en passport.js (local.registrar).
router.post('/registrar', passport.authenticate('local.registrar', {
    successRedirect: '/usuarios',
    failureRedirect: '/usuarios/addUsuarios',
    failureFlash: true
}));

//iniciar sesion
router.get('/iniciar', isNotloggedIn, (req, res) => {
    res.redirect('/',);
});

router.post('/iniciar', isNotloggedIn, (req, res, next) =>{
    passport.authenticate('local.iniciar', {
        successRedirect: '/perfil',
        failureRedirect: '/',
        failureFlash: true
    })(req, res, next);
});

//pagina Inicial
router.get('/Inicio', isLoggedIn, async (req, res) => {
    res.render('inicio/inicio');
});

/*
//pagina InventarioH
router.get('/inventarioH', isLoggedIn, async (req, res) => {
    res.render('inventarioH/inventarioH');
});*/

//informacion del usuario
router.get('/perfil', isLoggedIn, (req, res) =>{
res.render('perfil/info');
});

//cerrar Sesion
router.get('/Cerrar', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;