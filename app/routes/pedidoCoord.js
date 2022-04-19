
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

router.get('/', async (req, res) => {
    const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE Recinto = ?', [req.user.Recinto]);
res.render('pedidoCoord/listaInventarioHC', { inventariosH });
});

//Lista de materia prima del inventario principal
router.get('/listaMPDC', async (req, res) => {
    const msp = await pool.query('SELECT * FROM inventarioP');
    console.log(msp);
    res.render('pedidoCoord/listaMPDC', { msp });
});

//Da de alta los pedidos el empleado/usuario
router.get('/addPCoord/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;

    //tabla inventarioP(inventario principal)
        //obtiene stock
        const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
        const stockMPVal = stockMP[0].stock;
            //console.log(stockMPVal);
            
        if(stockMPVal >= 1 ){
            const pmps = await pool.query('SELECT * FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
            res.render('pedidoCoord/addPCoord', { pmp:pmps[0]});
        }else{
            //creamos mensaje
            req.flash('mensaje', 'No hay materia prima en existencia!!');
            res.redirect('/Coordinador/pedidoCoord/listaMPDC');
        }

});

router.post('/addPCoord/:ID_materiaPrima', async (req, res) => {
    const { ID_materiaPrima } = req.params;

    const { 
        Nom_materiaPrima,
        Desc_materiaPrima,
        Medida_materiaPrima,
        Cant_materiaPrima
        //,stock
    } = req.body;
    const newPedidoC = { 
        pedidoH: Nom_materiaPrima,
        Desc_pedido: Desc_materiaPrima,
        MedidaHP: Medida_materiaPrima,
        CantHP: Cant_materiaPrima,
        StockHP: Cant_materiaPrima,
        EstatusHP: "Petición confirmada!",
        Desc_EstatusHP: "Tu pedido ha sido confirmado por el coordinador del recinto local.",
        UsuarioHP: req.user.usuario,
        RecintoHP: req.user.Recinto
    };

    //tabla inventarioP(inventario principal)
        //obtiene stock
        const stockMP = await pool.query('SELECT stock FROM inventarioP WHERE ID_materiaPrima = ?', [ID_materiaPrima]);
        const stockMPVal = stockMP[0].stock;
            //console.log(stockMPVal);
    
    if(Cant_materiaPrima >= 1 || Cant_materiaPrima == stockMPVal){
        await pool.query('INSERT INTO pedidoH set ?', [newPedidoC]);
            //creamos mensaje
            req.flash('completo', 'Pedido realizado exitosamente');
            res.redirect('/Coordinador/pedidoCoord/listaPRC');

    }else{
        if(Cant_materiaPrima > stockMPVal){
            //creamos mensaje
            req.flash('mensaje', 'No es posible realizar pedidos mayores a la cantidad disponible!');
            res.redirect('/Coordinador/pedidoCoord/listaPRC');
        }else{
            if(Cant_materiaPrima <= 0){
                //creamos mensaje
                req.flash('mensaje', 'La cantidad ingresada debe ser mayor a cero!');
                res.redirect(`/Coordinador/pedidoCoord/addPCoord/${ID_materiaPrima}`);
            }

        }
    }

});

//Pedidos realizados por los empleados que pertenecen al recinto local (PPL = listaPedidosPendientesLocales)
router.get('/listaPPL', async (req, res) => {
    const mph = await pool.query('SELECT * FROM pedidoH WHERE RecintoHP = ? ORDER BY EstatusHP', [req.user.Recinto]);
    console.log(mph);
    res.render('pedidoCoord/listaPPL', { mph });
});

router.get('/deletePPL/:ID_pedidoH', isLoggedIn, async (req, res) => {
    const { ID_pedidoH } = req.params;
    await pool.query('DELETE FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH] );
        //creamos mensaje
        req.flash('completo', 'Pedido eliminado correctamente');
    res.redirect('/Coordinador/pedidoCoord/listaPPL');
});

//Pedidos realizados por el coordinador del recinto local
router.get('/listaPRC', async (req, res) => {
    const mph = await pool.query('SELECT * FROM pedidoH WHERE UsuarioHP = ? AND RecintoHP = ? ORDER BY EstatusHP', [req.user.usuario, req.user.Recinto]);
    console.log(mph);
    res.render('pedidoCoord/listaPRC', { mph });
});

router.get('/deletePRC/:ID_pedidoH', isLoggedIn, async (req, res) => {
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
        res.redirect('/Coordinador/pedidoCoord/listaPRC');

    }else{
        if(EstatusHP == "En camino..."){
            //creamos mensaje
            req.flash('mensaje', 'El pedido ya esta en camino, por lo tanto no es posible eliminarlo!');
            res.redirect('/Coordinador/pedidoCoord/listaPRC');
        }else{
            if(EstatusHP == "Entrega completa!"){
                //creamos mensaje
                req.flash('mensaje', 'El pedido ya ha sido entregado y almacenado en el inventario, por lo tanto no es posible eliminarlo!');
                res.redirect('/Coordinador/pedidoCoord/listaPRC');
            }
        }
    }

});

