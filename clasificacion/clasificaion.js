var listaUsuarios = document.getElementById("listaUsuarios");


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

