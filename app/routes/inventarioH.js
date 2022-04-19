const express = require('express');

const router = express.Router();

const pool = require('../config/database');
//importamos el modulo que creamos para proteger rutas
const { isLoggedIn } = require('../lib/UsuariosAuth');


router.get('/', async (req, res) => {
    const inventariosH = await pool.query('SELECT * FROM inventarioH WHERE Recinto = ?', [req.user.Recinto]);
res.render('inventarioH/listaInventarioH', { inventariosH });
});





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
        Recinto: req.user.Recinto
    };
    await pool.query('INSERT INTO inventarioH set ? ', [newInventarioH]);
        //creamos mensaje
        req.flash('completo', 'Peticion enviada con exito');
    res.redirect('/Coordinador/inventarioH');
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








//////////////////////////////////////////////////

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
        RecintoHP: req.user.Recinto
    };
    await pool.query('INSERT INTO pedidoH set ? ', [newReaPedidoH]);
        //creamos mensaje
        req.flash('completo', 'Peticion enviada con exito');
    res.redirect('/Coordinador/inventarioH/listaPedidoHRea');
});

router.get('/listaPedidoHRea', isLoggedIn, async (req, res) => {
    const pedidosHrea = await pool.query('SELECT * FROM pedidoH WHERE RecintoHP = ?', [req.user.Recinto]);
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