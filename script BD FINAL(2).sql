-- ELIMINA BD
drop database inventario;

-- CREAMOS LA BASE DE DATOS
create database inventario;

-- USAMOS LA BASE DE DATOS
use inventario;

-- CREAMOS TABLAS
-- Tabla InventarioPadre
create table inventarioP(
ID_materiaPrima int not null auto_increment,
Nom_materiaPrima varchar(100) not null,
Desc_materiaPrima varchar(200) not null,
Medida_materiaPrima varchar(15) not null, --
Cant_materiaPrima mediumint not null, --
stock mediumint not null, --
primary key(ID_materiaPrima)
);

-- Tabla Roles
create table roles(
ID_rol int not null auto_increment,
NomRol varchar (30) not null,
DescRol varchar (200) not null,
primary key(ID_rol)
);

-- Tabla Privilegios
create table privilegios(
ID_priv int not null auto_increment,
NomPriv varchar (80) not null,
DescPriv varchar (200) not null,
primary key(ID_priv)
);

-- Tabla Usuarios
create table usuarios(
ID_emp int not null auto_increment,
Nom_emp varchar(30) not null,
Apellido_emp varchar (30) not null,
usuario varchar(30) not null,
correo varchar(30) not null,
pass varchar(100) not null,
NomRol varchar (30) not null,
Recinto varchar(50) not null,
-- ID_Recinto int, 
-- ID_rol int null,
primary key(ID_emp)
);

-- Tabla Recintos
create table recintos(
ID_Recinto int not null auto_increment,
Recinto varchar(50) not null,
Ubicacion varchar (100) not null,
primary key(ID_Recinto)
);

-- Tabla Entrada Inventario Principal
create table entradaMp(
ID_entradaMp int not null auto_increment,
Nom_mp varchar(100) not null,
Desc_mp varchar(200) not null,
Medida_mp varchar(15) not null, --
Cant_mp mediumint not null, --
NomUs_dejo varchar(30) not null, --
proveedor varchar(30) not null, --
Estatus_mp varchar(50) null default 'Entrega completa!', --
Desc_EstatusMP varchar(500) null default 'El pedido ya fue entregado!', --
Date_Hr datetime not null default current_timestamp, --
primary key(ID_entradaMp)
);

-- Tabla Salida Inventario Principal
create table salidaMp(
ID_salidaMp int not null auto_increment,
Nom_mp varchar(100) not null,
Desc_mpS varchar(200) not null,
Medida_mp varchar(15) not null, --
Cant_mp mediumint not null, --
NomUs_solicito varchar(30) not null, --
NomUs_autorizo varchar(30) not null, --
NomUs_llevo varchar(30) not null, --
Estatus_mpS varchar(50) null default 'En camino...', --
Desc_EstatusMPS varchar(500) null default 'El ya fue enviado', --
Date_Hr datetime not null default current_timestamp, --
primary key(ID_salidaMp)
);

-- Tabla Entrada Inventarios Secundarios
create table entradaH(
ID_entradaH int not null auto_increment,
Nom_mpHE varchar(100) not null,
Desc_mpHE varchar(200) not null,
Medida_mpHE varchar(15) not null, --
Cant_mpHE mediumint not null, --
NomUs_dejo varchar(30) not null, --
Estatus_mpHE varchar(50) null default 'Entrega completa!', --
Desc_EstatusMPHE varchar(500) null default 'Pedido entregado exitosamente!', --
Recinto varchar(50) not null,
Date_HrE datetime not null default current_timestamp, --
primary key(ID_entradaH)
);

