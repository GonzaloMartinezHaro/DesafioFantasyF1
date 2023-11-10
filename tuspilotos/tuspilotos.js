var fotoPiloto1 = document.getElementById("fotoPiloto1");
var fotoPiloto2 = document.getElementById("fotoPiloto2");
var nombre1 = document.getElementById("nombre1");
var nombre2 = document.getElementById("nombre2");
var titularSeleccion = document.getElementById("titularSeleccion");
var asignarTitularBtn = document.getElementById("asignarTitularBtn");
var opcion1 = document.getElementById("opcion1");
var opcion2 = document.getElementById("opcion2");

var pilotos = JSON.parse(sessionStorage.getItem("pilotos"));



function cargarDatos(){

for(i=0; i < pilotos.piloto.length; i++){

    if(pilotos.piloto[i].propiedadJugador.id == 1 && pilotos.piloto[i].rol == 'Titular'){

        fotoPiloto1.innerHTML = '<img src=' + pilotos.piloto[i].foto + ' alt="Foto de la carrera">';
        nombre1.textContent = pilotos.piloto[i].nombre; 
        opcion1.text = pilotos.piloto[i].nombre; 
        titularSeleccion.add(opcion1);

    }else if(pilotos.piloto[i].propiedadJugador.id == 1 && pilotos.piloto[i].rol == 'Suplente'){

        fotoPiloto2.innerHTML = '<img src=' + pilotos.piloto[i].foto + ' alt="Foto de la carrera">';
        nombre2.textContent = pilotos.piloto[i].nombre; 
        opcion2.text = pilotos.piloto[i].nombre; 
        titularSeleccion.add(opcion2);
    }
}
}
cargarDatos();


asignarTitularBtn.addEventListener('click',function(){

    if(titularSeleccion.value != nombre1.textContent ){

        for(i=0; i < pilotos.piloto.length; i++){

            if(pilotos.piloto[i].propiedadJugador.id == 1 && pilotos.piloto[i].rol == 'Suplente'){

                pilotos.piloto[i].rol = 'Titular'

            }else if(pilotos.piloto[i].propiedadJugador.id == 1 && pilotos.piloto[i].rol == 'Titular'){

                pilotos.piloto[i].rol = 'Suplente'
                
            }
        }
        cargarDatos();
    }

})


