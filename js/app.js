/* =========================================
                Variables
========================================= */
const btnEnviar  = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

// Campos del formulario
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// Expresión regular
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/* =========================================
              EventListeners
========================================= */
eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', deshabilitarBoton);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}


/* =========================================
                Funciones
========================================= */
function deshabilitarBoton() {
    // Deshabilitar el boton "Enviar"
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el formulario
function validarFormulario(e) {

    // Si el campo es de tipo 'email'
    if( e.target.type === 'email' ) {
        // Funcion para validar el campo de email
        validarEmail( e.target );
    }

    // Funcion para validar campos del formulario
    validarCampos( e.target );
    

    // Si todos los campos son validos
    if ( er.test(email.value) && asunto.value !== '' && mensaje.value !== '' ) {
        // Mensaje de error
        const mensajeError = document.querySelector('p.error');

        // Eliminar mensaje de error
        if(mensajeError) {
            mensajeError.remove(); 
        }

        // Habilitar boton de enviar
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        // Mostrar mensaje de error
        mostrarError('Todos los campos son obligatorios');
        deshabilitarBoton()
    }
}

function validarEmail( campoEmail ) {    
    if ( er.test( campoEmail.value ) ) { 
        // Mensaje de error
        const mensajeError = document.querySelector('p.error');
        
        // Eliminar mensaje de error
        if(mensajeError) {
            mensajeError.remove(); 
        }

        // Agregar borde verde
        campoEmail.classList.remove('border-red-500');
        campoEmail.classList.add('border-green-500');
    } else {
        // Agregar borde rojo
        campoEmail.classList.remove('border', 'border-green-500');
        campoEmail.classList.add('border', 'border-red-500');

        // Mostrar mensaje de error
        mostrarError('Email no valido');
    }
}

function validarCampos( campo ) {
    if( campo.value.length > 0 ) { 
        // Mensaje de error
        const mensajeError = document.querySelector('p.error');
            
        // Eliminar mensaje de error
        if(mensajeError) {
            mensajeError.remove(); 
        }

        // Agregar borde verde
        campo.classList.remove('border-red-500');
        campo.classList.add('border-green-500');
    } else {
        // Agregar borde rojo
        campo.classList.remove('border', 'border-green-500');
        campo.classList.add('border', 'border-red-500');

        // Mostrar mensaje de error
        mostrarError('Todos los campos son obligatorios');
    }
}

function mostrarError(mensaje) {
    // Crear mensaje de error
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    // Seleccionar mensajes de error del HTML
    const errores = document.querySelectorAll('.error');

    // Evitar que se creen muchas alertas
    if ( errores.length === 0 ) {
        formulario.appendChild(alerta)
    }
}