const container = document.getElementById('container');

function dibujarRombo() {
    
    let caracter = document.getElementById('caracter').value;
    let filas = Math.floor(document.getElementById('filas').value / 2);
    let posicion_h = document.getElementById('posicion-h').value;
    let posicion_v = document.getElementById('posicion-v').value;
    container.style.left = posicion_h + "px";
    container.style.top = posicion_v + "px";
    
    const relleno = document.getElementById('relleno');
    
    if (relleno.checked == true) {
        dibujarRomboRelleno(caracter, filas);
    } else {
        dibujarRomboHueco(caracter, filas);
    }
}

function dibujarRomboRelleno(caracter, filas) {
    
    let rombo = "";
    
    for (let i = 0; i < filas; i++) {
        rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter.repeat(i * 2 + 1) + "</p>";
    }
    
    for (let i = filas; i >= 0; i--) {
        rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter.repeat(i * 2 + 1) + "</p>";
    }
    
    container.innerHTML = rombo;
}

function dibujarRomboHueco(caracter, filas) {
    
    let rombo = "";
    
    for (let i = 0; i < filas; i++) {
        if (i == 0) {
            rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter + "</p>";
        } else {
            rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter + "&nbsp".repeat(i*2 - 1) + caracter + "</p>";
        }
    }

    for (let i = filas; i >= 0; i--) {
        if (i == 0) {
            rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter + "</p>";
        } else {
            rombo += "<p>" + "&nbsp".repeat(filas - i) + caracter + "&nbsp".repeat(i*2 - 1) + caracter + "</p>";
        }
    }

    container.innerHTML = rombo;
}