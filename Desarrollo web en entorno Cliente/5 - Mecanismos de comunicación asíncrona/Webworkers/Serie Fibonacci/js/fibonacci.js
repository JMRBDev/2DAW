// Instanciar Worker
let webworker;

// Iniciar Worker
const startWorker = () => {
    if (typeof Worker !== "undefined") { // Si el Worker existe en la instancia actual del navehgador:
        if (typeof webworker == "undefined") { // Si el objeto webworker no ha sido definido:
            webworker = new Worker("./js/webworker.js"); // Definirlo diciendo que la tarea en segundo plano será el JS de esa ruta
        }
        webworker.onmessage = (event) => { // Cada vez que el worker envie un mensaje:
            document.querySelector("#result").innerHTML = event.data; // Representar los datos en el DOM
        }
    } else { // Si el Worker no existe en la instancia actual del navegador:
        document.querySelector("#result").innerHTML = "Fallo al ejecutar el web worker"; // Mostrar un mensaje de error
    }
}

// Parar Worker
const stopWorker = () => {
    try { // Intentar:
        webworker.terminate(); // Parar el proceso webworker
        webworker = "undefined"; // Hacer que el objeto webworker ya no esté definido (para que cuando se vuelva a iniciar, se cumplan bien las condiciones creando un nuevo Worker)
    } catch (e) { // En caso de error:
        console.log("Ha ocurrido un error: " + e.message); // Mostrar un mensaje de error
    }
}