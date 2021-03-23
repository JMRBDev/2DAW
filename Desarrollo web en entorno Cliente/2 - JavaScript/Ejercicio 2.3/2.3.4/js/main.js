const resultado = document.getElementById('resultado');

let numero_aleatorio = Math.random();

resultado.innerHTML = numero_aleatorio < 0.5 ? '<a href="https://iesrafaelalberti.es/v2/" target="_blank">iesrafaelalberti.es</a>' : definirSaludo();

function definirSaludo() {
    const hora = new Date;
    return hora.getHours() < 15 ? 'Buenos días' : 'Buenas tardes';
}