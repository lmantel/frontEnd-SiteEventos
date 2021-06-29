// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "./info.json"
  }).done(function (resultado) {

    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    console.log(eventos);

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
    var id = location.search.match(/id=(\d)*/)[1]
    console.log(location.search);
    console.log(id);

    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    })
    console.log(evento);

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `
                <div class="col-12 bg-light p-3 m-3 rounded">
                <h2>${evento.nombre}</h2>
                <p style="color: grey;">${evento.fecha} - ${evento.lugar}</p>
                <p>${evento.descripcion}</p>
                <p style="color: rgb(6, 148, 173);">Costo: ${evento.precio}</p>
                <p style="color: orange;">Invitados: ${evento.invitados}</p>
                </div>
                `
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html
  });
  

  

  

  

  

  

});