//CONFIRMAR PEDIDO
router.get('/confirmarPCoord/:ID_pedidoH', isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;
        //console.log(ID_pedidoH)

        
    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);

        if(EstatusHP == "Petición en procesó..."){
        //actualiza estado de la petición
        const actualizo = await pool.query('UPDATE pedidoH set EstatusHP = "Petición confirmada!", Desc_EstatusHP = "Tu pedido ha sido confirmado por el coordinador del recinto local." WHERE ID_pedidoH = ?', [ID_pedidoH]);
            console.log(actualizo);

            //creamos mensaje
            req.flash('completo', 'Se ha confirmado la petición exitosamente!');
            res.redirect('/Coordinador/pedidoCoord/listaPPL');

        }else{
            if(EstatusHP == "Petición confirmada!"){
                //creamos mensaje
                req.flash('mensaje', 'El pedido ya fue confirmado anteriormente!');
                res.redirect('/Coordinador/pedidoCoord/listaPPL');
            }else{
                if(EstatusHP == "En camino..."){
                    //creamos mensaje
                    req.flash('mensaje', 'El pedido esta en camino, por lo tanto, no es posible confirmar nuevamente el pedido!');
                    res.redirect('/Coordinador/pedidoCoord/listaPPL');
                }else{
                    if(EstatusHP == "Entrega completa!"){
                        //creamos mensaje
                        req.flash('mensaje', 'El pedido ya fue entregado y almacenado exitosamente!');
                        res.redirect('/Coordinador/pedidoCoord/listaPPL');
                    }else{
                        if(EstatusHP == "Petición denegada!"){
                            //creamos mensaje
                            req.flash('mensaje', 'El pedido ya fue confirmado anteriormente, por lo tanto no es posible denegarlo!');
                            res.redirect('/Coordinador/pedidoCoord/listaPPL');
                        }
                    }
                }
            }
        }
});

//Denegar pedido coordinador
router.get('/denegarPCoord/:ID_pedidoH',isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;
        //console.log(ID_pedidoH)

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);

            if(EstatusHP == "Petición en procesó..." || EstatusHP == "Petición confirmada!"){
                const pedidos = await pool.query('SELECT * FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
                res.render('pedidoCoord/denegarPCoord', { pedido:pedidos[0]});

            }else{
                if(EstatusHP == "En camino..."){
                    //creamos mensaje
                    req.flash('mensaje', 'El pedido ya esta en camino, por lo tanto no es posible denegarlo!');
                    res.redirect('/Coordinador/pedidoCoord/listaPPL'); 
                }else{
                    if(EstatusHP == "Entrega completa!"){
                        //creamos mensaje
                        req.flash('mensaje', 'El pedido ya fue entregado, por lo tanto no es posible denegarlo!');
                        res.redirect('/Coordinador/pedidoCoord/listaPPL');

                    }else{
                        if(EstatusHP == "Petición denegada!"){
                            //creamos mensaje
                            req.flash('mensaje', 'El pedido ya fue denegado anteriormente!');
                            res.redirect('/Coordinador/pedidoCoord/listaPPL');
                        }
                    }
                }
            }
});

