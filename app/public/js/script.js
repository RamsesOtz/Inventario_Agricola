const { disabled } = require("express/lib/application");

        function getSelectValueT(){
          
          var selectValT = document.getElementById('listT').value;
          //console.log(selectValT);
          //document.getElementById('txtT').innerHTML = selectValT;

          var Tipo = selectValT;
          switch (Tipo) {
              case "area":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="kCuadrado">Kilómetro cuadrado</option>
                  <option value="mCuadrado">Metro cuadradad</option>
                  <option value="miCuadrado">Milla cuadradad</option>
                  <option value="yCuadrado">Yarda cuadrada</option>
                  <option value="pCuadrado">Pie cuadrado</option>
                  <option value="puCuadrado">Pulgada cuadrada</option>
                  <option value="hCuadrado">Hectarea cuadrada</option>
                  <option value="aCuadrado">Acre cuadrado</option>
                </select>`;
                break;
              case "longitud":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="kilometro">Kilometro</option>
                  <option value="metro">Metro</option>
                  <option value="centimetro">Centimetro</option>
                  <option value="milimetro">Milímetro</option>
                  <option value="micrometro">Micrómetro</option>
                  <option value="nanometro">Nanómetro</option>
                  <option value="milla">Milla</option>
                  <option value="yarda">Yarda</option>
                  <option value="pie">Pie</option>
                  <option value="pulgada">Acre cuadrado</option>
                  <option value="millaNautica">Milla náutica</option>
                </select>`;
                break;
              case "masa":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select  onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="tonelada">Tonelada</option>
                  <option value="kilogramo">Kilogramo</option>
                  <option value="gramo">Gramo</option>
                  <option value="milligramo">Milligramo</option>
                  option value="microgramo">Microgramo</option>
                  <option value="toneladaL">Tonelada Larga</option>
                  <option value="toneladaC">Tonelada Corta</option>
                  <option value="stone">Stone</option>
                  <option value="libra">Libra</option>
                  <option value="onza">Onza</option>
                </select>`;
                  break;
              case "volumen":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="litro">Litro</option>
                  <option value="mililitro">Mililitro</option>
                  <option value="galonI">Galon Imperial</option>
                </select>`;
                  break;
              default:
                MsgOptionNotSelectedT();
                document.getElementById('listM').outerHTML = 
                `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
          }
        }

        function getSelectValueM(){
          
          var selectValM = document.getElementById('listM').value;
          //console.log(selectValM);

          var Medida = selectValM;
          switch (Medida) {
            case "kCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "mCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "miCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "yCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "pCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "puCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "hCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "aCuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "kilometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "metro":
              alert("Seleccionaste: " + Medida);
              break;
            case "centimetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "milimetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "micrometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "nanometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "milla":
              alert("Seleccionaste: " + Medida);
              break;
            case "yarda":
              alert("Seleccionaste: " + Medida);
              break;
            case "pie":
              alert("Seleccionaste: " + Medida);
              break;
            case "pulgada":
              alert("Seleccionaste: " + Medida);
              break;
            case "millaNautica":
              alert("Seleccionaste: " + Medida);
              break;
            case "tonelada":
              alert("Seleccionaste: " + Medida);
              break;
            case "kilogramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "gramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "milligramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "microgramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "toneladaL":
              alert("Seleccionaste: " + Medida);
              break;
            case "toneladaC":
              alert("Seleccionaste: " + Medida);
              break;
            case "stone":
              alert("Seleccionaste: " + Medida);
              break;
            case "libra":
              alert("Seleccionaste: " + Medida);
              break;
            case "onza":
              alert("Seleccionaste: " + Medida);
              break;
            case "litro":
              alert("Seleccionaste: " + Medida);
              break;
            case "mililitro":
              alert("Seleccionaste: " + Medida);
              break;
            case "galonI":
              alert("Seleccionaste: " + Medida);
              break;
            default:
            MsgOptionNotSelectedM();
                
          }
        }

   
        /*function GetSelectedValue(){
          var e = document.getElementById("selectRol");
          var result = e.options[e.selectedIndex].value;
          
          document.getElementById("selectRol").innerHTML = result;
      }*/


      function getSelectValueRol(){
        
        var objetoRol = document.querySelectorAll('#listRol');
        var selectValRol = objetoRol[0].value;
        //console.log(selectValRol);

        var Rol = selectValRol;
        switch (Rol) {
            case "administrador":
              //document.getElementById('inputBlock').outerHTML = `<input value="1" disabled class="form-control" id="inputBlock" name="ID_rol" placeholder="Selecciona un rol">`;
              alert("Administrador");
              break;
            case "coordinador":
              //document.getElementById('inputBlock').outerHTML = `<input value="2" disabled class="form-control" id="inputBlock" name="ID_rol" placeholder="Selecciona un rol">`;
              alert("Coordinador");
              break;
            case "usuario":
              //document.getElementById('inputBlock').outerHTML = `<input value="3" disabled class="form-control" id="inputBlock" name="ID_rol" placeholder="Selecciona un rol">`;
              alert("Usuario");
                break;
            default:
              MsgOptionNotSelectedRol();
              //document.getElementById('inputBlock').outerHTML = `<input disabled value="" class="form-control" id="inputBlock" placeholder="Selecciona un rol">`;
        }
      }

      function getSelectValueTIH(){
          
        var selectValTIH = document.getElementById('listTIH').value;
        console.log(selectValTIH);
        //document.getElementById('txtT').innerHTML = selectValTIH;

        var Tipo = selectValTIH;
        switch (Tipo) {
            case "area":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMIH').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listMIH" name="Medida_mpH">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="kCuadrado">Kilómetro cuadrado</option>
                <option value="mCuadrado">Metro cuadradad</option>
                <option value="miCuadrado">Milla cuadradad</option>
                <option value="yCuadrado">Yarda cuadrada</option>
                <option value="pCuadrado">Pie cuadrado</option>
                <option value="puCuadrado">Pulgada cuadrada</option>
                <option value="hCuadrado">Hectarea cuadrada</option>
                <option value="aCuadrado">Acre cuadrado</option>
              </select>`;
              break;
            case "longitud":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMIH').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listMIH" name="Medida_mpH">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="kilometro">Kilometro</option>
                <option value="metro">Metro</option>
                <option value="centimetro">Centimetro</option>
                <option value="milimetro">Milímetro</option>
                <option value="micrometro">Micrómetro</option>
                <option value="nanometro">Nanómetro</option>
                <option value="milla">Milla</option>
                <option value="yarda">Yarda</option>
                <option value="pie">Pie</option>
                <option value="pulgada">Acre cuadrado</option>
                <option value="millaNautica">Milla náutica</option>
              </select>`;
              break;
            case "masa":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMIH').innerHTML =
              `<label>Medida</label>

              <select  onchange="getSelectValueMIH()" class="custom-select" id="listMIH" name="Medida_mpH">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="tonelada">Tonelada</option>
                <option value="kilogramo">Kilogramo</option>
                <option value="gramo">Gramo</option>
                <option value="milligramo">Milligramo</option>
                option value="microgramo">Microgramo</option>
                <option value="toneladaL">Tonelada Larga</option>
                <option value="toneladaC">Tonelada Corta</option>
                <option value="stone">Stone</option>
                <option value="libra">Libra</option>
                <option value="onza">Onza</option>
              </select>`;
                break;
            case "volumen":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMIH').innerHTML =
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listMIH" name="Medida_mpH">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="litro">Litro</option>
                <option value="mililitro">Mililitro</option>
                <option value="galonI">Galon Imperial</option>
              </select>`;
                break;
            default:
              MsgOptionNotSelectedTIH();
              document.getElementById('listMIH').outerHTML = 
              `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
        }
      }

      function getSelectValueMIH(){
          
        var selectValMIH = document.getElementById('listMIH').value;
        //console.log(selectValM);

        var Medida = selectValMIH;
        switch (Medida) {
          case "kCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "mCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "miCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "yCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "pCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "puCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "hCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "aCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "kilometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "metro":
            alert("Seleccionaste: " + Medida);
            break;
          case "centimetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "milimetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "micrometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "nanometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "milla":
            alert("Seleccionaste: " + Medida);
            break;
          case "yarda":
            alert("Seleccionaste: " + Medida);
            break;
          case "pie":
            alert("Seleccionaste: " + Medida);
            break;
          case "pulgada":
            alert("Seleccionaste: " + Medida);
            break;
          case "millaNautica":
            alert("Seleccionaste: " + Medida);
            break;
          case "tonelada":
            alert("Seleccionaste: " + Medida);
            break;
          case "kilogramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "gramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "milligramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "microgramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "toneladaL":
            alert("Seleccionaste: " + Medida);
            break;
          case "toneladaC":
            alert("Seleccionaste: " + Medida);
            break;
          case "stone":
            alert("Seleccionaste: " + Medida);
            break;
          case "libra":
            alert("Seleccionaste: " + Medida);
            break;
          case "onza":
            alert("Seleccionaste: " + Medida);
            break;
          case "litro":
            alert("Seleccionaste: " + Medida);
            break;
          case "mililitro":
            alert("Seleccionaste: " + Medida);
            break;
          case "galonI":
            alert("Seleccionaste: " + Medida);
            break;
          default:
          MsgOptionNotSelectedMIH();
              
        }
      }

      function getSelectValueTE(){
          
        var selectValTE = document.getElementById('listTE').value;
        console.log(selectValTE);
        //document.getElementById('txtT').innerHTML = selectValTE;

        var Tipo = selectValTE;
        switch (Tipo) {
            case "area":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formME').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="kCuadrado">Kilómetro cuadrado</option>
                <option value="mCuadrado">Metro cuadradad</option>
                <option value="miCuadrado">Milla cuadradad</option>
                <option value="yCuadrado">Yarda cuadrada</option>
                <option value="pCuadrado">Pie cuadrado</option>
                <option value="puCuadrado">Pulgada cuadrada</option>
                <option value="hCuadrado">Hectarea cuadrada</option>
                <option value="aCuadrado">Acre cuadrado</option>
              </select>`;
              break;
            case "longitud":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formME').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="kilometro">Kilometro</option>
                <option value="metro">Metro</option>
                <option value="centimetro">Centimetro</option>
                <option value="milimetro">Milímetro</option>
                <option value="micrometro">Micrómetro</option>
                <option value="nanometro">Nanómetro</option>
                <option value="milla">Milla</option>
                <option value="yarda">Yarda</option>
                <option value="pie">Pie</option>
                <option value="pulgada">Acre cuadrado</option>
                <option value="millaNautica">Milla náutica</option>
              </select>`;
              break;
            case "masa":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formME').innerHTML =
              `<label>Medida</label>

              <select  onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="tonelada">Tonelada</option>
                <option value="kilogramo">Kilogramo</option>
                <option value="gramo">Gramo</option>
                <option value="milligramo">Milligramo</option>
                option value="microgramo">Microgramo</option>
                <option value="toneladaL">Tonelada Larga</option>
                <option value="toneladaC">Tonelada Corta</option>
                <option value="stone">Stone</option>
                <option value="libra">Libra</option>
                <option value="onza">Onza</option>
              </select>`;
                break;
            case "volumen":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formME').innerHTML =
              `<label>Medida</label>

              <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="litro">Litro</option>
                <option value="mililitro">Mililitro</option>
                <option value="galonI">Galon Imperial</option>
              </select>`;
                break;
            default:
              MsgOptionNotSelectedTE();
              document.getElementById('listME').outerHTML = 
              `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
        }
      }

      function getSelectValueME(){
          
        var selectValME = document.getElementById('listME').value;
        //console.log(selectValM);

        var Medida = selectValME;
        switch (Medida) {
          case "kCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "mCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "miCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "yCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "pCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "puCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "hCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "aCuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "kilometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "metro":
            alert("Seleccionaste: " + Medida);
            break;
          case "centimetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "milimetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "micrometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "nanometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "milla":
            alert("Seleccionaste: " + Medida);
            break;
          case "yarda":
            alert("Seleccionaste: " + Medida);
            break;
          case "pie":
            alert("Seleccionaste: " + Medida);
            break;
          case "pulgada":
            alert("Seleccionaste: " + Medida);
            break;
          case "millaNautica":
            alert("Seleccionaste: " + Medida);
            break;
          case "tonelada":
            alert("Seleccionaste: " + Medida);
            break;
          case "kilogramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "gramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "milligramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "microgramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "toneladaL":
            alert("Seleccionaste: " + Medida);
            break;
          case "toneladaC":
            alert("Seleccionaste: " + Medida);
            break;
          case "stone":
            alert("Seleccionaste: " + Medida);
            break;
          case "libra":
            alert("Seleccionaste: " + Medida);
            break;
          case "onza":
            alert("Seleccionaste: " + Medida);
            break;
          case "litro":
            alert("Seleccionaste: " + Medida);
            break;
          case "mililitro":
            alert("Seleccionaste: " + Medida);
            break;
          case "galonI":
            alert("Seleccionaste: " + Medida);
            break;
          default:
          MsgOptionNotSelectedME();
              
        }
      }
        
      module.exports = {
        getSelectValueT,
        getSelectValueM,
        getSelectValueRol,
        getSelectValueTIH,
        getSelectValueMIH,
        getSelectValueTE,
        getSelectValueME

      }