-- Tabla Salida Inventarios Secundarios
create table salidaH(
ID_salidaH int not null auto_increment,
Nom_mpHS varchar(100) not null,
Desc_mpHS varchar(200) not null,
Medida_mpHS varchar(15) not null, --
Cant_mpHS mediumint not null, --
NomUs_solicito varchar(30) not null, --
NomUs_autorizo varchar(30) not null, --
NomUs_llevo varchar(30) not null, --
Estatus_mpHS varchar(50) null default 'En camino...', --
Desc_EstatusMPHS varchar(500) null default 'El ya fue enviado', --
Recinto varchar(50) not null,
Date_HrS datetime not null default current_timestamp, --
primary key(ID_salidaH)
);

-- Tabla InventarioH
create table inventarioH(
ID_mpH int not null auto_increment,
Nom_mpH varchar(100) not null,
Desc_mpH varchar(200) not null,
Medida_mpH varchar(15) not null, --
Cant_mpH mediumint not null, --
StockH mediumint not null, --
Recinto varchar(50) not null,
Date_HrEnviado datetime not null default current_timestamp,
primary key(ID_mpH)
);

-- Tabla Pedidos
create table pedidoH(
ID_pedidoH int not null auto_increment,
pedidoH varchar(30) not null,
Desc_pedido varchar(200) not null,
MedidaHP varchar(15) not null,
CantHP mediumint not null, --
StockHP mediumint not null,
EstatusHP varchar(50) null default 'Petición en procesó...', --
Desc_EstatusHP varchar(500) null default 'El pedido esta siendo revisado por el coordinador del recinto local.', --
UsuarioHP varchar(15) not null, --
RecintoHP varchar(50) not null,
Date_Rea datetime not null default current_timestamp,
primary key(ID_pedidoH)
);

-- INGRESAR DATOS DE LOS ROLES
insert into roles (NomRol, DescRol) values
("Administrador","El usurio pouede realizar todas las acciones existentes"),
("Coordinador","El usurio pouede administrar el control de entradas y salidas de los productos, así mismo visualizar los movimientos que realicen todos los usuarios en su respectivo recinto"),
("Usuario","Este tipo de usuario puede recibir mercancia");

-- INGRESAR DATOS DE LOS USUARIOS
insert into usuarios (Nom_emp, Apellido_emp, usuario, correo, pass, NomRol, Recinto) values
("Jose", "Ramírez", "Jose Ramirez", "JoseR@gmail.com", "$2a$10$FlRWLFz/ZiwAr7mH49wYBOaJIx/EBhmytkPj.u.0NeSSBKa.1.7VG", "administrador", "La Granja"),
("Rosa","Chavez", "RoCha", "RoCha123@gmail.com", "$2a$10$FlRWLFz/ZiwAr7mH49wYBOaJIx/EBhmytkPj.u.0NeSSBKa.1.7VG", "coordinador", "Pollitos en fuga"),
("Ricardo", "Garcia", "Ricardo Garcia",  "RicardoGarcia12@gmail.com", "$2a$10$FlRWLFz/ZiwAr7mH49wYBOaJIx/EBhmytkPj.u.0NeSSBKa.1.7VG", "usuario", "Pollitos en fuga"),
("Rafael", "Garcia", "RafaG", "RafaGs@gmail.com", "$2a$10$FlRWLFz/ZiwAr7mH49wYBOaJIx/EBhmytkPj.u.0NeSSBKa.1.7VG", "administrador", "Pollitos en fuga");

-- INGRESAR DATOS DE LOS PRIVILEGIOS
insert into privilegios (NomPriv, DescPriv) values
("Super usuario", "El usuario puede realizar todas las acciones existentes."),
("Control de procesos principal", "Tiene la capacidad de coordinar el inventario principal y visualizar los movimientos de todos los usuarios."),
("Control de procesos secundario", "Dicho usuario puede coordinar el inventario y visualizar los movimientos, solo de su respectivo recinto."),
("Empleado", "Este usuario puede recibir y registrar mercancia."),
("Deshabilitado", "No puede realizar ninguna accion.");

