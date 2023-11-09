var user = document.getElementById("usuario");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var newContrasena = document.getElementById("newContrasena")
var boton = document.getElementById("cambiar");
var error = document.getElementById("error");
//var prueba = document.getElementById("prueba");
var cambiarDatos = document.getElementById("cambiarDatos");
var errorNombre = document.getElementById("errorNombre");
var errorApellido = document.getElementById("errorApellido");
var errorCorreo = document.getElementById("errorCorreo");
var errorContrasena = document.getElementById("errorContrasena");

usuario = JSON.parse(sessionStorage.getItem("usuarios"));

user.value = usuario.usuario[0].usuario;
nombre.value = usuario.usuario[0].nombre;
apellido.value = usuario.usuario[0].apellido;
correo.value = usuario.usuario[0].correo;

//prueba.textContent = usuario.usuario[0].contrasena;


var errorMessage = sessionStorage.getItem("errorMessage");
if (errorMessage) {
  error.innerHTML = errorMessage;
  sessionStorage.setItem("errorMessage", "");
}

var MsgErrorContrasena = sessionStorage.getItem("MsgErrorContrasena");
if (MsgErrorContrasena) {
    errorContrasena.innerHTML = MsgErrorContrasena;
    errorContrasena.style.color = 'red'
  sessionStorage.setItem("MsgErrorContrasena", "");
}

var MsgErrorNombre = sessionStorage.getItem("MsgErrorNombre");
if (MsgErrorNombre) {
    errorNombre.innerHTML = MsgErrorNombre;
    errorNombre.style.color = 'red'
  sessionStorage.setItem("MsgErrorNombre", "");
}

var MsgErrorApellido = sessionStorage.getItem("MsgErrorApellido");
if (MsgErrorApellido) {
    errorApellido.innerHTML = MsgErrorApellido;
    errorApellido.style.color = 'red'
  sessionStorage.setItem("MsgErrorApellido", "");
}

var MsgErrorCorreo = sessionStorage.getItem("MsgErrorCorreo");
if (MsgErrorCorreo) {
    errorCorreo.innerHTML = MsgErrorCorreo;
    errorCorreo.style.color = 'red'
  sessionStorage.setItem("MsgErrorCorreo", "");
}



boton.addEventListener("click", function(){

    if(/^[\w*#$.]{6,12}$/.test(newContrasena.value)){
  if (usuario.usuario[0].contrasena != newContrasena.value) {
    usuario.usuario[0].contrasena = newContrasena.value;
    sessionStorage.setItem("usuarios", JSON.stringify(usuario));
  } else {
    error.innerHTML = "Se ha introducido la misma contraseña que ya estaba asignada a su usuario, por favor, introduzca una diferente.";

    sessionStorage.setItem("errorMessage", error.innerHTML);
  }
    }else{
        errorContrasena.innerHTML = "Mínimo de 6 a 12 caracteres"
        sessionStorage.setItem("MsgErrorContrasena", errorContrasena.innerHTML);
    }
});

cambiarDatos.addEventListener("click", function(){

    if(/^.{2,20}$/.test(nombre.value)){

        usuario.usuario[0].nombre = nombre.value;

    }else{

        errorNombre.innerHTML = "El nombre debe tener entre 2 y 20 caracteres. Si desea vuelva a introducirlo"
        errorNombre.style.color = 'red'
        sessionStorage.setItem("MsgErrorNombre", errorNombre.innerHTML);

       
        
        
    }

    if(/^.{2,30}$/.test(apellido.value)){

        usuario.usuario[0].apellido = apellido.value;

    }else{

        errorApellido.innerHTML = "El nombre debe tener entre 2 y 20 caracteres. Vuelva a introducirlo. Si desea vuelva a introducirlo"

        sessionStorage.setItem("MsgErrorApellido", errorApellido.innerHTML);
        
    }

    if(/^[A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]{3,4}$/.test(correo.value)){

        usuario.usuario[0].correo = correo.value;

    }else{
        errorCorreo.innerHTML = "El correo electrónico ingresado no es válido. Si desea vuelva a introducirlo"

        sessionStorage.setItem("MsgErrorCorreo", errorCorreo.innerHTML);
        
    }
    
    sessionStorage.setItem("usuarios", JSON.stringify(usuario));


  });