//router.get('/denegarPCoord/:ID_pedidoH',isLoggedIn, async (req, res) => {
router.post('/denegarPCoord/:ID_pedidoH',isLoggedIn, async (req, res) => {
    //obtiene los parametros de la fila que se confirmara
    const { ID_pedidoH } = req.params;

    const { 
        pedidoH,
        Desc_pedido,
        MedidaHP,
        CantHP,
        Desc_EstatusHP
    } = req.body;
    const newPDen = { 
        pedidoH,
        Desc_pedido,
        MedidaHP,
        CantHP,
        StockHP: CantHP,
        EstatusHP: "Petición denegada!",
        Desc_EstatusHP
    };

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);

    try{
        const UpdateEstDen = await pool.query('UPDATE pedidoH set ? WHERE ID_pedidoH = ?', [newPDen, ID_pedidoH]);
        console.log(UpdateEstDen);

            //creamos mensaje
            req.flash('completo', 'Se ha denegado la petición!');
            res.redirect('/Coordinador/pedidoCoord/listaPPL');  

    }catch(error) {
        console.log(error);
    }

});













//añadir a inventario, actualiza cantidad y stock
router.get('/addInvH/:ID_pedidoH', isLoggedIn, async (req, res) => {
    const { ID_pedidoH } = req.params;

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);
    
    if(EstatusHP == "En camino..."){
        const pedidos = await pool.query('SELECT * FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        res.render('pedidoCoord/addInvH', { pedido:pedidos[0]});
    }else{
        if(EstatusHP == "Petición en procesó..." || EstatusHP == "Petición confirmada!" || EstatusHP == "Petición denegada!" || EstatusHP == "Entrega completa!"){
            //creamos mensaje
            req.flash('mensaje', 'El pedido no puede ser añadido al inventario!!');
            res.redirect('/Coordinador/pedidoCoord/listaPPL');
        }
    }
});

router.post('/addInvH/:ID_pedidoH', isLoggedIn, async (req, res) => {
    const { ID_pedidoH } = req.params;

    const { 
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo,
        Desc_EstatusMPHE
    } = req.body;
    const newEntradaH = {
        Nom_mpHE,
        Desc_mpHE,
        Medida_mpHE,
        Cant_mpHE,
        NomUs_dejo,
        Estatus_mpHE: "Entrega completa!",
        Desc_EstatusMPHE: "La materia prima ha sido entregada y añadida al inventario!",
        Recinto: req.user.Recinto
    };
    
    const NomInput = newEntradaH.Nom_mpHE;
    const DescInput = newEntradaH.Desc_mpHE;
    const MedidaInput = newEntradaH.Medida_mpHE;
    const CantInput = newEntradaH.Cant_mpHE;
    const NUsDejoInput = newEntradaH.NomUs_dejo;


    const newAddInvH = {
        Nom_mpH: Nom_mpHE,
        Desc_mpH: Desc_mpHE,
        Medida_mpH: Medida_mpHE,
        Cant_mpH: Cant_mpHE,
        StockH: Cant_mpHE,
        Recinto: req.user.Recinto
    };

    //creamos una variable donde se guarda un arreglo con todos los nombres que estan en el inventarioH(inventario local).
    var nombreMPS = await pool.query('SELECT Nom_mpH FROM inventarioH WHERE Recinto = ?', [req.user.Recinto]);
    //console.log(nombreMPS);
    //console.log(nombreMPS[0].Nom_mpH);
    //var tArreglo = nombreMPS.length;
    //console.log(tArreglo);

    //creamos un for para ir agregando los valores en un arreglo totalmente nuevo.
    var arregloNombres = [];
    for(var i = 0; i < nombreMPS.length; i++){
        var resultado = nombreMPS[i].Nom_mpH;
        arregloNombres.push(resultado);
    }
    console.log(arregloNombres);//imprimimos el arreglo [x, x, x]

    //creamos una variable donde guardara el nombre de la materia prima, despues buscara con el include(el nombre del input) si el nombre que esta en el iput del nombre de la materia prima existe.
    var existente = arregloNombres.includes(NomInput);
    console.log(existente);//nos arrojara true or false

    //validamos
    if(NomInput == "" || NUsDejoInput == ""){//si los input estan vacios enviara un mensaje a pantalla
                //creamos mensaje
                req.flash('mensaje', 'Debes llenar todos los campos para continuar!');
                res.redirect(`/Coordinador/pedidoCoord/addInvH/${ID_pedidoH}`);
    }else{
        if(existente === true){//si el nombre de la materia prima existe, simplemente sumara las cantidades al nombre existente.
            await pool.query('INSERT INTO entradaH set ?', [newEntradaH]);//agrega el registro de la entrada

            //actualiza:
            //Cantidad
            await pool.query('UPDATE inventarioH set Cant_mpH = Cant_mpH + ? WHERE Nom_mpH = ? AND Recinto = ?', [CantInput, NomInput, req.user.Recinto]);
            //stock
            await pool.query('UPDATE inventarioH set StockH = StockH + ? WHERE Nom_mpH = ? AND Recinto = ?', [CantInput, NomInput, req.user.Recinto]);
            
            //actualiza el estado del pedido.
            await pool.query('UPDATE pedidoH set EstatusHP = "Entrega completa!" WHERE ID_pedidoH = ? AND RecintoHP = ?', [ID_pedidoH, req.user.Recinto]);

                //creamos mensaje
                req.flash('completo', 'Se actualizo la cantidad y existencias de la materia prima!');
                res.redirect('/Coordinador/entradaH');
        }else{
            if(existente === false){//si no existe, añadira completamente la información de esta materia prima.
                await pool.query('INSERT INTO entradaH set ?', [newEntradaH]);//agrega el registro de la entrada.

                //agrega registro completo al no existir en el inventarioH(inventario local)
                await pool.query('INSERT INTO inventarioH set ?', [newAddInvH]);

                //actualiza el estado del pedido
                await pool.query('UPDATE pedidoH set EstatusHP = "Entrega completa!" WHERE ID_pedidoH = ? AND RecintoHP = ?',[ID_pedidoH, req.user.Recinto]);

                    //creamos mensaje
                    req.flash('completo', 'Nueva materia prima registrada!');
                    res.redirect('/Coordinador/entradaH');
            }
        }
    }

});

