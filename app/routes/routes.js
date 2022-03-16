const express = require('express');
//const passport = require('passport');
const router = express.Router();

const { isNotloggedIn } = require('../lib/UsuariosAuth');

router.get('/', isNotloggedIn, (req, res) => {
    res.render('login', {layout: 'main2'})
});

module.exports = router;