// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  
  $.ajax({
    url: "./info.json"
  }).done(function (resultado) {
    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;
    //console.log(hoy);
    //console.log(eventos);

    //Clasifica los eventos segun la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy){
        proximos.push(eventos[i]);
      } 
    }
    
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });
    //console.log(proximos);

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlProximos = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < proximos.length; j++){
      htmlProximos += `
              <div class="col-12 bg-light p-3 m-3 rounded">
              <a href="detalle.html?id=` + proximos[j].id +  `"><h2>${proximos[j].nombre}</h2></a>
              <p style="color: grey;">${proximos[j].fecha} - ${proximos[j].lugar}</p>
              <p>${proximos[j].descripcion}</p>
              </div>
              `
    }
    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = htmlProximos
         
  });
});
