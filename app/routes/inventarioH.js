const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');

//redirecciona al formulario
router.get('/addInventarioH', isLoggedIn, (req, res) => {
    res.render('inventarioH/addInventarioH');
});

router.post('/addInventarioH', isLoggedIn, async (req, res) => {
    const {        
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH
     } = req.body;
    const newInventarioH = { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH,
        ID_Recinto: req.user.ID_Recinto
    };
    await pool.query('INSERT INTO inventarioH set ? ', [newInventarioH]);
        //creamos mensaje
        req.flash('completo', 'Peticion enviada con exito');
    res.redirect('/Coordinador/inventarioH');
});

router.get('/', async (req, res) => {
        const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE ID_Recinto = ?', [req.user.ID_Recinto]);
    res.render('inventarioH/listaInventarioH', { inventariosH });
});

router.get('/deleteInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    await pool.query('DELETE FROM inventarioH WHERE ID_mpH = ?', [ID_mpH] );
                //creamos mensaje
                req.flash('completo', 'Materia prima eliminada correctamente');
    res.redirect('/Coordinador/inventarioH');
});

router.get('/editInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    res.render('inventarioH/editInventarioH', { inventarioH:inventariosH[0]});
});


router.post('/editInventarioH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    const { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH
    } = req.body;
    const newInventarioH = { 
        Nom_mpH,
        Desc_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH
    };
    
    try{

        const resultado = await pool.query('UPDATE inventarioH set ? WHERE ID_emp = ?', [newInventarioH, ID_mpH]);
        //console.log(resultado);
            //creamos mensaje
            req.flash('completo', 'Materia prima modificada correctamente');
            res.redirect('/Coordinador/inventarioH');

    }catch(error) {
        console.log(error);
    }
    
});


//mover y denegar
router.get('/moverMPH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;
    //console.log(ID_mpH);
    
    const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE ID_mpH = ?', [ID_mpH]);
    res.render('inventarioH/moverMPH', { inventarioH:inventariosH[0]});
});

//mover materia prima a otro recinto
router.post('/moverMPH/:ID_mpH', isLoggedIn, async (req, res) => {
    const { ID_mpH } = req.params;

    const { 
        Nom_mpH,
        Medida_mpH,
        Cant_mpH,
        StockH
    } = req.body;
    const cantidades = {
        cmpH: Cant_mpH,
        sckh: StockH
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
    

    /*const Nom_materiaPrima = cantidades.Nom_materiaPrima;
        //console.log(Nom_materiaPrima);*/
    const cmpH = cantidades.cmpH;
        console.log(cmpH);
    const sckh = cantidades.sckh;
        console.log(sckh);
    
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
                if(stockH < sckh){
                         //creamos mensaje
                         req.flash('warning', 'Materia prima insuficiente para completar envio de lote');//quiere decir que no hay ningun producto con ese nombre
                         res.redirect(`/Coordinador/inventarioH/moverMPH/${ID_mpH}`);
                }else if(sckh <= 0){
                        //creamos mensaje
                        req.flash('mensaje', 'Coloca un numero mayor a cero para poder continuar con tu pedido');
                        res.redirect(`/Coordinador/inventarioH/moverMPH/${ID_mpH}`);
                }else{
                    const MovimientoCant = await pool.query('UPDATE inventarioP set Cant_materiaPrima = Cant_materiaPrima + ? WHERE Nom_materiaPrima = ?', [cmpH,Nom_materiaPrima]);
                    //console.log(MovimientoCant);
                    const MovimientoStock = await pool.query('UPDATE inventarioP set stock = stock + ? WHERE Nom_materiaPrima = ?', [sckh, Nom_materiaPrima]);
                    //console.log(MovimientoStock);
        
                    const restarTransaccionCant = await pool.query('UPDATE inventarioH set Cant_mpH = Cant_mpH - ? WHERE ID_mpH = ?', [cmpH,ID_mpH]);
                    //console.log(restarTransaccionCant);
                    const restarTransaccionStock = await pool.query('UPDATE inventarioH set StockH = StockH - ? WHERE ID_mpH = ?', [sckh, ID_mpH]);
                    //console.log(restarTransaccionStock);
        
                        //creamos mensaje
                        req.flash('completo', 'Se realizo la transacción de materia prima');
                        res.redirect('/Coordinador/inventarioH');
                }
        
            }else{
                 //creamos mensaje
                 req.flash('mensaje', 'No hay materia prima en el inventario local');
                 res.redirect(`/Coordinador/inventarioH/moverMPH/${ID_mpH}`);
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
            res.redirect('/Coordinador/inventarioH');

    }else{
            req.flash('mensaje', 'No hay materia prima en el inventario local ');
            res.redirect('/Coordinador/inventarioH');  
    }

});

//redirecciona al formulario
router.get('/addReaPedidoH', isLoggedIn, (req, res) => {
    res.render('inventarioH/addReaPedidoH');
});

router.post('/addReaPedidoH', isLoggedIn, async (req, res) => {
    const {        
        pedidoH,
        Desc_pedido,
        MedidaHP,
        CantHP,
        StockHP,
        EstatusHP,
        Desc_EstatusHP,
        UsuarioHP,
        RecintoHP,
        ID_Recinto
     } = req.body;
    const newReaPedidoH = { 
        pedidoH,
        Desc_pedido,
        MedidaHP,
        CantHP,
        StockHP,
        EstatusHP: "Confirmando...",
        Desc_EstatusHP: "Sin descripción.",
        UsuarioHP,
        RecintoHP: req.user.Recinto,
        ID_Recinto: req.user.ID_Recinto
    };
    await pool.query('INSERT INTO pedidoH set ? ', [newReaPedidoH]);
        //creamos mensaje
        req.flash('completo', 'Peticion enviada con exito');
    res.redirect('/Coordinador/inventarioH/listaPedidoHRea');
});

router.get('/listaPedidoHRea', isLoggedIn, async (req, res) => {
    const pedidosHrea = await pool.query('SELECT * FROM pedidoH WHERE ID_Recinto = ?', [req.user.ID_Recinto]);
    res.render('inventarioH/listaPedidoHRea', { pedidosHrea });
});

router.get('/deletePedidoHRea/:ID_pedidoH', async (req, res) => {
    const { ID_pedidoH } = req.params;

    //Tabla pedidoH(Pedidos)
        //obiene la descripciòn del pedido
        const EhP = await pool.query('SELECT EstatusHP FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH]);
        const EstatusHP = EhP[0].EstatusHP;
            console.log(EstatusHP);
    
    if(EstatusHP == "Confirmando..."){
        await pool.query('DELETE FROM pedidoH WHERE ID_pedidoH = ?', [ID_pedidoH] );
            //creamos mensaje
            req.flash('completo', 'Petición eliminada correctamente');
                res.redirect('/Coordinador/inventarioH/listaPedidoHRea');

    }else{
        if(EstatusHP == "En camino..." || "Entregado!"){
            req.flash('mensaje', 'La petición no se puede eliminar ya que termino el proceso de entrega');
                res.redirect('/Coordinador/inventarioH/listaPedidoHRea');

        }
    }

});

module.exports = router;