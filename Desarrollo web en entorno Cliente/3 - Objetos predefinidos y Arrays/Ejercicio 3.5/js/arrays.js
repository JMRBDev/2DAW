const tabla = document.getElementById('tabla');
let articulos = [];

function Articulo (nombre, unidades, precioUnitario) {
    this.nombre = nombre;
    this.unidades = unidades;
    this.precioUnitario = precioUnitario;
}

const anadirArticulo = () => {
    const nombre = document.getElementById('nombre').value;
    const unidades = document.getElementById('unidades').value;
    const precio = document.getElementById('precio').value;
    const articulo = new Articulo(nombre, unidades, precio);

    articulos.push(articulo);

    if (articulos.length == 3) {
        console.log("3");
        tabla.innerHTML = "<tr><th>Componente</th><th>Unidades</th><th>Precio unitario</th></tr>";
        articulos.forEach((articulo) => {tabla.innerHTML += "<tr><td>" + articulo.nombre + "</td>" + "<td>" + articulo.unidades + "</td>" + "<td>" + articulo.precioUnitario + "</td></tr>";});
    }
}