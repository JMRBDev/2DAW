// Funciones de manejo de Cookies
const setCookie: Function = (nombre: string, datos: string): void => {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));

    document.cookie = nombre + "=" + datos + "; expires=" + fecha.toUTCString() + "; path=/";
}

const getCookie: Function = (nombre: string): string => {
    const valor = "; " + document.cookie;
    const valorSplit = valor.split("; " + nombre + "=");

    if (valorSplit.length == 2) {
        return valorSplit.pop().split(";").shift();
    }
}

// Poner el número de intentos de envío
const intentosEnvio: HTMLElement = document.getElementById("intentos-envio");
let intentos = getCookie("intentos");
if (intentos == "NaN" || intentos == "" || intentos == null) { // Si no hay una cookie con intentos:
    setCookie("intentos", "0"); // Crearla a 0
    intentosEnvio.innerHTML = "0"; // Poner 0 en la página
} else { // Si ya existe:
    intentosEnvio.innerHTML = intentos.toString(); // Poner el número recogido de las cookies
}

// Enviar formulario
const enviarFormulario: Function = (): void => {
    let nombreValidado = false;
    let apellidosValidado = false;
    let edadValidado = false;
    let nifValidado = false;

    const formulario: HTMLFormElement = (document.getElementById("formulario") as HTMLFormElement);
    const mensajes: HTMLElement = document.getElementById("mensajes");

    const enviarBtn: HTMLElement = document.getElementById("enviar-btn");
    // Deshabilitar el botón de enviar
    enviarBtn.setAttribute("disabled", "disabled");
    enviarBtn.classList.add("disabled");

    const confirmacion: HTMLElement = document.getElementById("confirmacion");
    // Mostrar botones de confirmación
    confirmacion.classList.remove("d-none");

    const confirmarEnvio: HTMLElement = document.getElementById("confirmarEnvio");
    // Si se confirma el envío se empiezan a validar los datos
    confirmarEnvio.onclick = () => {
        const nombreInput: HTMLElement = (document.getElementById("nombre") as HTMLInputElement);
        const nombre: string = (document.getElementById("nombre") as HTMLInputElement).value;
        const apellidosInput: HTMLElement = (document.getElementById("apellidos") as HTMLInputElement);
        const apellidos: string = (document.getElementById("apellidos") as HTMLInputElement).value;
        const edadInput: HTMLElement = (document.getElementById("edad") as HTMLInputElement);
        const edad: number = parseInt((document.getElementById("edad") as HTMLInputElement).value);
        const nifInput: HTMLElement = (document.getElementById("nif") as HTMLInputElement);
        const nif: string = (document.getElementById("nif") as HTMLInputElement).value;

        // Como se ha confirmado el envío, se suma 1 a los intentos de envío del formulario y se actualiza el valor en la página
        setCookie("intentos", (parseInt(getCookie("intentos")) + 1).toString());
        let intentos = getCookie("intentos");
        intentosEnvio.innerHTML = intentos.toString();

        mensajes.innerHTML = ""; // Borrar mensajes de error por si hay alguno 

        if (/\d/.test(nombre)) { // Si el nombre contiene algún dígito:
            nombreValidado = false; // Informar de que no está validado
        } else {
            nombreValidado = true; // Informar de que está validado
        }

        if (/\d/.test(apellidos)) { // Si los apellidos contienen algún dígito:
            apellidosValidado = false; // Informar de que no está validado
        } else {
            apellidosValidado = true; // Informar de que está validado
        }

        // Operador ternario para saber si la edad está validada
        edadValidado = typeof edad == "number" ? // Si la edad es de tipo número, que siempre va a ser así porque el input es de tipo number y typescript también hace validación de tipos
            edad > 0 ? // Si la edad es de tipo número y mayor que 0
                edad < 105 ? // Si la edad es de tipo número, mayor que 0 y menor que 105
                    true // Informar de que está validado
                    : false // Informar de que no está validado porque es de tipo número, mayor que cero, pero menor que 105
                : false // Informar de que no está validado porque es de tipo número, pero menor que 0
            : false // Informar de que no está validado porque no es de tipo número
            ;

        if ((/^\d{8}-[a-zA-Z]$/).test(nif)) { // Si el NIF está formado por 8 números, un guión y una letra:
            nifValidado = true; // Informar de que está validado
        } else {
            nifValidado = false; // Informar de que no está validado
        }

        // Comprobar que todo está validado, si hay algo NO validado, se informa del error y se pone el input en cuestión en foco
        if (!nombreValidado) {
            mensajes.innerHTML += "<p>Error el nombre debe tener algún valor válido</p>";
            nombreInput.focus();
        }
        if (!apellidosValidado) {
            mensajes.innerHTML += "<p>Error los apellidos deben tener algún valor válido</p>";
            apellidosInput.focus();
        }
        if (!edadValidado) {
            mensajes.innerHTML += "<p>Error la edad debe estar entre 0 y 105</p>";
            edadInput.focus();
        }
        if (!nifValidado) {
            mensajes.innerHTML += "Error el NIF no está bien formado";
            nifInput.focus();
        }

        // Si todo está validado, se informa de que se ha enviado con éxito, se limpia el formulario, se activa el botón enviar y se oculta la confirmación
        if (nombreValidado && apellidosValidado && edadValidado && nifValidado) {
            mensajes.innerHTML = "Formulario enviado con éxito";
            formulario.reset();
            enviarBtn.classList.remove("disabled");
            enviarBtn.removeAttribute("disabled");
            confirmacion.classList.add("d-none");
        }
    }

    // Si se cancela el envío se limpia el formulario, se activa el botón enviar y se oculta la confirmación
    const cancelarEnvio: HTMLElement = document.getElementById("cancelarEnvio");
    cancelarEnvio.onclick = () => {
        formulario.reset();
        enviarBtn.classList.remove("disabled");
        enviarBtn.removeAttribute("disabled");
        confirmacion.classList.add("d-none");
    }
}