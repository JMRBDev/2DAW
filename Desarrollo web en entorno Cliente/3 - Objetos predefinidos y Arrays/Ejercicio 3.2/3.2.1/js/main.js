const container = document.getElementById('container');
let hayCookies = checkCookies();

function checkCookies() {
    if (document.cookie.indexOf('nombre') != -1) { // Buscar el indice de un item que no existe da error -1
        // Mostrar Cookies
        container.innerHTML = `<h2>${document.cookie}</h2>`;

        // Borrar Cookies
        document.cookie = `nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        document.cookie = `direccion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        document.cookie = `edad=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        document.cookie = `profesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    } else {
        // Crear Cookies
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expira = "expires=" + fecha.toUTCString();

        let nombre = prompt("Nombre");
        let direccion = prompt("Direccion");
        let edad = prompt("Edad");
        let profesion = prompt("Profesion");

        document.cookie = `nombre=${nombre}; expires=${expira}; path=/`;
        document.cookie = `direccion=${direccion}; expires=${expira}; path=/`;
        document.cookie = `edad=${edad}; expires=${expira}; path=/`;
        document.cookie = `profesion=${profesion}; expires=${expira}; path=/`;
    }
}