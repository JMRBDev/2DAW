let anterior = 0; // Número anterior al actual
let actual = 1; // Número actual
let secuencia = ""; // Secuencia completa

const temporizador = () => { // Función que se ejecutará cada X tiempo (definido al final con el setTimeout)
    if (!anterior) { // Si no existe un número anterior:
        secuencia += " " + actual; // Añadir a la secuencia el número actual sin guiones, porque es el primero, no hay anteriores
    } else { // Si existe un número anterior:
        secuencia += " - " + actual; // Añadir a la secuencia el número actual con un guión que funciona como separación
    }

    postMessage(secuencia); // Enviar el mensaje al otro archivo JS (se recibe en la parte de onmessage())

    aux = anterior + actual; // Crear un número auxiliar que será la suma de anterior + actual
    anterior = actual; // Convertir el anterior en el actual
    actual = aux; // Convertir el actual en el auxiliar
    setTimeout("temporizador()", 500); // Hacer que se repita todo el proceso cada 500ms
}

temporizador(); // Ejecutar el proceso