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
    
        var filas = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        //console.log(filas);
        //validamos usuario
        if(filas.length > 0){
            var user = filas[0];
            //console.log(user);
    
            //validamos contraseña
            var passValida = await bcy.desencriptar(pass, user.pass);
    
        if(passValida){
                done(null, user, req.flash('completo', 'Bienvenido: ' + user.usuario));
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
    var { 
        Nom_emp,
        Apellido_emp,
        correo,
        NomRol,
        Recinto
        //,ID_rol 
    } = req.body;
    console.log(req.body);
    var newUser = {
        Nom_emp, 
        Apellido_emp,
        usuario,
        correo,
        pass,
        NomRol,
        Recinto
        //,ID_rol
    };

    //ciframos
    newUser.pass = await bcy.encriptar(pass);
    var resultado = await pool.query('INSERT INTO usuarios SET ?', [newUser]);
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
    var fila = await pool.query('SELECT * FROM usuarios WHERE ID_emp = ?', [ID_emp]);
    done(null, fila[0]);
});


