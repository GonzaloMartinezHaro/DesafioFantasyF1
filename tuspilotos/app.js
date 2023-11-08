// Datos de pilotos
var pilotos = {
    piloto: [
        { id: 1, nombre: 'fernando', apellidos: '', nacionalidad: '', propiedadJugador: 2, rol: 'Suplente' },
        { id: 2, nombre: 'Carlos', apellidos: 'Sainz', nacionalidad: '', propiedadJugador: '', rol: 'Libre' }
        // Agrega más pilotos aquí
    ]
};

// Variables para rastrear los pilotos titular y suplente
var pilotoTitularActual = 1;
var pilotoSuplenteActual = 2;

// Función para cargar la imagen del piloto
function cargarImagenPiloto(pilotoId) {
    var piloto = pilotos.piloto.find(function (p) {
        return p.id === pilotoId;
    });

    if (piloto) {
        var nombreApellido = piloto.nombre + '-' + piloto.apellidos + '.jpg';
        var rutaImagen = '../img/' + nombreApellido;
        return rutaImagen;
    }

    return ''; // Si no se encuentra la imagen
}

// Asignar eventos
document.addEventListener("DOMContentLoaded", function () {
    var fotoPiloto1 = document.getElementById("fotoPiloto1");
    var fotoPilotoSuplente = document.getElementById("fotoPilotoSuplente");
    var titularSelect = document.getElementById("titularSelect");
    var suplenteSelect = document.getElementById("suplenteSelect");
    var asignarTitularBtn = document.getElementById("asignarTitularBtn");
    var asignarSuplenteBtn = document.getElementById("asignarSuplenteBtn");

    asignarTitularBtn.addEventListener("click", function () {
        var selectedPiloto = parseInt(titularSelect.value);

        if (selectedPiloto !== pilotoTitularActual) {
            pilotoTitularActual = selectedPiloto;
            fotoPiloto1.src = cargarImagenPiloto(pilotoTitularActual);
            almacenarRol("titular", pilotoTitularActual);
            mostrarMensaje("El piloto " + pilotoTitularActual + " es ahora el titular para las siguientes carreras");
        } else {
            mostrarMensaje("El piloto " + pilotoTitularActual + " ya es el titular.");
        }
    });

    asignarSuplenteBtn.addEventListener("click", function () {
        var selectedPiloto = parseInt(suplenteSelect.value);

        if (selectedPiloto !== pilotoSuplenteActual) {
            pilotoSuplenteActual = selectedPiloto;
            fotoPilotoSuplente.src = cargarImagenPiloto(pilotoSuplenteActual);
            almacenarRol("suplente", pilotoSuplenteActual);
            mostrarMensaje("El piloto " + pilotoSuplenteActual + " es ahora el suplente para las siguientes carreras");
        } else {
            mostrarMensaje("El piloto " + pilotoSuplenteActual + " ya es el suplente.");
        }
    });

    cargarPilotos(); // Llama a la función para cargar las imágenes iniciales de los pilotos

    function cargarPilotos() {
        // Recuperar roles desde el sessionStorage
        var rolTitular = sessionStorage.getItem("rolTitular");
        var rolSuplente = sessionStorage.getItem("rolSuplente");

        if (rolTitular) {
            fotoPiloto1.src = cargarImagenPiloto(pilotoTitularActual);
        }

        if (rolSuplente) {
            fotoPilotoSuplente.src = cargarImagenPiloto(pilotoSuplenteActual);
        }
    }

    function almacenarRol(rol, pilotoId) {
        sessionStorage.setItem("rol" + rol.charAt(0).toUpperCase() + rol.slice(1), pilotoId);
    }

    function mostrarMensaje(mensaje) {
        var mensajeDiv = document.getElementById("mensaje");
        mensajeDiv.textContent = mensaje;
    }
});
