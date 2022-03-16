//definimos nuestros metodos de autenticacion
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//requerimos nuestra conexion con la BD
const pool = require('../config/database');
//requerimos metodo bcy
const bcy = require('../lib/bcy');

///Iniciar sesion///
passport.use('local.iniciar', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'pass',
    passReqToCallback: true
}, async (req, usuario, pass, done) => {
    //console.log(req.body);

    const filas = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
    //console.log(filas);
    //validamos usuario
    if(filas.length > 0){
        const user = filas[0];
        //console.log(user);

        //validamos contraseña
        const passValida = await bcy.desencriptar(pass, user.pass);
        const rol = user.NomRol;

        if(passValida){
            done(null, user, rol, req.flash('completo', 'Bienvenido: ' + user.usuario + ' !!!!'));
        }else{
            //si no coinciden las contraseñass
            done(null, false, req.flash('mensaje', 'Contraseña incorrecta :c'));
        }
    }else{//si no encontro nada
        return done(null, false, req.flash('mensaje', 'El usuario no existe :s'));
    }

}));

//////registrar//////
//realzamos la autenticacion de manera local (la base de datos que tenemos)
passport.use('local.registrar', new LocalStrategy ({
    //recibimos
    usernameField: 'usuario',
    passwordField: 'pass',
    passReqToCallback: true
}, async ( req, usuario, pass, done) => {
    const { 
        Nom_emp,
        Apellido_emp,
        correo,
        NomRol
        //,ID_rol 
    } = req.body;
    console.log(req.body);
    const newUser = {
        Nom_emp, 
        Apellido_emp,
        usuario,
        correo,
        pass,
        NomRol
        //,ID_rol
    };

    //ciframos
    newUser.pass = await bcy.encriptar(pass);
    const resultado = await pool.query('INSERT INTO usuarios SET ?', [newUser]);
        //creamos mensaje
        req.flash('completo', 'Usuario añadido correctamente');
        newUser.ID_emp = resultado.insertId;
        //return done(null, newUser); //Guarda el usuario en una sesion para luego iniciar sesion con el usuario que registro guardandolo en la sesion
    return done(false);

}));

//guardar sesion
passport.serializeUser((user, done) =>{
    done(null, user.ID_emp);
});


passport.deserializeUser(async (ID_emp, done) =>{
    const fila = await pool.query('SELECT * FROM usuarios WHERE ID_emp = ?', [ID_emp]);
    done(null, fila[0]);
});


