// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var pasados = [];
var proximos = [];
var hoy;
var top2Pasados;
var top2Proximos;
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
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      } else {
        proximos.push(eventos[i]);      
      }
    }
    
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
    //console.log(pasados);

    //Extrae solo dos eventos
    top2Pasados = pasados.slice(0,2);
    //console.log(top2Pasados);

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });
    //console.log(proximos);

    //Extrae solo dos eventos
    top2Proximos = proximos.slice(0,2);
    //console.log(top2Proximos);

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlProximos = ""
    var htmlPasados = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < top2Proximos.length; j++){
      htmlProximos += `
              <div class="col bg-light p-3 m-3 rounded">
              <a href="detalle.html?id=` + top2Proximos[j].id +  `"><h2>${top2Proximos[j].nombre}</h2></a>
              <p style="color: grey;">${top2Proximos[j].fecha}</p>
              <p>${top2Proximos[j].descripcion}</p>
              </div>
              `
      htmlPasados += `
              <div class="col bg-light p-3 m-3 rounded">
              <a href="detalle.html?id=` + top2Pasados[j].id +  `"><h2>${top2Pasados[j].nombre}</h2></a>
              <p style="color: grey;">${top2Pasados[j].fecha}</p>
              <p>${top2Pasados[j].descripcion}</p>
              </div>
              `
    }
    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = htmlProximos
    document.getElementById("pasados").innerHTML = htmlPasados
     
  });
});
