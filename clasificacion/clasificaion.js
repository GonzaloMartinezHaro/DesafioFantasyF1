var listaUsuarios = document.getElementById("listaUsuarios");
var botonLanzar = document.getElementById("lanzarCarrera");
var gp = document.getElementById("gp");
var cont = sessionStorage.getItem("contadorCarreras");

botonLanzar.addEventListener("click",function(){

    var gPremios =JSON.parse(sessionStorage.getItem("grandesPremios"));
    var pilotos = JSON.parse(sessionStorage.getItem("pilotos"));
    var users = JSON.parse(sessionStorage.getItem("usuarios"));
    


    if(cont <= 4){

    for(i = 0; i < gPremios.carreras[cont].posiciones.length ;i++){

        var puntos = gPremios.carreras[cont].posiciones[i].puntos;
        var id = (gPremios.carreras[cont].posiciones[i].piloto)-1;

        pilotos.piloto[id].puntos += puntos;



        for(y = 0; y < users.usuario.length; y++){

            if(users.usuario[y].id == pilotos.piloto[id].propiedadJugador.id){
                users.usuario[y].puntos += puntos;
            }

        }

    }

    }else{

        fin.innerHTML = "Fin del campeonato."

    }

    sessionStorage.setItem("usuarios", JSON.stringify(users));

    sessionStorage.setItem("pilotos", JSON.stringify(pilotos));

    cont++;
    sessionStorage.setItem("contadorCarreras", JSON.stringify(cont));

    ordenarUsuariosPorPuntos();



})


function ordenarUsuariosPorPuntos() {
    var usuarios = JSON.parse(sessionStorage.getItem("usuarios"));
    usuarios.usuario.sort(function(a, b) {
        return b.puntos - a.puntos;
    });

    listaUsuarios.innerHTML = '';
    for (var i = 0; i < usuarios.usuario.length; i++) {
        var usuario = usuarios.usuario[i];
        var fila = document.createElement('tr');

        var celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.usuario;
        fila.appendChild(celdaNombre);

        var celdaPuntos = document.createElement('td');
        celdaPuntos.textContent = usuario.puntos;
        fila.appendChild(celdaPuntos);

        listaUsuarios.appendChild(fila);


    }
}
ordenarUsuariosPorPuntos();

gp.textContent = 'Total de Grandes Premios disputados: ' +  cont;
    

