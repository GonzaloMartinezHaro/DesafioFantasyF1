var correo = document.getElementById("correo")
var contrasena = document.getElementById("contrasena");
var mensajeCorrecto = document.getElementById("mensajeCorrecto");
var error = document.getElementById("error");
var boton = document.getElementById("iniciarSesion");



if(!sessionStorage.getItem('primerLogin')){
var usuarios = {
    usuario :   [{id:null, usuario: null, nombre : null, apellido: null, contrasena: null, correo: null, puntos:null }
    ],
}

sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

sessionStorage.setItem('primerLogin', 'true');  

}



boton.addEventListener("click", function(){


    var correoText = correo.value;
    var contrasenaText = contrasena.value;


    
    // Validar el correo electrónico ingresado
    if (validaciones(correoText)) {

        comprobar(correoText,contrasenaText);

    }

})




function validaciones(correoText){

    var correoRegex = /^[A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]{3,4}$/;
    var boolean = false

    if (!correoRegex.test(correoText)) {
        error.style.color;
        error.innerHTML = "El correo electrónico ingresado no es válido";
        
    }else{
        boolean = true;
    }

    return boolean;
    
}


function comprobar(correoText,contrasenaText){


    var datosUsuarioString = sessionStorage.getItem("usuarios");
        var datosUsuario = JSON.parse(datosUsuarioString);
        
       

        if(correoText == datosUsuario.usuario[0].correo && contrasenaText == datosUsuario.usuario[0].contrasena){

            window.location.href = "Inicio/inicio.html";
            error.innerHTML = "Correcto";
        }else if(correoText == datosUsuario.usuario[0].correo && contrasenaText != datosUsuario.usuario[0].contrasena){

            error.style.color;
            error.innerHTML = "Contraseña incorrecta";
            
        }else if(correoText != datosUsuario.usuario[0].correo && contrasenaText == datosUsuario.usuario[0].contrasena){

            error.style.color;
            error.innerHTML = "Correo electrónico incorrecto";
            
        }else{

            error.style.color;
            error.innerHTML = "correo electrónico y contraseña incorrectos";

        }
    
}