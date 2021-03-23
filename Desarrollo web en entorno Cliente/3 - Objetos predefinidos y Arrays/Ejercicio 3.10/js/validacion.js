const formulario = document.getElementById('formulario');
let error = document.getElementById('error');

formulario.onsubmit = (event) => {
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    const edad = document.getElementById('edad'); // Capturar elemento Input Edad
    const password = document.getElementById('password'); // Capturar elemento Input Password
    const repetirPassword = document.getElementById('repetir-password'); // Capturar elemento Input Repetir Password
    const mayorEdadRadio = document.getElementById('mayor-edad'); // Capturar elemento Input Mayor Edad Radio
    const menorEdadRadio = document.getElementById('menor-edad'); // Capturar elemento Input Menor Edad Radio

    error.innerHTML = '';

    if (password.value == repetirPassword.value) { // Si la contraseña coincide en los dos campos:
        password.labels[0].style.backgroundColor = 'initial'; // Se quita el color de fondo de la contraseña
        repetirPassword.labels[0].style.backgroundColor = 'initial'; // Se quita el color de fondo de repetir contraseña
    } else { // Si la contraseña no coincide en los dos campos:
        password.labels[0].style.backgroundColor = 'gold'; // Se pone el color de fondo amarillo de la contraseña
        repetirPassword.labels[0].style.backgroundColor = 'gold'; // Se pone el color de fondo amarillo de repetir contraseña
        error.innerHTML += '<p>Las contraseñas no coinciden</p>';
    }

    if (edad.value >= 18 && mayorEdadRadio.checked || edad.value < 18 && menorEdadRadio.checked) { // Si es mayor de edad y ha marcado que es mayor de edad:
        edad.labels[0].style.backgroundColor = 'initial'; // Se quita el color de fondo de la edad
        mayorEdadRadio.labels[0].style.backgroundColor = 'initial'; // Se quita el color de fondo del radio mayor edad
        menorEdadRadio.labels[0].style.backgroundColor = 'initial'; // Se quita el color de fondo del radio menor edad
    } else { // Si ha puesto una edad y los radios no concuerdan:
        edad.labels[0].style.backgroundColor = 'gold'; // Se pone el color de fondo amarillo de la edad
        mayorEdadRadio.labels[0].style.backgroundColor = 'gold'; // Se pone el color de fondo amarillo del radio mayor de edad
        menorEdadRadio.labels[0].style.backgroundColor = 'gold'; // Se pone el color de fondo amarillo del radio menor de edad
        error.innerHTML += '<p>La edad no coincide con la selección</p>';
    }

}