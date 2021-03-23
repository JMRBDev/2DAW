const lista = ['panadero', 456, [0, 1, 2]];

const resultado = document.getElementById('resultado');

lista.forEach(elem => {
    console.log(elem);
    resultado.innerHTML += elem + '<br>';
});