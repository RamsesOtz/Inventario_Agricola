
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
        window.location = '/Administrador/usuarios/deleteUsuarios/'+ ID_emp;
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
        window.location = '/Administrador/roles/deleteRoles/' + ID_rol;
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
        window.location = '/Administrador/privilegios/deletePrivilegios/' + ID_priv;
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
        window.location = '/Administrador/recintos/deleteRecintos/' + ID_Recinto;
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
        window.location = '/Administrador/mp/deleteMp/' + ID_materiaPrima;
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
        window.location = '/Coordinador/inventarioH/deleteInventarioH/'+ ID_mpH;
      }
    });

  }

  /*function popUpinputDen(ID_pedidoH){
  Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'question',
      title: '¿Cual es el motivo de la cancelaciòn del pedido ' + ID_pedidoH + ' ?',

      showCancelButton: true,
      confirmButtonText: "Enviar comentario",
      confirmButtonColor: '#68CA39',
      cancelButtonText: "Cancelar",
      cancelButtonColor: '#B81212',

      toast: true,

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,

      input: 'text',
      inputPlaceholder: 'Escribe el motivo por el cual se cancelo el pedido....',
      inputValidator: desc => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!desc) {
                return "Por favor escribe el motivo de la cancelaciòn";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            window.location = '/Administrador/pedido/AdddescPedido/'+ ID_pedidoH;
            popUpDenPedido(ID_pedidoH);
        }
    });
  }*/

  function popUpDenPedido(ID_pedidoH){
    Swal.fire({
      position: 'center',
      width: '45%',
      title: '¿Quieres Cancelar el pedido ' + ID_pedidoH + '?',

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: true,

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
        window.location = '/Administrador/pedido/denegarPedido/'+ ID_pedidoH;
      }
    });

  }

  /*function popUpConfirmPedido(ID_pedidoH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'question',
      title: '¿Quieres confirmar este pedido ' + ID_pedidoH + '?',

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
        //asigna atributo desabilitado a los botones con el ID_pedidoH
        const button = document.getElementById(ID_pedidoH);
        button.setAttribute("disabled", "true");

        window.location = '/Administrador/pedido/confirmarPedido/'+ ID_pedidoH;
      }
    });

  }*/

  function popUpConfirmPedido(ID_pedidoH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'question',
      title: '¿Quieres confirmar este pedido ' + ID_pedidoH + '?',

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
        //asigna atributo desabilitado a los botones con el ID_pedidoH
          //const button = document.getElementById(ID_pedidoH);
          //button.setAttribute("disabled", "true");

        window.location = '/Administrador/pedido/confirmarPedido/'+ ID_pedidoH;
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
        window.location = '/Coordinador/entradaH/deleteEntradaH/'+ ID_entradaH;
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
        window.location = '/Administrador/mp/deleteEntradaMp/'+ ID_entradaMp;
      }
    });

  }

  function popUpDelSH(salidaH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar la salida ' + salidaH + '?',
      text: 'Al eliminar la salida, no podras recuperar la información!!',

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
        window.location = '/Coordinador/salidaH/deleteSalidaH/'+ salidaH;
      }
    });

  }

  function MsgOptionNotSelectedMSH(){
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

  function popUpDelSalidaMp(ID_salidaMp){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el registro de ' + ID_salidaMp + '?',
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
        window.location = '/Administrador/mp/deleteSalidaMp/'+ ID_salidaMp;
      }
    });

  }

  function popUpDelRegistroH(ID_mpH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar el registro de ' + ID_mpH + '?',
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
        window.location = '/Empleado/registroH/deleteRegistroH/'+ ID_mpH;
      }
    });

  }

  
  function popUpDelIHPrea(ID_pedidoH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres eliminar la materia prima ' + ID_pedidoH + '?',
      text: 'Al eliminar este pedidio, no podras recuperar la información!!',

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
        window.location = '/Coordinador/inventarioH/deletePedidoHRea/'+ ID_pedidoH;
      }
    });

  }

  function popUpMover(){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres realizar este movimiento ?',
      text: 'Una vez confirmes el movimiento, no podras desacer los cambios!',

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
        window.location = '/Coordinador/inventarioH/moverMPH/'+ ID_mpH;
      }
    });
  }

  function popUpRegresar(ID_mpH){
    Swal.fire({
      position: 'center',
      width: '45%',
      icon: 'warning',
      title: '¿Quieres regresar el lote completo ' + ID_mpH + '?',
      text: 'Una vez confirmes el movimiento, no podras desacer los cambios!',

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
        window.location = '/Coordinador/inventarioH/regresarMPH/'+ ID_mpH;
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
    popUpDelIH
    //,popUpinputDen
    ,popUpDenPedido,
    popUpConfirmPedido,
    MsgOptionNotSelectedTIH,
    MsgOptionNotSelectedMIH,
    popUpDelEH,
    MsgOptionNotSelectedTE,
    MsgOptionNotSelectedME,
    popUpDelEntradaMp,
    popUpDelSH,
    MsgOptionNotSelectedMSH,
    popUpDelSalidaMp,
    popUpDelRegistroH,
    popUpDelIHPrea,
    popUpMover,
    popUpRegresar
    
  }