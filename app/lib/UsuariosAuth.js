/*module.exports = {
    Auth(req, res, next){
        const usRol = req.user.NomRol
            
        //console.log(Rol);
        switch(usRol){
            case 'administrador':
                usRol.isAuthenticated();
                next();
            break;
            case "coordinador":
                usRol.isAuthenticated();
                next();
            break;
            case "usuario":
                usRol.isAuthenticated();
                next();
            break;
            default:
                case "":
                    usRol.isAuthenticated();
                    next();
                break;
        }
    },
    //evita rutas cuando el usuario esta en su sesion
    isNotloggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/perfil');
        }//cambiar!!!!!!!!!!! y agregar middelware para evitar ruta al iniciar sesion con un rol especifio
    }
}*/

module.exports = {
    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){//si existe la sesion continuara ejecutando el codigo
            return next();
        }else{
            return res.redirect('/Iniciar');
        }//cambiar!!!!!!!!
    },
    //evita rutas cuando el usuario esta en su sesion
    isNotloggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/perfil');
        }//cambiar!!!!!!!!!!! y agregar middelware para evitar ruta al iniciar sesion con un rol especifio
    }
}