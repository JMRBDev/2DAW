const puntosContainer = document.getElementById('puntos-container');
puntosContainer.innerHTML = '<h3>Puntos: 0</h3>'; // Para que se reflejen los 0 puntos desde el principio del juego
const cronoContainer = document.getElementById('crono-container');
const gamemodeContainer = document.getElementById('gamemode');
let modoFacil = false; // Para el selector de dificultad

let elementos = [
    "./images/image01.jpg",
    "./images/image01.jpg",
    "./images/image02.jpg",
    "./images/image02.jpg",
    "./images/image03.jpg",
    "./images/image03.jpg",
    "./images/image04.jpg",
    "./images/image04.jpg",
    "./images/image05.jpg",
    "./images/image05.jpg",
    "./images/image06.jpg",
    "./images/image06.jpg",
    "./images/image07.jpg",
    "./images/image07.jpg",
    "./images/image08.jpg",
    "./images/image08.jpg",
    "./images/image09.jpg",
    "./images/image09.jpg",
    "./images/image10.jpg",
    "./images/image10.jpg",
].sort(() => .5 - Math.random()); // Ordenar las imagenes aleatoriamente

// Empieza Cronómetro
let segundos = 0;
const cronometrar = (valor) => {
    return valor > 9 ? valor : '0' + valor; // Añadir un 0 delante del número si es menor de 10
}

const cronometro = () => {
    document.getElementById("horas").innerHTML = cronometrar(parseInt(segundos / 3600, 10));
    document.getElementById("minutos").innerHTML = cronometrar(parseInt(segundos / 60, 10) % 60);
    document.getElementById("segundos").innerHTML = cronometrar(++segundos % 60);
} // Si uno de los campos llega a 60, se pone a 0 y se suma 1 al siguiente

let interval = setInterval(cronometro, 1000);
// Termina Cronómetro

// Añadir todas las imágenes, cada una con un id distinto en un div concreto
const dibujarImagenes = () => {
    document.getElementById('juego').innerHTML = "";
    for (let i = 0; i < elementos.length; i++) {
        document.getElementById('juego').innerHTML += `<div id="div${i}" onclick="revelar(this);"><img id="imagen${i}" src="${elementos[i]}" alt="Imagen del juego" style="opacity:${modoFacil ? 0.2 : 0};"></div>`;
    }
}

dibujarImagenes();

// Empieza lógica del juego
let imagen1;
let imagen2;
let puntos = 0;
const revelar = (elemento) => {
    const imagen = elemento.firstChild;

    if (imagen.style.opacity != 1) { // Si la opacidad NO es 1, significa que aún no ha sido clicada. Si el 1, no se puede volver a clicar
        imagen.style.opacity = 1;
        if (imagen1 == null) { // Si imagen1 está vacío, asigna la imagen clicada a imagen1
            imagen1 = imagen;
        } else if (imagen2 == null) { // Si imagen2 está vacío, asigna la imagen clicada a imagen2
            imagen2 = imagen;
        }

        if (imagen1 != null && imagen2 != null && imagen1.src == imagen2.src) { // Se han seleccionado dos imágenes y son iguales
            puntos++;
            imagen1.parentNode.style.borderColor = "#52FFB8";
            imagen2.parentNode.style.borderColor = "#52FFB8";
            imagen1 = null;
            imagen2 = null;
        } else if (imagen1 != null && imagen2 != null && imagen1 != imagen2) { // Se han seleccionado dos imágenes pero no son iguales
            setTimeout(
                () => {
                    imagen1.style.opacity = `${modoFacil ? 0.2 : 0}`;
                    imagen1 = null;
                    imagen2.style.opacity = `${modoFacil ? 0.2 : 0}`;
                    imagen2 = null;
                },
                400
            ); // Muestra las dos imagenes clicadas por un corto periodo de tiempo, para saber que no son iguales pero ver cuales son exactamente
        }
    }

    puntosContainer.innerHTML = `<h3>Puntos: ${puntos}</h3>`;

    if (puntos === 10) { // Cuando se llegue a 10 puntos, se para el cronómetro y se pone en rojo
        clearInterval(interval);
        cronoContainer.style.color = 'red';
    }
}
// Termina lógica del juego

// Empieza lógica de cambiar dificultad
const cambiarDificultad = () => {
    modoFacil = !modoFacil;
    dibujarImagenes();
    gamemodeContainer.style.backgroundColor = modoFacil ? '#47a151' : '#cf0a24';
    gamemodeContainer.innerHTML = modoFacil ? 'Activar modo dificil' : 'Activar modo fácil';

    // Reiniciar juego cuando se cambia la dificultad
    puntosContainer.innerHTML = `<h3>Puntos: 0</h3>`;
    segundos = 0;
    clearInterval(interval);
    cronoContainer.style.color = 'white';
    setInterval(cronometro, 1000);
}
// Termina lógica de cambiar dificultad