-- INGRESAR DATOS DE PRODUCTOS inventarioP
insert into inventarioP (Nom_materiaPrima, Desc_materiaPrima, Medida_materiaPrima, Cant_materiaPrima, stock) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "kg",250, 250),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.",
"kg", 300, 300),
("Caña de azucar", "Cultivo perenne para azúcar blanco o moreno.", "kg", 50, 50),
("Rejilla de madera", "Pieza que combina elementos unidos de manera que queden espacios repetitivos.", "pieza", 5, 5),
("Maíz", "Planta anual alta dotada de un amplio sistema radicular fibroso.", "kg", 0, 0);

-- INGRESAR DATOS DE entradaMp
insert into entradaMp (Nom_mp, Desc_mp, Medida_mp, Cant_mp, NomUs_dejo, proveedor, Estatus_mp, Desc_EstatusMP) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "pieza", "200", "Jose Antonio Garcia Garcia", "Carpinteria Miguelito", "Entrega completa!", "El pedido ya fue entregado!"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.", "metros", "80", "RoCha", "Cubeta", "Entrega completa!", "El pedido ya fue entregado!");

-- INGRESAR DATOS DE salidaMp
insert into salidaMp (Nom_mp, Desc_mpS, Medida_mp, Cant_mp, NomUs_solicito, NomUs_autorizo, NomUs_llevo, Estatus_mpS, Desc_EstatusMPS) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "pieza", "200", "JoseJ", "MiguelAr", "RoCha", "En camino...", "El pedido va en camino"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.", "metros", "80", "MartinN12", "MiguelAr", "Rocha", "En camino...", "El pedido va en camino");


-- INGRESAR DATOS DE LOS RECINTOS
insert into recintos (Recinto, Ubicacion) values
("La Granja", "Aguascalientes"),
("Pollitos en fuga", "Rincón de Romos"),
("Cubeta", "El llano"),
("Los Conos", "Pabellon"),
("Rancho viejo", "San Francisco de los Romo"),
("La escondida", "Jesus Maria");





-- INGRESAR DATOS DE pedidoH
insert into pedidoH (pedidoH, Desc_pedido, MedidaHP, CantHP, StockHP, UsuarioHP, RecintoHP) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva." ,"pieza", "50", "50", "RoCha", "La Granja"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización."
,"kg", "100", "100", "RoCha", "Pollitos en fuga");





-- INGRESAR DATOS DE InventarioH
insert into inventarioH (Nom_mpH, Desc_mpH, Medida_mpH, Cant_mpH, StockH, Recinto) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "kg", "300", "300", "Pollitos en fuga"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.",
"kg", "200", "200", "La Granja"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.",
"kg", "0", "0", "Pollitos en fuga");

-- INGRESAR DATOS DE entradaH
insert into entradaH (Nom_mpHE, Desc_mpHE, Medida_mpHE, Cant_mpHE, NomUs_dejo, Estatus_mpHE, Recinto) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "Kilos", "300", "RafaG", "Entrega completa!", "La Granja"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.",
 "Kilos", "200", "RoCha", "Entrega completa!","Pollitos en fuga");

-- INGRESAR DATOS DE salidaH
insert into salidaH (Nom_mpHS, Desc_mpHS, Medida_mpHS, Cant_mpHS, NomUs_solicito, NomUs_autorizo, NomUs_llevo, Estatus_mpHS, Desc_EstatusMPHS, Recinto) values
("Abono", "Fertilizante que se echa a la tierra para hacerla más rica y productiva.", "pieza", "200", "JoseJ", "MiguelAr", "RoCha", "En camino...", "La Granja"),
("Semilla", "Unidad reproductiva compleja, característica de las plantas vasculares superiores, que se forma a partir del óvulo vegetal, generalmente después de la fertilización.", "metros", "80", "MartinN12", "MiguelAr", "Rocha", "En camino...", "Pollitos en fuga");




drop table entradaH;

drop table entradaMp;
drop table salidaMp;

drop table usuarios;
drop table salidaH;
drop table entradaH;
drop table InventarioH;
drop table pedidoH;