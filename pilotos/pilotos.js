var listaPilotos = document.getElementById("listaPilotos")


var pilotos = JSON.parse(sessionStorage.getItem("pilotos"))



for(i=0; i< pilotos.piloto.length; i++){

var piloto = pilotos.piloto[i];
var fila = document.createElement("tr");

if(piloto.propiedadJugador == '-'){

    var celdaPiloto = document.createElement("td");
    celdaPiloto.innerHTML = '<img src=' + piloto.foto + ' alt="Foto de del piloto">';

    var celdaInformacion = document.createElement("td");
    celdaInformacion.innerHTML = piloto.nombre + "<br>" + piloto.nacionalidad + "<br>" + piloto.puntos;

    var celdaPropiedad = document.createElement("td");
    celdaPropiedad.innerHTML = piloto.rol;

}else{

    var celdaPiloto = document.createElement("td");
    celdaPiloto.innerHTML = '<img src=' + piloto.foto + ' alt="Foto de del piloto">';

    var celdaInformacion = document.createElement("td");
    celdaInformacion.innerHTML = piloto.nombre + "<br>" + piloto.nacionalidad + "<br>" + piloto.puntos;

    var celdaPropiedad = document.createElement("td");
    celdaPropiedad.innerHTML = piloto.propiedadJugador.id+"<br>"+piloto.rol;

}


// Crear las celdas y añadir los valores


// Añadir las celdas a la fila
fila.appendChild(celdaPiloto);
fila.appendChild(celdaInformacion);
fila.appendChild(celdaPropiedad);

// Añadir la fila a la tabla
listaPilotos.appendChild(fila);
}