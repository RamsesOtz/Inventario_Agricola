
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//Lista de materia prima del inventario local (inventarioH)
router.get('/', async (req, res) => {
    const inventariosH = await pool.query('SELECT * FROM inventarioH');
    console.log(inventariosH);
    res.render('pedidoEmp/listaInventarioHE', { inventariosH });
});

//Lista de materia prima del inventario principal
router.get('/listaMPD', async (req, res) => {
    const msp = await pool.query('SELECT * FROM inventarioP');
    console.log(msp);
    res.render('pedidoEmp/listaMPD', { msp });
});

//Da de alta los pedidos el empleado/usuario
router.get('/addPH/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;

    //tabla inventarioP(inventario principal)
        //obtiene stock
        const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
        const stockMPVal = stockMP[0].stock;
            //console.log(stockMPVal);
        
        if(stockMPVal >= 1 ){
            const pmps = await pool.query('SELECT * FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
            res.render('pedidoEmp/addPH', { pmp:pmps[0]});
        }else{
            //creamos mensaje
            req.flash('mensaje', 'No hay materia prima en existencia!!');
            res.redirect('/Empleado/pedidoEmp/listaMPD');
        }

});

router.post('/addPH/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;

    const { 
        Nom_materiaPrima,
        Desc_materiaPrima,
        Medida_materiaPrima,
        Cant_materiaPrima
        //,stock
    } = req.body;
    const newPedido = { 
        pedidoH: Nom_materiaPrima,
        Desc_pedido: Desc_materiaPrima,
        MedidaHP: Medida_materiaPrima,
        CantHP: Cant_materiaPrima,
        StockHP: Cant_materiaPrima,
        EstatusHP: "Petición en procesó...",
        Desc_EstatusHP: "El pedido esta siendo revisado por el coordinador del recinto local.",
        UsuarioHP: req.user.usuario,
        RecintoHP: req.user.Recinto
    };

    //tabla inventarioP(inventario principal)
        //obtiene stock
        const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
        const stockMPVal = stockMP[0].stock;
            //console.log(stockMPVal);

    if(Cant_materiaPrima >= 1 || Cant_materiaPrima == stockMPVal){
        await pool.query('INSERT INTO pedidoH set ?', [newPedido]);
            //creamos mensaje
            req.flash('completo', 'Pedido realizado exitosamente');
            res.redirect('/Empleado/pedidoEmp/listaHPrea');

    }else{
        if(Cant_materiaPrima > stockMPVal){
            //creamos mensaje
            req.flash('mensaje', 'No es posible realizar pedidos mayores a la cantidad disponible!');
            res.redirect('/Empleado/pedidoEmp/listaMPD');
        }else{
            if(Cant_materiaPrima <= 0){
                //creamos mensaje
                req.flash('mensaje', 'La cantidad ingresada debe ser mayor a cero!');
                res.redirect(`/Empleado/pedidoEmp/addPH/${ID_materiaPrima}`);
            }

        }
    }
});


//Pedidos realizados por el empleado
router.get('/listaHPrea', async (req, res) => {
    const mph = await pool.query('SELECT * FROM pedidoH WHERE UsuarioHP = ? AND RecintoHP = ? ORDER BY EstatusHP', [req.user.usuario, req.user.Recinto]);
    console.log(mph);
    res.render('pedidoEmp/listaHPrea', { mph });
});

router.get('/deleteHPrea/:ID_pedidoH', isLoggedIn, async (req, res) => {
    const { ID_pedidoH } = req.params;

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);
    
    if(EstatusHP == "Petición en procesó..." || EstatusHP == "Petición confirmada!" || EstatusHP == "Petición denegada!"){
        await pool.query('DELETE FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH] );
        //creamos mensaje
        req.flash('completo', 'Pedido eliminado correctamente');
        res.redirect('/Empleado/pedidoEmp/listaHPrea');
    }else{
        if(EstatusHP == "En camino..."){
            //creamos mensaje
            req.flash('mensaje', 'El pedido ya esta en camino, por lo tanto no es posible eliminarlo!');
            res.redirect('/Empleado/pedidoEmp/listaHPrea');
        }else{
            if(EstatusHP == "Entrega completa!"){
                //creamos mensaje
                req.flash('mensaje', 'El pedido ya ha sido entregado y almacenado en el inventario, por lo tanto no es posible eliminarlo!');
                res.redirect('/Empleado/pedidoEmp/listaHPrea');
            }
        }
    }
});

module.exports = router;







