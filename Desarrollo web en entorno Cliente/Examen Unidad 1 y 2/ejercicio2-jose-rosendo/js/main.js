let nombre = prompt("Introduzce su nombre");
const resultado = document.getElementById('resultado');

function ejecutar() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if (numero1 == 3) {
        resultado.innerHTML = nombre + " " + (numero1 + numero2);
    } else {
        resultado.innerHTML = nombre + " " + (numero1);
    }
}