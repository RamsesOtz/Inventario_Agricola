const express = require('express');
const router = express.Router();

//importamos la biblioteca (passport) parapoder usar sus metodos
const passport = require('passport');
//importamos el modulo que creamos isLoggedIn: para proteger rutas al estar loegeado, isNotloggedIn: evita rutas una vez estando logeado
//const { isLoggedIn, isNotloggedIn } = require('../lib/UsuariosAuth');
const { isLoggedIn } = require('../lib/UsuariosAuth');


//registrar
//redirecciona al formulario
router.get('/registrar', (req, res) => {
    res.redirect('/Administrador/usuarios/addUsuarios');
});
//recibe los datos del formulario
    //authenticate: nos sirve para tomar el nombre de la autenticacion que creamos en passport.js (local.registrar).
router.post('/registrar', passport.authenticate('local.registrar', {
    successRedirect: '/Administrador/usuarios',
    failureRedirect: '/Administrador/usuarios/addUsuarios',
    failureFlash: true
}));

//iniciar sesion
router.get('/iniciar', (req, res) => {
    res.redirect('/');
});

router.post('/iniciar', passport.authenticate('local.iniciar', { failureRedirect: '/', failureFlash: true }),
    (req, res, next) =>{
        const usRol = req.user.NomRol
            
        //console.log(Rol);
        switch(usRol){
            case 'administrador':
                res.redirect('/perfilAdministrador')
                next();
            break;
            case "coordinador":
                res.redirect('/perfilCoordinador');
                next();
            break;
            case "usuario":
                res.redirect('/perfilEmpleado');
                next();
            break;
            default:
                case "":
                    res.redirect('/');
                    next();
                break;
        }
});

/*
router.get('/iniciar', isNotloggedIn, (req, res) =>{
    res.redirect('/');
});
*/

//pagina al iniciar sesion
router.get('/Inicio', async (req, res) => {
    res.render('inicio/inicio');
});

/*
//pagina InventarioH
router.get('/inventarioH', isLoggedIn, async (req, res) => {
    res.render('inventarioH/inventarioH');
});*/

//informacion del usuario administrador
router.get('/perfilAdministrador', isLoggedIn, (req, res) =>{
    res.render('perfil/infoA');
});

//informacion del usuario coordinador
router.get('/perfilCoordinador', isLoggedIn, (req, res) =>{
    res.render('perfil/infoC');
});

//informacion del usuario empleado
router.get('/perfilEmpleado', isLoggedIn, (req, res) =>{
    res.render('perfil/infoE');
});

//cerrar Sesion
router.get('/Cerrar', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;