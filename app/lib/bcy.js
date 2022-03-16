const bcrypt = require('bcryptjs');
const bcy = {};

//definimos metodos
    //encriptar pasword
    bcy.encriptar = async ( pass ) => {
        const salt = await bcrypt.genSalt(10);
        const bcyPass = await bcrypt.hash(pass, salt);
        return bcyPass;
    };

    //desencripta
    bcy.desencriptar = async ( pass, savedPassword ) => {
        try{
            return await bcrypt.compare(pass, savedPassword);
        }catch(error) {
            console.log(error);
        }
    };

module.exports = bcy;