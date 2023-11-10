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
    cargarPilotos();

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

   // Dentro de la función cargarPilotos() después de recuperar los roles desde sessionStorage
   function cargarPilotos() {
    // Recuperar roles desde el sessionStorage
    var rolTitular = sessionStorage.getItem("rolTitular");
    var rolSuplente = sessionStorage.getItem("rolSuplente");

    // Obtener los elementos select
    var titularSelect = document.getElementById("titularSelect");
    var suplenteSelect = document.getElementById("suplenteSelect");

    // Limpiar las opciones actuales
    titularSelect.innerHTML = "";
    suplenteSelect.innerHTML = "";

    // Generar las opciones dinámicamente desde los datos de los pilotos
    pilotos.piloto.forEach(function (piloto) {
        var option = document.createElement("option");
        option.value = piloto.id;
        option.text = piloto.nombre;
        titularSelect.add(option);

        // Clonar la opción para el select de suplente
        var suplenteOption = option.cloneNode(true);
        suplenteSelect.add(suplenteOption);
    });

    // Cargar las imágenes según los roles o cargar las del primer piloto como titular y segundo como suplente
    fotoPiloto1.src = rolTitular ? cargarImagenPiloto(rolTitular) : cargarImagenPiloto(pilotoTitularActual);
    fotoPilotoSuplente.src = rolSuplente ? cargarImagenPiloto(rolSuplente) : cargarImagenPiloto(pilotoSuplenteActual);

    // Seleccionar automáticamente los pilotos en los selectores
    if (rolTitular) {
        titularSelect.value = rolTitular;
    }

    if (rolSuplente) {
        suplenteSelect.value = rolSuplente;
    }
}


// Asegúrate de llamar a cargarPilotos() en algún lugar, por ejemplo, al final de la función asignarTitularBtn.addEventListener


    function almacenarRol(rol, pilotoId) {
        sessionStorage.setItem("rol" + rol.charAt(0).toUpperCase() + rol.slice(1), pilotoId);
    }

    function mostrarMensaje(mensaje) {
        var mensajeDiv = document.getElementById("mensaje");
        mensajeDiv.textContent = mensaje;
    }
});
