/* =========================================
                Variables
========================================= */
const btnEnviar  = document.querySelector('#enviar');

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
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

/* =========================================
                Funciones
========================================= */
function iniciarApp() {
    // Deshabilitar el boton "Enviar"
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {
    // Si el campo no está vacio
    if( e.target.value.length > 0 ) {
        // Agregar borde rojo
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border-green-500');
    } else {
        // Agregar borde verde
        e.target.classList.add('border-red-500');
        e.target.classList.remove('border-green-500');
    }

    // Si el campo es el de Email
    if( e.target.type === 'email') {
        // validar con expresión regular
        if ( er.test( e.target.value ) ) {
            // Agregar borde rojo
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');
        } else {
            // Agregar borde verde
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
        }
    }

    // Si todos los campos son validos
    if( er.test(email.value) && asunto.value !== '' && mensaje.value !== '' ) {
        // Habilitar el boton "Enviar"
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}