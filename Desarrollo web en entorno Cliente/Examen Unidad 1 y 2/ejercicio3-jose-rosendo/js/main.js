const resultado = document.getElementById('resultado');
let numero = prompt("Introduzca un número:");

resultado.innerHTML = numero % 2 == 0 ?
    numero > 100 ?
    "El número es mayor que 100 y par" :
    "El número es menor que 100 y par" :
    "El número es menor que 100 e impar";