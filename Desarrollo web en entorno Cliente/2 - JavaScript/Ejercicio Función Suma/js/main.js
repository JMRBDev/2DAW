const parametros = window.location.search;
const urlParams = new URLSearchParams(parametros);
const resultado = document.getElementById("resultado");

let num1 = urlParams.get("num1"); 
let num2 = urlParams.get("num2"); 
let suma = num1 + num2;

resultado.innerHTML = urlParams.get("num1") + "+" + urlParams.get("num2") + " = " + suma;