document.addEventListener('DOMContentLoaded', function () {
    // Maneja el envío del formulario de registro
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newName = document.getElementById('newName').value;
        const newLastName = document.getElementById('newLastName').value;
        const newPassword = document.getElementById('newPassword').value;
        const newEmail = document.getElementById('newEmail').value;
//ñ
    
    });

  // Validación de campos en tiempo real
  document.getElementById('newUsername').addEventListener('input', function () {
    const username = this.value;
    const validationMessage = document.getElementById('usernameValidationMessage');
    if (/^[a-zA-Z0-9_]{4,10}$/.test(username)) {
        validationMessage.textContent = 'Nombre de usuario válido';
        validationMessage.style.color = 'white';
    } else {
        validationMessage.textContent = 'El nombre de usuario debe tener entre 4 y 10 caracteres y solo puede contener letras, números y _';
        validationMessage.style.color = 'grey';
    }
});

document.getElementById('newName').addEventListener('input', function () {
    const name = this.value;
    const validationMessage = document.getElementById('nameValidationMessage');
    if (/^.{2,20}$/.test(name)) {
        validationMessage.textContent = 'Nombre válido';
        validationMessage.style.color = 'white';
    } else {
        validationMessage.textContent = 'El nombre debe tener entre 2 y 20 caracteres';
        validationMessage.style.color = 'grey';
    }
});

document.getElementById('newLastName').addEventListener('input', function () {
    const lastName = this.value;
    const validationMessage = document.getElementById('lastNameValidationMessage');
    if (/^.{2,30}$/.test(lastName)) {
        validationMessage.textContent = 'Apellido válido';
        validationMessage.style.color = 'white';
    } else {
        validationMessage.textContent = 'El apellido debe tener entre 2 y 30 caracteres';
        validationMessage.style.color = 'grey';
    }
});

document.getElementById('newPassword').addEventListener('input', function () {
    const password = this.value;
    const validationMessage = document.getElementById('passwordValidationMessage');
    if (/^[\w*#$.]{6,12}$/.test(password)) {
        validationMessage.textContent = 'Contraseña válida';
        validationMessage.style.color = 'white';
    } else {
        validationMessage.textContent = 'La contraseña debe tener entre 6 y 12 caracteres y solo puede contener letras, números y los caracteres *, #, $ o .';
        validationMessage.style.color = 'grey';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('newPassword').value;
    const confirmPassword = this.value;
    const validationMessage = document.getElementById('confirmPasswordValidationMessage');
    if (confirmPassword === password) {
        validationMessage.textContent = 'Las contraseñas coinciden';
        validationMessage.style.color = 'white';
    } else {
        validationMessage.textContent = 'Las contraseñas no coinciden';
        validationMessage.style.color = 'grey';
    }
});

    document.getElementById('newEmail').addEventListener('input', function () {
    const email = document.getElementById('newEmail').value;
    const newEmail = this.value;
    const validationMessage = document.getElementById('emailValidationMessage');
    if (/^[A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]{3,4}$/.test(email)) {
        validationMessage.textContent = 'Email valido';
        validationMessage.style.color = 'green';
    } else {
        validationMessage.textContent = 'Email no valido';
        validationMessage.style.color = 'gray';
    }
});

// Maneja el envío del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newName = document.getElementById('newName').value;
    const newLastName = document.getElementById('newLastName').value;
    const newPassword = document.getElementById('newPassword').value;
    const newEmail = document.getElementById('newEmail').value;

    // Realiza la validación final de todos los campos antes de enviar
    const usernameValidationMessage = document.getElementById('usernameValidationMessage');
    const nameValidationMessage = document.getElementById('nameValidationMessage');
    const lastNameValidationMessage = document.getElementById('lastNameValidationMessage');
    const passwordValidationMessage = document.getElementById('passwordValidationMessage');

    if (usernameValidationMessage.style.color === 'white' &&
        nameValidationMessage.style.color === 'white' &&
        lastNameValidationMessage.style.color === 'white' &&
        passwordValidationMessage.style.color === 'white') {
        // Almacena los datos en sessionStorage

        var usuarios = {
            usuario :   [
                            {id:1, usuario: newUsername, nombre : newName, apellido: newLastName, contrasena: newPassword, correo: newEmail, puntos:0 }
                        ],
        }

        sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
      
        alert('Registro exitoso. Puedes iniciar sesión ahora.');
        // Puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones aquí
        window.location.href = '../index.html'; // Redirige al usuario a la página de inicio de sesión
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
});

});


