let resultado = document.getElementById('resultado');
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt("Introduzca el " + (i + 1) + "º número:");
    numeros.push(numero);
}

resultado.innerHTML = numeros.sort().join(', ');