const resultado: HTMLElement = document.getElementById('resultado');

const inicializar: Function = () => {
    let nombres: string[] = [];
    let iniciales: string[] = [];

    for (let i: number = 0; i < 5; i++) {
        let nombre: string = prompt(`Introduzca el nombre ${i + 1}`);
        if (!nombres.includes(nombre)) {
            nombres.push(nombre);
            iniciales.push(nombre.charAt(0).toUpperCase());
        } else {
            alert(`El nombre ${nombre} ya existe, introduzca uno diferente de nuevo`);
            i--;
        }
    }

    iniciales.sort();
    resultado.innerHTML = `<p>${nombres.join(', ')}</p><p>${iniciales.join(', ')}</p>`;
}