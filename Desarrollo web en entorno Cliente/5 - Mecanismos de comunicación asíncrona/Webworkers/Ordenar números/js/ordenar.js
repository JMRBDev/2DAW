const ordenar = () => {
    if (window.Worker) {
        if (typeof worker == "undefined") {
            worker = new Worker('./js/worker.js');
            worker.postMessage([21, 15, 7, 6, 12]);
            worker.onmessage = (event) => {
                document.querySelector("#result").innerHTML += event.data + "<br>";
            }
        }
    } else {
        document.querySelector("#result").innerHTML = "Error en la conexión con el Worker";
    }
}