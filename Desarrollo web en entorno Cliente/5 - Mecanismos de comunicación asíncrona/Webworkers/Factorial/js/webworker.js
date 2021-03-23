onmessage = (event) => {
    let calcularFactorial = (numero) => {
        if (numero <= 1) {
            return 1;
        }

        return numero * calcularFactorial(numero - 1);
    }

    postMessage(calcularFactorial(event.data));
}