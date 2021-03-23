function comprobarOperadorTernario() {
    const resultado = document.getElementById('resultado2');
    const tomate = document.getElementById('tomate');
    const queso = document.getElementById('queso');
    const jamon = document.getElementById('jamon');

    resultado.innerHTML = tomate.checked ? 'Has seleccionado Tomate' :
        queso.checked ? 'Has seleccionado Queso' :
        jamon.checked ? 'Has seleccionado Jamón' :
        'No has seleccionado nada';
}