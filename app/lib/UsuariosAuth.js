module.exports = {
    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){//si existe la sesion continuara ejecutando el codigo
            return next();
        }else{
            return res.redirect('/Iniciar');
        }
    },
    //evita rutas cuando el usuario esta en su sesion
    isNotloggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/perfil');
        }
    }
}