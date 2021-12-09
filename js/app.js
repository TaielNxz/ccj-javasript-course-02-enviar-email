/* =========================================
                Variables
========================================= */
const btnEnviar  = document.querySelector('#enviar');

// Campos del formulario
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


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

    // Si todos los campos son validos
    if( email.value && asunto.value !== '' && mensaje.value !== '' ) {
        // Habilitar el boton "Enviar"
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}
