///////////////////////ADMINISTRADOR///////////////////////////
//Materia prima inventario Principal AddMp
function getSelectValueT(){
          
          var selectValT = document.getElementById('listT').value;
          //console.log(selectValT);
          //document.getElementById('txtT').innerHTML = selectValT;

          var Tipo = selectValT;
          switch (Tipo) {
            case "pieza":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formM').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="pieza">Pieza</option>
              </select>`;
              break;
              case "area":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="km²">Kilómetro cuadrado</option>
                  <option value="m²">Metro cuadradad</option>
                  <option value="mi²">Milla cuadradad</option>
                  <option value="yd²">Yarda cuadrada</option>
                  <option value="ft²">Pie cuadrado</option>
                  <option value="in²">Pulgada cuadrada</option>
                  <option value="ha²">Hectarea cuadrada</option>
                  <option value="ac²">Acre cuadrado</option>
                </select>`;
                break;
              case "longitud":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="km">Kilometro</option>
                  <option value="m">Metro</option>
                  <option value="cm">Centimetro</option>
                  <option value="mm">Milímetro</option>
                  <option value="μm">Micrómetro</option>
                  <option value="nm">Nanómetro</option>
                  <option value="mi">Milla</option>
                  <option value="yd">Yarda</option>
                  <option value="ft">Pie</option>
                  <option value="in">Pulgada</option>
                  <option value="mn">Milla náutica</option>
                </select>`;
                break;
              case "masa":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select  onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="t">Tonelada</option>
                  <option value="kg">Kilogramo</option>
                  <option value="g">Gramo</option>
                  <option value="mg">Milligramo</option>
                  option value="µg">Microgramo</option>
                  <option value="tl">Tonelada Larga</option>
                  <option value="tc">Tonelada Corta</option>
                  <option value="st">Stone</option>
                  <option value="lb">Libra</option>
                  <option value="oz">Onza</option>
                </select>`;
                  break;
              case "volumen":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select onchange="getSelectValueM()" class="custom-select" id="listM" name="Medida_materiaPrima">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="l">Litro</option>
                  <option value="ml">Mililitro</option>
                  <option value="gi">Galon Imperial</option>
                </select>`;
                  break;
              default:
                MsgOptionNotSelectedT();
                document.getElementById('listM').outerHTML = 
                `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
          }
        }

        function getSelectValueM(){
          const texto = document.querySelector('#listM').options[document.querySelector('#listM').selectedIndex].text;
          console.log(texto);

          var Medida = texto;
          switch (Medida) {
            case "Pieza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilómetro cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Hectarea cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Acre cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Centimetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milímetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Micrómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Nanómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla náutica":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilogramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Gramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milligramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Microgramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Larga":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Corta":
              alert("Seleccionaste: " + Medida);
              break;
            case "Stone":
              alert("Seleccionaste: " + Medida);
              break;
            case "Libra":
              alert("Seleccionaste: " + Medida);
              break;
            case "Onza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Litro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Mililitro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Galon Imperial":
              alert("Seleccionaste: " + Medida);
              break;
            default:
            MsgOptionNotSelectedM();
                
          }
        }

        //entradas materia prima inventario principal
        function getSelectValueTEP(){
          
          var selectValT = document.getElementById('listT').value;
          //console.log(selectValT);
          //document.getElementById('txtT').innerHTML = selectValT;

          var Tipo = selectValT;
          switch (Tipo) {
            case "pieza":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formM').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMEP()" class="custom-select" id="listM" name="Medida_mp">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="pieza">Pieza</option>
              </select>`;
              break;
              case "area":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueMEP()" class="custom-select" id="listM" name="Medida_mp">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="km²">Kilómetro cuadrado</option>
                  <option value="m²">Metro cuadradad</option>
                  <option value="mi²">Milla cuadradad</option>
                  <option value="yd²">Yarda cuadrada</option>
                  <option value="ft²">Pie cuadrado</option>
                  <option value="in²">Pulgada cuadrada</option>
                  <option value="ha²">Hectarea cuadrada</option>
                  <option value="ac²">Acre cuadrado</option>
                </select>`;
                break;
              case "longitud":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML = 
                `<label>Medida</label>

                <select onchange="getSelectValueMEP()" class="custom-select" id="listM" name="Medida_mp">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="km">Kilometro</option>
                  <option value="m">Metro</option>
                  <option value="cm">Centimetro</option>
                  <option value="mm">Milímetro</option>
                  <option value="μm">Micrómetro</option>
                  <option value="nm">Nanómetro</option>
                  <option value="mi">Milla</option>
                  <option value="yd">Yarda</option>
                  <option value="ft">Pie</option>
                  <option value="in">Pulgada</option>
                  <option value="mn">Milla náutica</option>
                </select>`;
                break;
              case "masa":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select  onchange="getSelectValueMEP()" class="custom-select" id="listM" name="Medida_mp">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="t">Tonelada</option>
                  <option value="kg">Kilogramo</option>
                  <option value="g">Gramo</option>
                  <option value="mg">Milligramo</option>
                  option value="µg">Microgramo</option>
                  <option value="tl">Tonelada Larga</option>
                  <option value="tc">Tonelada Corta</option>
                  <option value="st">Stone</option>
                  <option value="lb">Libra</option>
                  <option value="oz">Onza</option>
                </select>`;
                  break;
              case "volumen":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formM').innerHTML =
                `<label>Medida</label>

                <select onchange="getSelectValueMEP()" class="custom-select" id="listM" name="Medida_mp">
                  <option value=""> Selecciona la medida que corresponde...</option>
                  <option value="l">Litro</option>
                  <option value="ml">Mililitro</option>
                  <option value="gi">Galon Imperial</option>
                </select>`;
                  break;
              default:
                MsgOptionNotSelectedT();
                document.getElementById('listM').outerHTML = 
                `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
          }
        }

        function getSelectValueMEP(){

          const texto = document.querySelector('#listM').options[document.querySelector('#listM').selectedIndex].text;
          console.log(texto);

          var Medida = texto;
          switch (Medida) {
            case "Pieza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilómetro cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Hectarea cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Acre cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Centimetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milímetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Micrómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Nanómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla náutica":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilogramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Gramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milligramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Microgramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Larga":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Corta":
              alert("Seleccionaste: " + Medida);
              break;
            case "Stone":
              alert("Seleccionaste: " + Medida);
              break;
            case "Libra":
              alert("Seleccionaste: " + Medida);
              break;
            case "Onza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Litro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Mililitro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Galon Imperial":
              alert("Seleccionaste: " + Medida);
              break;
            default:
            MsgOptionNotSelectedM();
                
          }
        }


        function getSelectValueTMS(){
          
          var selectValT = document.getElementById('listTMS').value;
          //console.log(selectValT);
          //document.getElementById('txtT').innerHTML = selectValT;
  
          var Tipo = selectValT;
          switch (Tipo) {
            case "pieza":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMS').innerHTML = 
              `<label>Medida</label>
  
              <select onchange="getSelectValueMS()" class="custom-select" id="listM" name="Medida_mp">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="pieza">Pieza</option>
              </select>`;
              break;
              case "area":
                //console.log("Seleccionaste " + Tipo);
                document.getElementById('formMS').innerHTML = 
                `<label>Medida</label>
  
                <select onchange="getSelectValueMS()" class="custom-select" id="listM" name="Medida_mp">
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
                document.getElementById('formMS').innerHTML = 
                `<label>Medida</label>
  
                <select onchange="getSelectValueMS()" class="custom-select" id="listM" name="Medida_mp">
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
                document.getElementById('formMS').innerHTML =
                `<label>Medida</label>
  
                <select  onchange="getSelectValueMS()" class="custom-select" id="listM" name="Medida_mp">
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
                document.getElementById('formMS').innerHTML =
                `<label>Medida</label>
  
                <select onchange="getSelectValueMS()" class="custom-select" id="listM" name="Medida_mp">
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
  
        function getSelectValueMS(){
          
          const texto = document.querySelector('#listM').options[document.querySelector('#listM').selectedIndex].text;
          console.log(texto);
  
          var Medida = texto;
          switch (Medida) {
            case "Pieza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilómetro cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla cuadradad":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Hectarea cuadrada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Acre cuadrado":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilometro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Metro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Centimetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milímetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Micrómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Nanómetro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla":
              alert("Seleccionaste: " + Medida);
              break;
            case "Yarda":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pie":
              alert("Seleccionaste: " + Medida);
              break;
            case "Pulgada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milla náutica":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada":
              alert("Seleccionaste: " + Medida);
              break;
            case "Kilogramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Gramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Milligramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Microgramo":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Larga":
              alert("Seleccionaste: " + Medida);
              break;
            case "Tonelada Corta":
              alert("Seleccionaste: " + Medida);
              break;
            case "Stone":
              alert("Seleccionaste: " + Medida);
              break;
            case "Libra":
              alert("Seleccionaste: " + Medida);
              break;
            case "Onza":
              alert("Seleccionaste: " + Medida);
              break;
            case "Litro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Mililitro":
              alert("Seleccionaste: " + Medida);
              break;
            case "Galon Imperial":
              alert("Seleccionaste: " + Medida);
              break;
            default:
            MsgOptionNotSelectedM();
                
          }
        }
///////////////////////ADMINISTRADOR///////////////////////////

///////////////////////COORDINADOR///////////////////////////
function getSelectValueTPHR(){
          
  var selectValT = document.getElementById('listTPHR').value;
  //console.log(selectValT);
  //document.getElementById('txtT').innerHTML = selectValT;

  var Tipo = selectValT;
  switch (Tipo) {
    case "pieza":
      //console.log("Seleccionaste " + Tipo);
      document.getElementById('formTPHR').innerHTML = 
      `<label>Medida</label>

      <select onchange="getSelectValueMPHR()" class="custom-select" id="listMPHR" name="MedidaHP">
        <option value=""> Selecciona la medida que corresponde...</option>
        <option value="pieza">Pieza</option>
      </select>`;
      break;
      case "area":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formTPHR').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMPHR()" class="custom-select" id="listMPHR" name="MedidaHP">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km²">Kilómetro cuadrado</option>
          <option value="m²">Metro cuadradad</option>
          <option value="mi²">Milla cuadradad</option>
          <option value="yd²">Yarda cuadrada</option>
          <option value="ft²">Pie cuadrado</option>
          <option value="in²">Pulgada cuadrada</option>
          <option value="ha²">Hectarea cuadrada</option>
          <option value="ac²">Acre cuadrado</option>
        </select>`;
        break;
      case "longitud":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formTPHR').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMPHR()" class="custom-select" id="listMPHR" name="MedidaHP">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km">Kilometro</option>
          <option value="m">Metro</option>
          <option value="cm">Centimetro</option>
          <option value="mm">Milímetro</option>
          <option value="μm">Micrómetro</option>
          <option value="nm">Nanómetro</option>
          <option value="mi">Milla</option>
          <option value="yd">Yarda</option>
          <option value="ft">Pie</option>
          <option value="in">Pulgada</option>
          <option value="mn">Milla náutica</option>
        </select>`;
        break;
      case "masa":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formTPHR').innerHTML =
        `<label>Medida</label>

        <select  onchange="getSelectValueMPHR()" class="custom-select" id="listMPHR" name="MedidaHP">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="t">Tonelada</option>
          <option value="kg">Kilogramo</option>
          <option value="g">Gramo</option>
          <option value="mg">Milligramo</option>
          option value="µg">Microgramo</option>
          <option value="tl">Tonelada Larga</option>
          <option value="tc">Tonelada Corta</option>
          <option value="st">Stone</option>
          <option value="lb">Libra</option>
          <option value="oz">Onza</option>
        </select>`;
          break;
      case "volumen":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formTPHR').innerHTML =
        `<label>Medida</label>

        <select onchange="getSelectValueMPHR()" class="custom-select" id="listMPHR" name="MedidaHP">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="l">Litro</option>
          <option value="ml">Mililitro</option>
          <option value="gi">Galon Imperial</option>
        </select>`;
          break;
      default:
        MsgOptionNotSelectedT();
        document.getElementById('listMPHR').outerHTML = 
        `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
  }
}

function getSelectValueMPHR(){
  
  const texto = document.querySelector('#listMPHR').options[document.querySelector('#listMPHR').selectedIndex].text;
  console.log(texto);

  var Medida = texto;
  switch (Medida) {
    case "Pieza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilómetro cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Hectarea cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Acre cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilometro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Centimetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milímetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Micrómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Nanómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla náutica":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilogramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Gramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milligramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Microgramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Larga":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Corta":
      alert("Seleccionaste: " + Medida);
      break;
    case "Stone":
      alert("Seleccionaste: " + Medida);
      break;
    case "Libra":
      alert("Seleccionaste: " + Medida);
      break;
    case "Onza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Litro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Mililitro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Galon Imperial":
      alert("Seleccionaste: " + Medida);
      break;
    default:
    MsgOptionNotSelectedM();
        
  }
}

function getSelectValueTE(){
          
  var selectValTE = document.getElementById('listTE').value;
  console.log(selectValTE);
  //document.getElementById('txtT').innerHTML = selectValTE;

  var Tipo = selectValTE;
  switch (Tipo) {
    case "pieza":
      //console.log("Seleccionaste " + Tipo);
      document.getElementById('formME').innerHTML = 
      `<label>Medida</label>

      <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
        <option value=""> Selecciona la medida que corresponde...</option>
        <option value="pieza">Pieza</option>
      </select>`;
      break;  
      case "area":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formME').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km²">Kilómetro cuadrado</option>
          <option value="m²">Metro cuadradad</option>
          <option value="mi²">Milla cuadradad</option>
          <option value="yd²">Yarda cuadrada</option>
          <option value="ft²">Pie cuadrado</option>
          <option value="in²">Pulgada cuadrada</option>
          <option value="ha²">Hectarea cuadrada</option>
          <option value="ac²">Acre cuadrado</option>
        </select>`;
        break;
      case "longitud":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formME').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km">Kilometro</option>
          <option value="m">Metro</option>
          <option value="cm">Centimetro</option>
          <option value="mm">Milímetro</option>
          <option value="μm">Micrómetro</option>
          <option value="nm">Nanómetro</option>
          <option value="mi">Milla</option>
          <option value="yd">Yarda</option>
          <option value="ft">Pie</option>
          <option value="in">Pulgada</option>
          <option value="mn">Milla náutica</option>
        </select>`;
        break;
      case "masa":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formME').innerHTML =
        `<label>Medida</label>

        <select  onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="t">Tonelada</option>
          <option value="kg">Kilogramo</option>
          <option value="g">Gramo</option>
          <option value="mg">Milligramo</option>
          <option value="µg">Microgramo</option>
          <option value="tl">Tonelada Larga</option>
          <option value="tc">Tonelada Corta</option>
          <option value="st">Stone</option>
          <option value="lb">Libra</option>
          <option value="oz">Onza</option>
        </select>`;
          break;
      case "volumen":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formME').innerHTML =
        `<label>Medida</label>

        <select onchange="getSelectValueMIH()" class="custom-select" id="listME" name="Medida_mpHE">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="l">Litro</option>
          <option value="ml">Mililitro</option>
          <option value="gi">Galon Imperial</option>
        </select>`;
          break;
      default:
        MsgOptionNotSelectedTE();
        document.getElementById('listME').outerHTML = 
        `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
  }
}

function getSelectValueMIH(){
    
  const texto = document.querySelector('#listME').options[document.querySelector('#listME').selectedIndex].text;
  console.log(texto);

  var Medida = texto;
  switch (Medida) {
    case "Pieza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilómetro cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Hectarea cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Acre cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilometro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Centimetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milímetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Micrómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Nanómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla náutica":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilogramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Gramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milligramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Microgramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Larga":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Corta":
      alert("Seleccionaste: " + Medida);
      break;
    case "Stone":
      alert("Seleccionaste: " + Medida);
      break;
    case "Libra":
      alert("Seleccionaste: " + Medida);
      break;
    case "Onza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Litro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Mililitro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Galon Imperial":
      alert("Seleccionaste: " + Medida);
      break;
    default:
    MsgOptionNotSelectedM();
        
  }
}

function getSelectValueTSH(){
          
  var selectValTSH = document.getElementById('listTSH').value;
  console.log(selectValTSH);
  //document.getElementById('txtT').innerHTML = selectValTE;

  var Tipo = selectValTSH;
  switch (Tipo) {
    case "pieza":
      //console.log("Seleccionaste " + Tipo);
      document.getElementById('formMSH').innerHTML = 
      `<label>Medida</label>

      <select onchange="getSelectValueMSH()" class="custom-select" id="listMSH" name="Medida_mpHS">
        <option value=""> Selecciona la medida que corresponde...</option>
        <option value="pieza">Pieza</option>
      </select>`;
      break;
      case "area":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMSH').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMSH()" class="custom-select" id="listMSH" name="Medida_mpHS">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km²">Kilómetro cuadrado</option>
          <option value="m²">Metro cuadradad</option>
          <option value="mi²">Milla cuadradad</option>
          <option value="yd²">Yarda cuadrada</option>
          <option value="ft²">Pie cuadrado</option>
          <option value="in²">Pulgada cuadrada</option>
          <option value="ha²">Hectarea cuadrada</option>
          <option value="ac²">Acre cuadrado</option>
        </select>`;
        break;
      case "longitud":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMSH').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMSH()" class="custom-select" id="listMSH" name="Medida_mpHS">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km">Kilometro</option>
          <option value="m">Metro</option>
          <option value="cm">Centimetro</option>
          <option value="mm">Milímetro</option>
          <option value="μm">Micrómetro</option>
          <option value="nm">Nanómetro</option>
          <option value="mi">Milla</option>
          <option value="yd">Yarda</option>
          <option value="ft">Pie</option>
          <option value="in">Pulgada</option>
          <option value="mn">Milla náutica</option>
        </select>`;
        break;
      case "masa":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMSH').innerHTML =
        `<label>Medida</label>

        <select  onchange="getSelectValueMSH()" class="custom-select" id="listMSH" name="Medida_mpHS">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="t">Tonelada</option>
          <option value="kg">Kilogramo</option>
          <option value="g">Gramo</option>
          <option value="mg">Milligramo</option>
          <option value="µg">Microgramo</option>
          <option value="tl">Tonelada Larga</option>
          <option value="tc">Tonelada Corta</option>
          <option value="st">Stone</option>
          <option value="lb">Libra</option>
          <option value="oz">Onza</option>
        </select>`;
          break;
      case "volumen":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMSH').innerHTML =
        `<label>Medida</label>

        <select onchange="getSelectValueMSH()" class="custom-select" id="listMSH" name="Medida_mpHS">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="l">Litro</option>
          <option value="ml">Mililitro</option>
          <option value="gi">Galon Imperial</option>
        </select>`;
          break;
      default:
        MsgOptionNotSelectedTE();
        document.getElementById('listMSH').outerHTML = 
        `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
  }
}

function getSelectValueMSH(){
    
  const texto = document.querySelector('#listMSH').options[document.querySelector('#listMSH').selectedIndex].text;
  console.log(texto);

  var Medida = texto;
  switch (Medida) {
    case "Pieza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilómetro cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Hectarea cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Acre cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilometro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Centimetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milímetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Micrómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Nanómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla náutica":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilogramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Gramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milligramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Microgramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Larga":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Corta":
      alert("Seleccionaste: " + Medida);
      break;
    case "Stone":
      alert("Seleccionaste: " + Medida);
      break;
    case "Libra":
      alert("Seleccionaste: " + Medida);
      break;
    case "Onza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Litro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Mililitro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Galon Imperial":
      alert("Seleccionaste: " + Medida);
      break;
    default:
    MsgOptionNotSelectedM();
        
  }
}
///////////////////////COORDINADOR///////////////////////////


///////////////////////EMPLEADO///////////////////////////
function getSelectValueTR(){
          
  var selectValT = document.getElementById('listTR').value;
  //console.log(selectValT);
  //document.getElementById('txtT').innerHTML = selectValT;

  var Tipo = selectValT;
  switch (Tipo) {
    case "pieza":
      //console.log("Seleccionaste " + Tipo);
      document.getElementById('formMR').innerHTML = 
      `<label>Medida</label>

      <select onchange="getSelectValueMR()" class="custom-select" id="listMR" name="Medida_mpH">
        <option value=""> Selecciona la medida que corresponde...</option>
        <option value="pieza">Pieza</option>
      </select>`;
      break;
      case "area":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMR').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMR()" class="custom-select" id="listMR" name="Medida_mpH">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km²">Kilómetro cuadrado</option>
          <option value="m²">Metro cuadradad</option>
          <option value="mi²">Milla cuadradad</option>
          <option value="yd²">Yarda cuadrada</option>
          <option value="ft²">Pie cuadrado</option>
          <option value="in²">Pulgada cuadrada</option>
          <option value="ha²">Hectarea cuadrada</option>
          <option value="ac²">Acre cuadrado</option>
        </select>`;
        break;
      case "longitud":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMR').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMR()" class="custom-select" id="listMR" name="Medida_mpH">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km">Kilometro</option>
          <option value="m">Metro</option>
          <option value="cm">Centimetro</option>
          <option value="mm">Milímetro</option>
          <option value="μm">Micrómetro</option>
          <option value="nm">Nanómetro</option>
          <option value="mi">Milla</option>
          <option value="yd">Yarda</option>
          <option value="ft">Pie</option>
          <option value="in">Pulgada</option>
          <option value="mn">Milla náutica</option>
        </select>`;
        break;
      case "masa":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMR').innerHTML =
        `<label>Medida</label>

        <select  onchange="getSelectValueMR()" class="custom-select" id="listMR" name="Medida_mpH">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="t">Tonelada</option>
          <option value="kg">Kilogramo</option>
          <option value="g">Gramo</option>
          <option value="mg">Milligramo</option>
          <option value="µg">Microgramo</option>
          <option value="tl">Tonelada Larga</option>
          <option value="tc">Tonelada Corta</option>
          <option value="st">Stone</option>
          <option value="lb">Libra</option>
          <option value="oz">Onza</option>
        </select>`;
          break;
      case "volumen":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMR').innerHTML =
        `<label>Medida</label>

        <select onchange="getSelectValueMR()" class="custom-select" id="listMR" name="Medida_mpH">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="l">Litro</option>
          <option value="ml">Mililitro</option>
          <option value="gi">Galon Imperial</option>
        </select>`;
          break;
      default:
        MsgOptionNotSelectedT();
        document.getElementById('listMR').outerHTML = 
        `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
  }
}

function getSelectValueMR(){
  
  const texto = document.querySelector('#listMR').options[document.querySelector('#listMR').selectedIndex].text;
  console.log(texto);

  var Medida = texto;
  switch (Medida) {
    case "Pieza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilómetro cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Hectarea cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Acre cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilometro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Centimetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milímetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Micrómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Nanómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla náutica":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilogramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Gramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milligramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Microgramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Larga":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Corta":
      alert("Seleccionaste: " + Medida);
      break;
    case "Stone":
      alert("Seleccionaste: " + Medida);
      break;
    case "Libra":
      alert("Seleccionaste: " + Medida);
      break;
    case "Onza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Litro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Mililitro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Galon Imperial":
      alert("Seleccionaste: " + Medida);
      break;
    default:
    MsgOptionNotSelectedM();
        
  }
}

function getSelectValueTPH(){
          
  var selectValT = document.getElementById('listTPH').value;
  //console.log(selectValT);
  //document.getElementById('txtT').innerHTML = selectValT;

  var Tipo = selectValT;
  switch (Tipo) {
    case "pieza":
      //console.log("Seleccionaste " + Tipo);
      document.getElementById('formMPH').innerHTML = 
      `<label>Medida</label>

      <select onchange="getSelectValueMPH()" class="custom-select" id="listPH" name="Medida_materiaPrima">
        <option value=""> Selecciona la medida que corresponde...</option>
        <option value="pieza">Pieza</option>
      </select>`;
      break;
      case "area":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMPH').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMPH()" class="custom-select" id="listPH" name="Medida_materiaPrima">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km²">Kilómetro cuadrado</option>
          <option value="m²">Metro cuadradad</option>
          <option value="mi²">Milla cuadradad</option>
          <option value="yd²">Yarda cuadrada</option>
          <option value="ft²">Pie cuadrado</option>
          <option value="in²">Pulgada cuadrada</option>
          <option value="ha²">Hectarea cuadrada</option>
          <option value="ac²">Acre cuadrado</option>
        </select>`;
        break;
      case "longitud":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMPH').innerHTML = 
        `<label>Medida</label>

        <select onchange="getSelectValueMPH()" class="custom-select" id="listPH" name="Medida_materiaPrima">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="km">Kilometro</option>
          <option value="m">Metro</option>
          <option value="cm">Centimetro</option>
          <option value="mm">Milímetro</option>
          <option value="μm">Micrómetro</option>
          <option value="nm">Nanómetro</option>
          <option value="mi">Milla</option>
          <option value="yd">Yarda</option>
          <option value="ft">Pie</option>
          <option value="in">Pulgada</option>
          <option value="mn">Milla náutica</option>
        </select>`;
        break;
      case "masa":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMPH').innerHTML =
        `<label>Medida</label>

        <select  onchange="getSelectValueMPH()" class="custom-select" id="listPH" name="Medida_materiaPrima">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="t">Tonelada</option>
          <option value="kg">Kilogramo</option>
          <option value="g">Gramo</option>
          <option value="mg">Milligramo</option>
          option value="µg">Microgramo</option>
          <option value="tl">Tonelada Larga</option>
          <option value="tc">Tonelada Corta</option>
          <option value="st">Stone</option>
          <option value="lb">Libra</option>
          <option value="oz">Onza</option>
        </select>`;
          break;
      case "volumen":
        //console.log("Seleccionaste " + Tipo);
        document.getElementById('formMPH').innerHTML =
        `<label>Medida</label>

        <select onchange="getSelectValueMPH()" class="custom-select" id="listPH" name="Medida_materiaPrima">
          <option value=""> Selecciona la medida que corresponde...</option>
          <option value="l">Litro</option>
          <option value="ml">Mililitro</option>
          <option value="gi">Galon Imperial</option>
        </select>`;
          break;
      default:
        MsgOptionNotSelectedT();
        document.getElementById('listPH').outerHTML = 
        `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
  }
}

function getSelectValueMPH(){
  const texto = document.querySelector('#listPH').options[document.querySelector('#listPH').selectedIndex].text;
  console.log(texto);

  var Medida = texto;
  switch (Medida) {
    case "Pieza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilómetro cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla cuadradad":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Hectarea cuadrada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Acre cuadrado":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilometro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Metro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Centimetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milímetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Micrómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Nanómetro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla":
      alert("Seleccionaste: " + Medida);
      break;
    case "Yarda":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pie":
      alert("Seleccionaste: " + Medida);
      break;
    case "Pulgada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milla náutica":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada":
      alert("Seleccionaste: " + Medida);
      break;
    case "Kilogramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Gramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Milligramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Microgramo":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Larga":
      alert("Seleccionaste: " + Medida);
      break;
    case "Tonelada Corta":
      alert("Seleccionaste: " + Medida);
      break;
    case "Stone":
      alert("Seleccionaste: " + Medida);
      break;
    case "Libra":
      alert("Seleccionaste: " + Medida);
      break;
    case "Onza":
      alert("Seleccionaste: " + Medida);
      break;
    case "Litro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Mililitro":
      alert("Seleccionaste: " + Medida);
      break;
    case "Galon Imperial":
      alert("Seleccionaste: " + Medida);
      break;
    default:
    MsgOptionNotSelectedM();
        
  }
}

///////////////////////EMPLEADO///////////////////////////
   
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
          
        var selectValT = document.getElementById('listMIH').value;
        //console.log(selectValT);
        //document.getElementById('txtT').innerHTML = selectValT;

        var Tipo = selectValT;
        switch (Tipo) {
          case "pieza":
            //console.log("Seleccionaste " + Tipo);
            document.getElementById('formMIH').innerHTML = 
            `<label>Medida</label>
              <option value=""> Selecciona la medida que corresponde...</option>
              <option value="pieza">Pieza</option>
            <select onchange="getSelectValueMICH()" class="custom-select" id="listMICH" name="Medida_materiaPrima">

            </select>`;
            break;
            case "area":
              //console.log("Seleccionaste " + Tipo);
              document.getElementById('formMIH').innerHTML = 
              `<label>Medida</label>

              <select onchange="getSelectValueMICH()" class="custom-select" id="listMICH" name="Medida_materiaPrima">
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

              <select onchange="getSelectValueMICH()" class="custom-select" id="listMICH" name="Medida_materiaPrima">
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

              <select  onchange="getSelectValueMICH()" class="custom-select" id="listMICH" name="Medida_materiaPrima">
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

              <select onchange="getSelectValueMICH()" class="custom-select" id="listMICH" name="Medida_materiaPrima">
                <option value=""> Selecciona la medida que corresponde...</option>
                <option value="litro">Litro</option>
                <option value="mililitro">Mililitro</option>
                <option value="galonI">Galon Imperial</option>
              </select>`;
                break;
            default:
              MsgOptionNotSelectedT();
              document.getElementById('listMICH').outerHTML = 
              `<input disabled class="form-control" id="inputBlock" placeholder="Selecciona El tipo de medida">`;
        }
      }

      function getSelectValueMICH(){
        
        const texto = document.querySelector('#listMR').options[document.querySelector('#listMR').selectedIndex].text;
        console.log(texto);
      
        var Medida = texto;
        switch (Medida) {
          case "Pieza":
            alert("Seleccionaste: " + Medida);
            break;
          case "Kilómetro cuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "Metro cuadradad":
            alert("Seleccionaste: " + Medida);
            break;
          case "Milla cuadradad":
            alert("Seleccionaste: " + Medida);
            break;
          case "Yarda cuadrada":
            alert("Seleccionaste: " + Medida);
            break;
          case "Pie cuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "Pulgada cuadrada":
            alert("Seleccionaste: " + Medida);
            break;
          case "Hectarea cuadrada":
            alert("Seleccionaste: " + Medida);
            break;
          case "Acre cuadrado":
            alert("Seleccionaste: " + Medida);
            break;
          case "Kilometro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Metro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Centimetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Milímetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Micrómetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Nanómetro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Milla":
            alert("Seleccionaste: " + Medida);
            break;
          case "Yarda":
            alert("Seleccionaste: " + Medida);
            break;
          case "Pie":
            alert("Seleccionaste: " + Medida);
            break;
          case "Pulgada":
            alert("Seleccionaste: " + Medida);
            break;
          case "Milla náutica":
            alert("Seleccionaste: " + Medida);
            break;
          case "Tonelada":
            alert("Seleccionaste: " + Medida);
            break;
          case "Kilogramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "Gramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "Milligramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "Microgramo":
            alert("Seleccionaste: " + Medida);
            break;
          case "Tonelada Larga":
            alert("Seleccionaste: " + Medida);
            break;
          case "Tonelada Corta":
            alert("Seleccionaste: " + Medida);
            break;
          case "Stone":
            alert("Seleccionaste: " + Medida);
            break;
          case "Libra":
            alert("Seleccionaste: " + Medida);
            break;
          case "Onza":
            alert("Seleccionaste: " + Medida);
            break;
          case "Litro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Mililitro":
            alert("Seleccionaste: " + Medida);
            break;
          case "Galon Imperial":
            alert("Seleccionaste: " + Medida);
            break;
          default:
          MsgOptionNotSelectedM();
              
        }
      }


     /*//desabilitar boton precionado
      function btnDisable(ID_pedidoH){
        console.log(ID_pedidoH);
        
      document.getElementById(ID_pedidoH).setAttribute("disabled", "true");
      
      //this.button.setAttribute();
      //document.getElementById('');

      }*/

      function selectRecintos(){
        var valor = document.getElementById('listRecinto').value;
        console.log("value: " + valor);
        const texto = document.querySelector('#listRecinto').options[document.querySelector('#listRecinto').selectedIndex].text;
        console.log("texto dentro de la etiqueta: " + texto);
        
      }
        
      module.exports = {
        getSelectValueT,
        getSelectValueM,
        getSelectValueTEP,
        getSelectValueMEP,
        getSelectValueRol,
        getSelectValueTIH,
        getSelectValueMICH,
        getSelectValueTE,
        getSelectValueMIH,
        getSelectValueTSH,
        getSelectValueMSH,
        getSelectValueTMS,
        getSelectValueMS,
        getSelectValueTR,
        getSelectValueMR,
        getSelectValueTPHR,
        getSelectValueMPHR,
        //,btnDisable
        selectRecintos,
        getSelectValueTPH,
        getSelectValueMPH



      }