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

//Variables globales
app.use((req, res, next) => {
    //el mensaje guardado estara disponible en todas las visatas
    app.locals.completo = req.flash('completo');
    app.locals.mensaje = req.flash('mensaje');
    app.locals.warning = req.flash('warning');
    app.locals.user = req.user;
    next();
});

//Rutas
app.use(require('./routes/routes'));
app.use(require('./routes/authentication'));
app.use('/Administrador/usuarios', require('./routes/usuarios'));
app.use('/Administrador/roles', require('./routes/roles'));
app.use('/Administrador/privilegios', require('./routes/privilegios'));
app.use('/Administrador/recintos', require('./routes/recintos'));
app.use('/Administrador/mp', require('./routes/mp'));
app.use('/Administrador/pedido', require('./routes/pedido'));
app.use('/Coordinador/inventarioH', require('./routes/inventarioH'));
app.use('/Coordinador/entradaH', require('./routes/entradaH'));
app.use('/Coordinador/salidaH', require('./routes/salidaH'));
app.use('/Empleado/registroH', require('./routes/registroH'));

//Public
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto: ', app.get('port'));
});