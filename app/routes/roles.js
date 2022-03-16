const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/addRoles', isLoggedIn, (req, res) => {
    res.render('roles/addRoles');
});

router.post('/addRoles', isLoggedIn, async (req, res) => {
    const { NomRol, DescRol } = req.body;
    const newRol = {
        NomRol,
        DescRol
    };
    await pool.query('INSERT INTO roles set ? ', [newRol]);
        //creamos mensaje
        req.flash('completo', 'Rol creado correctamente');
    res.redirect('/roles');
});

router.get('/', isLoggedIn, async (req, res) => {
    const roles = await pool.query('SELECT * FROM roles');
    console.log(roles);
    res.render('roles/listaRoles', { roles });
});

router.get('/deleteRoles/:ID_rol', isLoggedIn, async (req, res) => {
    const { ID_rol } = req.params;
    await pool.query('DELETE FROM roles WHERE ID_rol = ?', [ID_rol] );
        //creamos mensaje
        req.flash('completo', 'Rol eliminado correctamente');
    res.redirect('/roles');
});

router.get('/editRoles/:ID_rol', isLoggedIn, async (req, res) => {
    const { ID_rol } = req.params;
    const roles = await pool.query('SELECT * FROM roles WHERE ID_rol = ?', [ID_rol]);
    res.render('roles/editRoles', { rol:roles[0]});
});


router.post('/editRoles/:ID_rol', isLoggedIn, async (req, res) => {
    const { ID_rol } = req.params;
    const { NomRol, DescRol } = req.body;
    const newRol = { 
        NomRol,
        DescRol
    };
    await pool.query('UPDATE roles set ? WHERE ID_rol = ?', [newRol, ID_rol]);
        //creamos mensaje
        req.flash('completo', 'Rol modificado correctamente');
    res.redirect('/roles');
});
module.exports = router;