const btnGenerar = document.getElementById('btn-generar');
const btnOrdenar = document.getElementById('btn-ordenar');
let cajas = document.getElementsByClassName('item');
const cajasContainer = document.getElementById('container');
const loadingScreen = document.getElementById('loading-screen');

const generarNumeros = () => {
    // Por cada caja, generar un número aleatorio de 0 a 9
    Array.from(cajas).forEach(caja => {
        caja.innerHTML = Math.floor(Math.random() * 10);
        // Poner el color de las cajas en blanco y de su contenido en negro cada vez que se generan números nuevos
        caja.style.color = 'black';
        caja.style.backgroundColor = 'white';
    });

    btnOrdenar.disabled = false;
}

const ordenarNumeros = () => {
    // Capturar radio buttons
    let ascendente = document.getElementById('ascendente');
    let descendente = document.getElementById('descendente');

    // Mostrar imagen cargando y ocultar cajas
    loadingScreen.style.display = 'flex';
    cajasContainer.style.display = 'none';

    let numerosDesordenados = [];
    Array.from(cajas).forEach((caja) => {
        // Pasar los contenidos de las cajas a una lista de números
        numerosDesordenados.push(caja.innerHTML);
        // Cambiar los colores de las cajas
        caja.style.color = 'white';
        caja.style.backgroundColor = 'black';
    });

    setTimeout(() => {
        // Ocultar la imagen de cargando
        document.getElementById('loading-screen').style.display = 'none';

        if (ascendente.checked) {
            // En caso de que ascendente esté checkeado, ordenar ascendentemente
            numerosDesordenados.sort();
            for (let i = 0; i < cajas.length; i++) {
                // Introducir cada número ya ordenado en su respectiva caja
                cajas[i].innerHTML = numerosDesordenados[i];
            }
        } else if (descendente.checked) {
            // En caso de que descendente esté checkeado, ordenar descententemente
            numerosDesordenados.sort((a, b) => b - a);
            for (let i = 0; i < cajas.length; i++) {
                // Introducir cada número ya ordenado en su respectiva caja
                cajas[i].innerHTML = numerosDesordenados[i];
            }
        }

        // Volver a mostrar las cajas
        cajasContainer.style.display = 'flex';
    }, 5000);
}