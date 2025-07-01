document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const rut = document.getElementById('rut').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;

    // Validación de RUT
    const rutRegex = /^\d{8}-[0-9K]$/;
    if (!rutRegex.test(rut)) {
        alert('El RUT debe tener el formato nnnnnnnn-n');
        return;
    }

    // Validación de Fecha de Nacimiento
    const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    if (!fechaRegex.test(fechaNacimiento)) {
        alert('La fecha de nacimiento debe tener el formato dd/mm/aaaa');
        return;
    }

    const [dia, mes, anio] = fechaNacimiento.split('/').map(Number);
    const hoy = new Date();
    const edad = hoy.getFullYear() - anio - (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia) ? 1 : 0);
    if (edad < 14) {
        alert('Debes tener al menos 14 años para registrarte.');
        return;
    }

    // Validación de Correo Electrónico
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    alert('Registro exitoso!');
    // Aquí puedes agregar la lógica para enviar el formulario si fuera necesario
});