const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./config/keys');
const passport = require('passport');

//inicializaciones
const app = express();
//requerimos modulo passport
require('./lib/passport');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    /////////////////////////////////
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    /////////////////////////////////
    extname: '.hbs',
    helpers: require('./lib/handlebars') 
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(session({
    secret: '@As.2a3',
    saveUninitialized: false,
    resave: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

//sesion para guardar los datos


//Variables globales
app.use((req, res, next) => {
    //el mensaje guardado estara disponible en todas las visatas
    app.locals.completo = req.flash('completo');
    app.locals.mensaje = req.flash('mensaje');
    app.locals.user = req.user;
    app.locals.rol = req.rol;
    next();
});

//Rutas
app.use(require('./routes/routes'));
app.use(require('./routes/authentication'));
//app.use('/Inicio', require('./routes/inicio'));
//app.use('/perfil', require('./routes/perfil'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/roles', require('./routes/roles'));
app.use('/privilegios', require('./routes/privilegios'));
app.use('/recintos', require('./routes/recintos'));
app.use('/mp', require('./routes/mp'));
app.use('/pedido', require('./routes/pedido'));
app.use('/inventarioH', require('./routes/inventarioH'));
app.use('/entradaH', require('./routes/entradaH'));
//app.use('/salidaH', require('./routes/salidaH'));

//Public
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto: ', app.get('port'));
});