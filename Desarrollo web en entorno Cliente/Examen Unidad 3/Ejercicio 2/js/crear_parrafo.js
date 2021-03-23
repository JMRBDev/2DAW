/**
 * Aclaración de algunas decisiones que he tomado:
 * - En este ejercicio he usado la función "createElement()" para crear un párrafo, ya que en el enunciado pone "crear un párrafo".
 * - En caso del error, he usado innerHTML porque pone en el enunciado que en caso de error se debe mostrar un mensaje, sin crear un párrafo,
 *   esto del error lo podría haber hecho en HTML usando el atributo "required" en el TextArea, pero he preferido hacerlo con JavaScript,
 *   ya que es el tema que estamos dando. (Aunque en HTML se habría conseguido con una sola palabra).
 */

const resultado = document.getElementById('resultado'); // Contenedor en el que se mostrarán el resultado o el eror

const crearParrafo = () => {
    // TextArea
    const texto = document.getElementById('texto');
    
    if (texto.value) { // Si el TextArea tiene texto:
        resultado.innerHTML = ""; // Limpiar el resultado para que no se sumen líneas, si no que se sobreescriba entero
        resultado.style.color = 'black'; // Poner el color en negro por si ha salido un error antes
        const nuevoParrafo = document.createElement('p'); // Crear el párrafo
        const nuevoTexto = document.createTextNode(texto.value); // Crear el texto del párrafo, cuyo contenido es el valor del TextArea
        
        nuevoParrafo.appendChild(nuevoTexto); // Añadir el texto al párrafo

        resultado.appendChild(nuevoParrafo); // Añadir el párrafo al contenedor del resultado
        texto.value = ""; // Limpiar el TextArea
    } else { // Si el TextArea no tiene texto:
        resultado.style.color = 'red'; // Poner el color en rojo para mostrar el error y que resalte
        resultado.innerHTML = "Error, texto vacío"; // Texto de error
    }
}