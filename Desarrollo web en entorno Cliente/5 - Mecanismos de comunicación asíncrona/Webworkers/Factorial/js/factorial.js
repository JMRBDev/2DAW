const factorialDeUnNumero = () => {
    let webworker = new Worker("./js/webworker.js");
    webworker.postMessage(document.querySelector("#numero").value);
    webworker.onmessage = (event) => {
        document.querySelector("#result").innerHTML = event.data;
    }
}