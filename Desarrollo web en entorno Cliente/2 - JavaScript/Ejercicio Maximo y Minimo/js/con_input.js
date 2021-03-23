let lista = [];
let resultado = document.getElementById('resultado');
let titulo = document.getElementById("titulo");

function anadirNumero() {
    let numero = document.getElementById("numero").value;
    lista.push(numero);
    titulo.innerText = "Mínimo y máximo de: " + lista;
    resultado.innerText = "El número mínimo es: " + (Math.min.apply(null, lista)) + " y el número máximo es: " + (Math.max.apply(null, lista));
}