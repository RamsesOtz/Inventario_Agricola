const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/',isLoggedIn, async (req, res) => {
    const msp = await pool.query('SELECT * FROM pedidoH WHERE EstatusHP = "Petición confirmada!"');
    console.log(msp);
    res.render('pedido/listaPedidoRes', { msp });
});

router.get('/confirmarPedido/:ID_pedidoH',isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;
        //console.log(ID_pedidoH)

//obtiene el nombre del pedido de la tabla pedido
    const filaNP = await pool.query('SELECT * FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
    const pH = filaNP[0].pedidoH;
        //console.log('El nombre del pedido es: ' + pH);

    //obtiene el ID de la materia prima de la tabla inventarioP(inventario principal)
    const filaInvP = await pool.query('SELECT ID_materiaPrima FROM inventarioP WHERE Nom_materiaPrima = ?', [pH]);
    const ID_materiaPrima = filaInvP[0].ID_materiaPrima;
        //console.log('El ID de la materia prima es: ' + ID_materiaPrima);

    //tabla pedidoP(Pedidos)
        //obtiene la cantidad y stock
        const cant = await pool.query('SELECT CantHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const cantVal = cant[0].CantHP;
            //console.log(cantVal);
        const stock = await pool.query('SELECT StockHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const stockVal = stock[0].StockHP;
            //console.log(stockVal);

    //tabla inventarioP(inventario principal)
        //obtiene la cantidad y stock
                const cantMP = await pool.query('SELECT Cant_materiaPrima FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
                const cantMPVal = cantMP[0].Cant_materiaPrima;
                    console.log(cantMPVal);
                const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
                const stockMPVal = stockMP[0].stock;
                    console.log(stockMPVal);

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstHP = EhP[0].EstatusHP;
            console.log(EstHP);

            if(cantMPVal && stockMPVal > 0){
                if(EstHP == "Petición confirmada!"){
                    const pedidos = await pool.query('SELECT * FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
                    res.render('pedido/confirmarPedido', { pedido:pedidos[0]});

                }else{
                    if(EstHP == "Petición denegada!"){
                        req.flash('mensaje', 'No es posible confirmar, ya que el pedido fue denegado anteriormente!');
                        res.redirect('/Administrador/pedido');
        
                    }else{
                        if(EstHP == "En camino..."){
                            req.flash('mensaje', 'El pedido ya fue confirmado anteriormente!');
                            res.redirect('/Administrador/pedido');
                
                        }else{
                            if(EstHP == "Entrega completa!"){
                                req.flash('mensaje', 'El pedido ya fue entregado!');
                                res.redirect('/Administrador/pedido');
                            }
                        }

                    }
                }
            }else{
                req.flash('warning', 'No hay suficiente materia prima en inventario!, Debes dar de alta más materia prima');
                res.redirect('/Administrador/pedido');

            }
});

router.post('/confirmarPedido/:ID_pedidoH',isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;
        //console.log(ID_pedidoH)
    
    const { 
        Nom_mp,
        Desc_mpS,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        //StockHP,
        //Estatus_mpS,
        Desc_EstatusMPS
    } = req.body;
    const newConfirm = { 
        Nom_mp,
        Desc_mpS,
        Medida_mp,
        Cant_mp,
        NomUs_solicito,
        NomUs_autorizo,
        NomUs_llevo,
        Estatus_mpS: "En camino...",
        Desc_EstatusMPS: 'El pedido ya fue enviado'
    };

    //toma el estatus de newConfirm(newConfirm guarda los que envia el form)
    const EstForm = newConfirm.Estatus_mpS;
    const DescEstForm = newConfirm.Desc_EstatusMPS;

    
    const NUsSForm = newConfirm.NomUs_solicito;
    const NUsAForm = newConfirm.NomUs_autorizo;
    const NUsLlForm = newConfirm.NomUs_llevo;

    //obtiene el nombre del pedido de la tabla pedido
    const filaNP = await pool.query('SELECT * FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
    const pH = filaNP[0].pedidoH;
        //console.log('El nombre del pedido es: ' + pH);

    //obtiene el ID de la materia prima de la tabla inventarioP(inventario principal)
    const filaInvP = await pool.query('SELECT ID_materiaPrima FROM inventarioP WHERE Nom_materiaPrima = ?', [pH]);
    const ID_materiaPrima = filaInvP[0].ID_materiaPrima;
        //console.log('El ID de la materia prima es: ' + ID_materiaPrima);

    //tabla pedidoP(Pedidos)
        //obtiene la cantidad y stock
        const cant = await pool.query('SELECT CantHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const cantVal = cant[0].CantHP;
            //console.log(cantVal);
        const stock = await pool.query('SELECT StockHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const stockVal = stock[0].StockHP;
            //console.log(stockVal);

    //tabla inventarioP(inventario principal)
        //obtiene la cantidad y stock
                const cantMP = await pool.query('SELECT Cant_materiaPrima FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
                const cantMPVal = cantMP[0].Cant_materiaPrima;
                    console.log(cantMPVal);
                const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
                const stockMPVal = stockMP[0].stock;
                    console.log(stockMPVal);

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstHP = EhP[0].EstatusHP;
            console.log(EstHP);

            if(NUsSForm == "" || NUsAForm == "" ||  NUsLlForm == ""){
                req.flash('mensaje', 'Tienes que llenar todos los campos para continuar');
                res.redirect(`/Administrador/pedido/confirmarPedido/${ID_pedidoH}`);
            }else{
                //actualiza de la tabla inventarioP: restando la CantHP a la Cant_materiaPrima
                const UpdateCantidad = await pool.query('UPDATE inventarioP set Cant_materiaPrima = Cant_materiaPrima - ? WHERE ID_materiaPrima = ?', [cantVal,ID_materiaPrima]);
                console.log(UpdateCantidad);

                //actualiza de la tabla inventarioP: restando el StockHP a stock
                const UpdateStock = await pool.query('UPDATE inventarioP set stock = stock - ? WHERE ID_materiaPrima = ?', [stockVal,ID_materiaPrima]);
                console.log(UpdateStock);

                //actualiza estado.
                const actualizoEst = await pool.query('UPDATE pedidoH set EstatusHP = ? WHERE ID_pedidoH = ?', [EstForm, ID_pedidoH]);
                console.log(actualizoEst);
                //actualiza las observaciónes.
                const actualizoEstD = await pool.query('UPDATE pedidoH set Desc_EstatusHP = ? WHERE ID_pedidoH = ?', [DescEstForm, ID_pedidoH]);
                console.log(actualizoEstD);

                //inserta los datos del form al precionar confirmar
                const insertarSalida = await pool.query('INSERT INTO salidaMp set ?', [newConfirm]);

                    //creamos mensaje
                    req.flash('completo', 'Se ha confirmado el pedido exitosamente');
                    res.redirect('/Administrador/pedido');
                    
            }

});

/*router.get('/AdddescPedido/:ID_pedidoH', async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;

    //obiene la descripciòn del pedido
    const descP = await pool.query('SELECT Desc_EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
    const Desc_EstatusHP = descP[0].Desc_EstatusHP;
        console.log(Desc_EstatusHP);

    //actualiza estado como descripción del pedido.
    const UpdateEstDen= await pool.query('UPDATE pedidoH set Desc_EstatusHP = ? WHERE ID_pedidoH = ?', [Desc_EstatusHP,ID_pedidoH]);
        console.log(UpdateEstDen);

                //creamos mensaje
                req.flash('completo', 'Se ha envio tu comentario');
                res.redirect('/Administrador/pedido');
});*/

router.get('/denegarPedido/:ID_pedidoH',isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);

    //Tabla pedido
        //obiene la descripciòn del pedido
        const descP = await pool.query('SELECT Desc_EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const Desc_EstatusHP = descP[0].Desc_EstatusHP;
            console.log(Desc_EstatusHP);
            
            //validamos si el estatus esta en Confirmando...: Aun sera posible denegar el pedido.
            if(EstatusHP == "Petición en procesó..." || EstatusHP == "Petición confirmada!"){
                //actualiza estado como descripción del pedido.
                const UpdateEstDen= await pool.query('UPDATE pedidoH set EstatusHP = "Petición denegada!", Desc_EstatusHP = ? WHERE ID_pedidoH = ?', [Desc_EstatusHP,ID_pedidoH]);
                    console.log(UpdateEstDen);

                        //creamos mensaje
                        req.flash('completo', 'Se ha cancelado el pedido');
                        res.redirect('/Administrador/pedido');

            }else{
                if(EstatusHP == "Petición denegada!"){
                        
                    //creamos mensaje
                    req.flash('mensaje', 'El pedido ya fue denegado anteriormente!');
                        res.redirect('/Administrador/pedido');
                }else{
                    // de lo contrario enviara un mensaje mediante flash, cuando el estatus este En camino... o Entrega completa! ya no sera posible denegarlo.
                    if(EstatusHP == "En camino..." || EstatusHP == "Entrega completa!"){

                            //creamos mensaje
                            req.flash('mensaje', 'No es posible denegar el pedido, ya que ha sido confirmado.');
                            res.redirect('/Administrador/pedido');
                    }
                }

            }

});

module.exports = router;