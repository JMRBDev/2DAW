"use strict";
class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}
class Articulo {
    constructor(codigo, descripcion, imagen, unidades, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.unidades = unidades;
        this.precio = precio;
    }
}
let usuarios = [new Usuario("usuario1", "contraseña1"), new Usuario("antonio", "5678")];
let articulos = [new Articulo(1, "Articulo 001", "../assets/products/0.jpg", 30, 12.99), new Articulo(2, "Articulo 001", "../assets/products/1.jpg", 17, 9.95)];
const iniciarSesion = () => {
    const nombre = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;
    const isAutenticado = usuarios.some((usuario) => {
        return usuario.nombre === nombre && usuario.contrasena === contrasena;
    });
    if (isAutenticado) {
        window.localStorage.setItem("autenticado", "true");
        Array.prototype.forEach.call(document.getElementsByClassName("anadir-al-carrito-btn"), (boton) => {
            boton.classList.remove("disabled");
            console.log(boton.closest("input"));
        });
    }
    else {
        window.localStorage.removeItem("autenticado");
    }
};
const anadirAlCarrito = (unidades) => {
    alert(unidades);
};
articulos.forEach((articulo) => {
    document.getElementById("productos").innerHTML += `
      <div class="col mb-3">
          <div class="card pt-2" style="width: 18rem;">
              <img class="card-img-top w-75 m-auto" src="${articulo.imagen}" alt="Artículo ${articulo.codigo}">
              <div class="card-body">
              <h5 class="card-title">${articulo.descripcion}</h5>
              <div class="d-flex justify-content-between">
                <p class="card-text">${articulo.precio}€</p>
                <p class="card-text text-secondary">${articulo.unidades} en stock</p>
              </div>
                  <div class="d-flex">
                    <button onclick="anadirAlCarrito(this.closest('input').value);" class="anadir-al-carrito-btn btn btn-primary disabled"><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                    <input class="form-control ml-2" type="number" name="unidades" id="unidades" placeholder="Unidades" value="1" min="1" max="${articulo.unidades}">
                  </div>
              </div>
          </div>
      </div>`;
});
//# sourceMappingURL=tienda.js.map