//mover y denegar
router.get('/moverMPH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;

    //tabla inventarioH(inventario local)
        //obtiene stock
        const stockMPH = await pool.query('SELECT StockH FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
        const stockMPHVal = stockMPH[0].StockH;
            console.log(stockMPHVal);

        //res.render('pedidoCoord');

        if(stockMPHVal >= 1 ){
            const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
            res.render('pedidoCoord/moverMPH', { inventarioH:inventariosH[0]});
        }else{
            //creamos mensaje
            req.flash('mensaje', 'No hay existencia de esta materia prima en inventario local!!');
            res.redirect('/Coordinador/pedidoCoord');
        }
    
});

//mover materia prima a otro recinto
router.post('/moverMPH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;

    const { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH
        //,StockH
    } = req.body;
    const newMovimiento = {
        Nom_materiaPrima: Nom_mpH,
        Desc_materiaPrima: Desc_mpH,
        Medida_materiaPrima: Medida_mpH,
        Cant_materiaPrima: Cant_mpH,
        stock: Cant_mpH
    };

    
    //obtengo la Cant_mpH de la tabla de inventarioH
    const CH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
        //console.log(CH[0].Cant_mpH);
    const cantH = CH[0].Cant_mpH;
    console.log(cantH);
        //obtengo la stockH de la tabla de inventarioH
        const SH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
            //console.log(SH[0].StockH);
        const stockH = SH[0].StockH;
        console.log(stockH);
    

                                        /*const Nom_materiaPrima = newMovimiento.Nom_materiaPrima;
                                            //console.log(Nom_materiaPrima);*/
        const Cant_materiaPrima = newMovimiento.Cant_materiaPrima;
            console.log(Cant_materiaPrima);
        const stock = newMovimiento.stock;
            console.log(stock);
    
    //obtiene el Nombre de la materia prima de la tabla inventarioH(inventario Hijo (inventario local))
    const valmph = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    const Nmph = valmph[0].Nom_mpH;
    console.log(Nmph);

    //obtiene el Nombre de la materia prima de la tabla inventarioP(inventario Principal)
    const valNmpP = await pool.query('SELECT * FROM inventarioP WHERE Nom_materiaPrima = ?', [Nmph]);
    //console.log(valNmpP[0].Nom_mpH);
    const Nom_materiaPrima = valNmpP[0].Nom_materiaPrima;
    //console.log("Este es el el nombre de la materia prima del inventario Principal: " + NmpH);
    console.log(Nom_materiaPrima);

                                    /*const valCantP = await pool.query('SELECT * FROM inventarioP WHERE Nom_materiaPrima = ?', [Nmph]);
                                    const Cant_materiaPrima = valCantP[0].Cant_materiaPrima;
                                    console.log(Cant_materiaPrima);

                                    const valStockH = await pool.query('SELECT * FROM inventarioP WHERE Nom_materiaPrima = ?', [Nmph]);
                                    const stock = valStockH[0].stock;
                                    console.log(stock);*/


   try{
            if(stockH > 0){
                if(stockH < stock){
                         //creamos mensaje
                         req.flash('warning', 'Materia prima insuficiente para completar envio de lote');//quiere decir que no hay ningun producto con ese nombre
                         res.redirect(`/Coordinador/pedidoCoord/moverMPH/${ID_mpH}`);
                }else if(stock <= 0){
                        //creamos mensaje
                        req.flash('mensaje', 'Coloca un numero mayor a cero para poder continuar con tu pedido');
                        res.redirect(`/Coordinador/pedidoCoord/moverMPH/${ID_mpH}`);
                }else{
                    const MovimientoCant = await pool.query('UPDATE inventarioP set Cant_materiaPrima = Cant_materiaPrima + ? WHERE Nom_materiaPrima = ?', [Cant_materiaPrima,Nom_materiaPrima]);
                    //console.log(MovimientoCant);
                    const MovimientoStock = await pool.query('UPDATE inventarioP set stock = stock + ? WHERE Nom_materiaPrima = ?', [stock, Nom_materiaPrima]);
                    //console.log(MovimientoStock);
        
                    const restarTransaccionCant = await pool.query('UPDATE inventarioH set Cant_mpH = Cant_mpH - ? WHERE ID_mpH = ?', [Cant_materiaPrima,ID_mpH]);
                    //console.log(restarTransaccionCant);
                    const restarTransaccionStock = await pool.query('UPDATE inventarioH set StockH = StockH - ? WHERE ID_mpH = ?', [stock, ID_mpH]);
                    //console.log(restarTransaccionStock);
        
                        //creamos mensaje
                        req.flash('completo', 'Se realizo la transacción de materia prima');
                        res.redirect('/Coordinador/pedidoCoord');
                }
        
            }else{
                 //creamos mensaje
                 req.flash('mensaje', 'No hay materia prima en el inventario local');
                 res.redirect(`/Coordinador/pedidoCoord/moverMPH/${ID_mpH}`);
            }

    }catch(error) {
        console.log(error);
        
    }

});

