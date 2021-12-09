/* =========================================
                Variables
========================================= */// Campos del formulario
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


/* =========================================
              EventListeners
========================================= */
eventListeners();
function eventListeners() {
    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}


/* =========================================
                Funciones
========================================= */
function validarFormulario(e) {
    // Si el campo no está vacio
    if( e.target.value.length > 0 ) {
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border-green-500');
    } else {
        e.target.classList.add('border-red-500');
        e.target.classList.remove('border-green-500');
    }
}