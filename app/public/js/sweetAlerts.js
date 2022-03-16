
  function Bienvenido(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido',
      text: 'Inicio de sesion exitoso',
      showConfirmButton: false,
    
      timer: 2500,
      timerProgressBar: true
    });
  }


  function popUpDelUs(ID_emp){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el usuario ' + ID_emp + '?',
      text: 'Al eliminar este usuario, no podras recuperar su información!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/usuarios/deleteUsuarios/'+ ID_emp;
      }
    });

  }

  function popUpDelRol(ID_rol){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el rol ' + ID_rol + '?',
      text: 'Al eliminar este rol, no podra ser recuperado!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/roles/deleteRoles/' + ID_rol;
      }
    });

  }

  function popUpDelPriv(ID_priv){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el privilegio ' + ID_priv + '?',
      text: 'Al eliminar este privilegio, no podra ser recuperado!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/privilegios/deletePrivilegios/' + ID_priv;
      }
    });

  }

  function popUpDelRecinto(ID_Recinto){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el recinto ' + ID_Recinto + '?',
      text: 'Al eliminar este recinto, no podra ser recuperado!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/recintos/deleteRecintos/' + ID_Recinto;
      }
    });

  }

  function popUpDelMp(ID_materiaPrima){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el materia prima ' + ID_materiaPrima + '?',
      text: 'Al eliminar este materia prima, no podra ser recuperado!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/mp/deleteMp/' + ID_materiaPrima;
      }ID_materiaPrima
    });

  }

  function MsgOptionNotSelectedT(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar el Tipo de Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function MsgOptionNotSelectedM(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar una Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  
  function MsgOptionNotSelectedRol(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar un Rol para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function popUpDelIH(ID_mpH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar la materia prima ' + ID_mpH + '?',
      text: 'Al eliminar la materia prima, no podras recuperar la información!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/inventarioH/deleteInventarioH/'+ ID_mpH;
      }
    });

  }

  function popUpDenPedido(ID_mpH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres Cancelar el pedido ' + ID_mpH + '?',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/pedido/deletePedido/'+ ID_mpH;
      }
    });

  }

  function popUpConfirmPedido(ID_mpH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'question',
      title: '¿Quieres confirmar este pedido ' + ID_mpH + '?',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/pedido/addPedido/'+ ID_mpH;
      }
    });

  }

  function MsgOptionNotSelectedTIH(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar el Tipo de Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function MsgOptionNotSelectedMIH(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar una Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function popUpDelEH(ID_entradaH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar la entrada ' + ID_entradaH + '?',
      text: 'Al eliminar la entrada, no podras recuperar la información!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/entradaH/deleteEntradaH/'+ ID_entradaH;
      }
    });

  }

  function MsgOptionNotSelectedTE(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar el Tipo de Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function MsgOptionNotSelectedME(){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Selección vacia',
      text: 'Es necesario seleccionar una Medida para continuar',
      showConfirmButton: false,
    
      timer: 4500,
      timerProgressBar: true
    });
  }

  function popUpDelEntradaMp(ID_entradaMp){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el registro de ' + ID_entradaMp + '?',
      text: 'Al eliminar el registro, no podras recuperar la información!!',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#68CA39',
      confirmButtonAriaLabel: 'Confirmar',

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#B81212',
      cancelButtonAriaLabel: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location = '/mp/deleteEntradaMp/'+ ID_entradaMp;
      }
    });

  }

  module.exports = {
    Bienvenido,
    popUpDelUs,
    popUpDelRol,
    popUpDelPriv,
    popUpDelMp,
    popUpDelRecinto,
    MsgOptionNotSelectedT,
    MsgOptionNotSelectedM,
    MsgOptionNotSelectedRol,
    popUpDelIH,
    popUpDenPedido,
    popUpConfirmPedido,
    MsgOptionNotSelectedTIH,
    MsgOptionNotSelectedMIH,
    popUpDelEH,
    MsgOptionNotSelectedTE,
    MsgOptionNotSelectedME,
    popUpDelEntradaMp
    
  }