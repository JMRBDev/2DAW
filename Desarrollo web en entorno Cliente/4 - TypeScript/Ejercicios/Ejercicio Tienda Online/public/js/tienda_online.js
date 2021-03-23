"use strict";
/**
 * Clase Usuario
 */
class Usuario {
}
/**
 * Clase Articulo
 */
class Articulo {
}
/**
 * Lista de usuarios y de artículos
 */
const usuarios = [];
const articulos = [];
// Generar datos falsos para los usuarios
for (let i = 0; i < 2; i++) {
    const usuario = {
        usuario: `usuario${i + 1}`,
        contrasena: `contraseña${i + 1}`,
    };
    usuarios.push(usuario);
}
const imgProductos = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const descripcionesProductos = ["Intel Core i7", "Portátil Acer", "LG K61", "LG Ultrawide", "MSI Gaming", "Gigabyte Gaming"];
const unidadesProductos = [250, 85, 302, 42, 67, 12];
const preciosProductos = [229, 390, 189, 449, 989, 1029];
// Generar datos para los artículos
for (let i = 0; i < 6; i++) {
    const articulo = {
        codigo: parseInt(`00000${i}`),
        descripcion: descripcionesProductos[i],
        imagen: `../assets/images/products/${imgProductos[i]}`,
        unidades: unidadesProductos[i],
        precio: preciosProductos[i],
    };
    articulos.push(articulo);
}
;
/**
 * Iniciar sesión según los parámetros "username" y "password" recogidos del formulario y modificar los elementos que deben mostrarse/ocultarse
 */
const iniciarSesion = () => {
    // Los HTMLElement no tienen el atributo value, así que hay que especificar que es un HTMLInputElement
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const isAutenticado = usuarios.some((usuario) => {
        return usuario.usuario === username && usuario.contrasena === password;
    });
    if (isAutenticado) {
        window.localStorage.setItem("auth", "true");
        mostrarOcultarElementosSesion("iniciar");
        document.getElementById('login-error-msg').innerHTML = "";
    }
    else {
        document.getElementById('login-error-msg').innerHTML = "Usuario o contraseña incorrectos";
    }
};
/**
 * Cerrar sesión y modificar los elementos que deben mostrarse/ocultarse
 */
const cerrarSesion = () => {
    window.localStorage.removeItem("auth");
    mostrarOcultarElementosSesion("cerrar");
};
/**
 * Añadir un producto al carrito
 * @param unidades Unidades que se añadirán al carrito
 * @param codigo Código del producto que se añadirá
 */
const anadirAlCarrito = (unidades, codigo) => {
    const articulo = articulos.find((articulo) => {
        return articulo.codigo === codigo;
    });
    if (articulo.unidades >= unidades) {
        let carrito = JSON.parse(window.localStorage.getItem('cart'));
        if (carrito) {
            for (let code in carrito) {
                if (code === codigo.toString()) {
                    carrito[code] = parseInt(carrito[code]) + parseInt(unidades.toString());
                    window.localStorage.setItem('cart', JSON.stringify(carrito));
                }
            }
        }
        else {
            window.localStorage.setItem('cart', JSON.stringify(`{${codigo}: ${unidades}}`));
        }
    }
};
/**
 * Gestiona todos los elementos que deben ocultarse, mostrarse o cambiar según la sesión esté iniciada o no
 * @param accion iniciar ó cerrar, informa sobre la acción que se va a realizar
 */
const mostrarOcultarElementosSesion = (accion) => {
    if (accion == "iniciar") { // Si se inicia sesión, o ya está iniciada en LocalStorage
        document.getElementById('iniciar-sesion-dropdown-btn').classList.add('d-none');
        document.getElementById('cerrar-sesion-btn').classList.remove('d-none');
        document.getElementById('cart-dropdown-btn').classList.remove('d-none');
        Array.prototype.forEach.call(document.getElementsByClassName("anadir-al-carrito-btn"), (boton) => {
            boton.disabled = false;
        });
    }
    else if (accion == "cerrar") { // Si se cierra sesión, o está cerrada en LocalStorage
        document.getElementById('iniciar-sesion-dropdown-btn').classList.remove('d-none');
        document.getElementById('cerrar-sesion-btn').classList.add('d-none');
        document.getElementById('cart-dropdown-btn').classList.add('d-none');
        Array.prototype.forEach.call(document.getElementsByClassName("anadir-al-carrito-btn"), (boton) => {
            boton.disabled = true;
        });
    }
};
/**
 * Mostrar las tarjetas con cada artículo
 */
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
                  <button onclick="anadirAlCarrito(this.nextElementSibling.value, ${articulo.codigo});" class="anadir-al-carrito-btn btn btn-primary" disabled><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                  <input class="form-control ml-2" type="number" name="unidades" id="unidades${articulo.codigo}" placeholder="Unidades" value="1" min="1" max="${articulo.unidades}">
                </div>
            </div>
        </div>
    </div>`;
});
/**
 * Mostrar u ocultar ciertos elementos según la sesión esté iniciada o no
 */
if (window.localStorage.getItem("auth") == "true") {
    mostrarOcultarElementosSesion("iniciar");
}
else {
    mostrarOcultarElementosSesion("cerrar");
}
//# sourceMappingURL=tienda_online.js.map