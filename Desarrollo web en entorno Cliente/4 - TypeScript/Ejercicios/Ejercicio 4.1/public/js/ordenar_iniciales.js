"use strict";
const resultado = document.getElementById('resultado');
const inicializar = () => {
    let nombres = [];
    let iniciales = [];
    for (let i = 0; i < 5; i++) {
        let nombre = prompt(`Introduzca el nombre ${i + 1}`);
        if (!nombres.includes(nombre)) {
            nombres.push(nombre);
            iniciales.push(nombre.charAt(0).toUpperCase());
        }
        else {
            alert(`El nombre ${nombre} ya existe, introduzca uno diferente de nuevo`);
            i--;
        }
    }
    iniciales.sort();
    resultado.innerHTML = `<p>${nombres.join(', ')}</p><p>${iniciales.join(', ')}</p>`;
};
