//const express = require('express');
//const { body } = require('express-validator');
//const router = express.Router();

//const pool = require('../config/database');

//router.get('/', async (req, res) => {
//    res.render('perfil/info');
//});


/*
router.get('/editRoles/:ID_rol', async (req, res) => {
    const { ID_rol } = req.params;
    const roles = await pool.query('SELECT * FROM roles WHERE ID_rol = ?', [ID_rol]);
    res.render('roles/editRoles', { rol:roles[0]});
});


router.post('/editRoles/:ID_rol', async (req, res) => {
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
});*/

//module.exports = router;