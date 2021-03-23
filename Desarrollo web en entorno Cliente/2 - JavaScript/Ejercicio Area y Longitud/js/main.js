let resultado = document.getElementById('resultado');

function calcularAreaYPerimetro() {
    let radio = document.getElementById('radio').value;
    resultado.innerHTML = "El área de la circunferencia es: " + (Math.PI * (radio ** 2)) + " y el perímetro es: " + (2 * Math.PI * radio);
}