//regresar lote completo
router.get('/regresarMPH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    //console.log(ID_mpH);

    //obtiene el Nombre de la materia prima de la tabla inventarioH(inventario Hijo (inventario local))
    const valmph = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    const Nmph = valmph[0].Nom_mpH;
    console.log(Nmph);

    //obtiene el Nombre de la materia prima de la tabla inventarioP(inventario Principal)
    const valNmpP = await pool.query('SELECT * FROM inventarioP WHERE Nom_materiaPrima = ?', [Nmph]);
    //console.log(valNmpP[0].Nom_mpH);
    const Nom_materiaPrima = valNmpP[0].Nom_materiaPrima;
    //console.log("Este es el el nombre de la materia prima del inventario Principal: " + NmpH);
    console.log(Nom_materiaPrima);

        const totalCantH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
        //console.log(totalCantH[0].Cant_mpH);
        const Cant_mpH = totalCantH[0].Cant_mpH;
        console.log(Cant_mpH);

        const totalStockH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
        //console.log(totalStockH[0].StockH);
        const StockH = totalStockH[0].StockH;
        console.log(StockH);

    if(StockH > 0){

        await pool.query('UPDATE inventarioP set Cant_materiaPrima = Cant_materiaPrima + ? WHERE Nom_materiaPrima = ?', [Cant_mpH, Nmph]);
        await pool.query('UPDATE inventarioP set stock = stock + ? WHERE Nom_materiaPrima = ?', [StockH, Nmph]);
    
        await pool.query('UPDATE inventarioH set Cant_mpH = Cant_mpH - ? WHERE Nom_mpH = ?', [Cant_mpH, Nmph]);
        await pool.query('UPDATE inventarioH set StockH = StockH - ? WHERE Nom_mpH = ?', [StockH, Nmph]);
    
            req.flash('completo', 'Se ha enviado el lote de materia prima completo');
            res.redirect('/Coordinador/pedidoCoord');

    }else{
            req.flash('mensaje', 'No hay materia prima en el inventario local ');
            res.redirect('/Coordinador/pedidoCoord');  
    }

});

module.exports = router;