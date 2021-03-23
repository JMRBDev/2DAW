const resultado = document.getElementById('resultado');

const zonas = {
    supIzq: [(window.innerWidth / 2), (window.innerHeight / 2)],
    infIzq: [(window.innerWidth / 2), window.innerHeight],
    supDer: [(window.innerWidth / 2), (window.innerHeight / 2)],
    infDer: [(window.innerWidth / 2), (window.innerHeight / 2)],
};

window.onclick = (click) => {
    if (click.clientX < zonas['supIzq'][0] && click.clientY < zonas['supIzq'][1]) {
        resultado.innerHTML = `<h1>Coordenadas: (${click.clientX}, ${click.clientY})<br>Superior Izquierda</h1>`;
    } else if (click.clientX < zonas['infIzq'][0] && click.clientY < zonas['infIzq'][1]) {
        resultado.innerHTML = `<h1>Coordenadas: (${click.clientX}, ${click.clientY})<br>Inferior Izquierda</h1>`;
    } else if (click.clientX > zonas['supDer'][0] && click.clientY < zonas['supDer'][1]) {
        resultado.innerHTML = `<h1>Coordenadas: (${click.clientX}, ${click.clientY})<br>Superior Derecha</h1>`;
    } else if (click.clientX > zonas['infDer'][0] && click.clientY > zonas['infDer'][1]) {
        resultado.innerHTML = `<h1>Coordenadas: (${click.clientX}, ${click.clientY})<br>Inferior Derecha</h1>`;
    }
};