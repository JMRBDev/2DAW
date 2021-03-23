const container = document.getElementById('container');

if (localStorage.length > 0) {
    // Mostrar Datos
    container.innerHTML += `<h2>Nombre: ${localStorage.getItem('nombre')}</h2>`;
    container.innerHTML += `<h2>Dirección: ${localStorage.getItem('direccion')}</h2>`;
    container.innerHTML += `<h2>Edad: ${localStorage.getItem('edad')}</h2>`;
    container.innerHTML += `<h2>Profesión: ${localStorage.getItem('profesion')}</h2>`;

    // Borrar Datos
    localStorage.clear();
} else {
    // Crear Datos
    let nombre = prompt("Nombre");
    let direccion = prompt("Direccion");
    let edad = prompt("Edad");
    let profesion = prompt("Profesion");

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("edad", edad);
    localStorage.setItem("profesion", profesion);
}