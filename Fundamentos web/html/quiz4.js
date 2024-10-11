document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Función para validar el formulario
    function validateForm() {

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const genero = document.getElementById('genero').value;
        const email = document.getElementById('email').value.trim();
        const studentId = document.getElementById('student-id').value.trim();
        const classList = document.getElementById('class-list').value;

        // Arreglo para almacenar mensajes de error
        let errors = [];
        const namePattern = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/;

        if (!nombre) {
            errors.push('Por favor, ingresa tu nombre.');
        } else if (!namePattern.test(nombre)) {
            errors.push('El nombre solo puede contener letras.');
        }

        if (!apellido) {
            errors.push('Por favor, ingresa tu apellido.');
        } else if (!namePattern.test(apellido)) {
            errors.push('El apellido solo puede contener letras.');
        }

        if (!genero) {
            errors.push('Por favor, selecciona tu género.');
        }
        if (!email) {
            errors.push('Por favor, ingresa tu correo electrónico.');
        }
        if (!studentId) {
            errors.push('Por favor, ingresa tu ID de estudiante.');
        }
        if (!classList) {
            errors.push('Por favor, selecciona una clase.');
        }
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    }

    // Evento de envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('¡Registro exitoso!');
        }
    });
});