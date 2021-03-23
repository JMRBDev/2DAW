onmessage = (event) => {
    if (event == null) {
        postMessage("Evento vacío en el Worker");
    } else {
        for (let siguiente = 1; siguiente < event.data.length; siguiente++) {
            for (let izquierda = 0; izquierda < event.data.length - siguiente; izquierda++) {
                if (event.data[izquierda] > event.data[izquierda + 1]) {
                    let temporal = event.data[izquierda];
                    event.data[izquierda] = event.data[izquierda + 1];
                    event.data[izquierda + 1] = temporal;
                    postMessage(event.data);
                }
            }
        }
    }
}