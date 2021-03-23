function esBisiesto() {
    const resultado = document.getElementById('resultado1');
    const ano = parseInt(document.getElementById('ano').value);
    console.log(ano);
    resultado.innerHTML = (ano % 4 === 0 &&
        ano % 100 !== 0 ||
        ano % 400 === 0) ?
        ano + ' Es bisiesto' :
        ano + ' No es bisiesto';
}

function esBisiestoAnidado() {
    const resultado = document.getElementById('resultado1');
    const ano = document.getElementById('ano').value;
    console.log(ano);
    resultado.innerHTML = (ano % 400 === 0) ?
    `El año ${ano} es bisiesto`
    : (ano % 4 === 0)
    ? (ano % 100 !== 0)
    ? `El año ${ano} es bisiesto`
    : `El año ${ano} no es bisiesto`
    : `El año ${ano} no es bisiesto`;
}