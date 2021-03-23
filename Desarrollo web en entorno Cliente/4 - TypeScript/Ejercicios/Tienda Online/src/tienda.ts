interface IUsuario {
    usuario: string;
    contrasena: string;
}

interface IArticulo {
    codigo: string;
    descripcion: string;
    imagen: string;
    unidades: number;
    precio: number;
}

class Usuario implements IUsuario {
    usuario: string;
    contrasena: string;

    constructor(usuario: string, contrasena: string) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

class Articulo implements IArticulo {
    codigo: string;
    descripcion: string;
    imagen: string;
    unidades: number;
    precio: number;

    constructor(codigo: string, descripcion: string, imagen: string, unidades: number, precio: number) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.unidades = unidades;
        this.precio = precio;
    }

    anadirAlCarrito(cantidad: number): void {
        if (this.unidades >= cantidad) {
            if (carrito[this.codigo]) {
                carrito[this.codigo] = parseInt(carrito[this.codigo]) + parseInt(cantidad.toString());
            } else {
                carrito[this.codigo] = parseInt(cantidad.toString());
            }
        }
    }
}

const usuarios: Usuario[] = [new Usuario("usuario1", "contraseña1")];

const articulos: Articulo[] = [new Articulo("0", "Articulo0", "Imagen0", 100, 10), new Articulo("1", "Articulo1", "Imagen1", 101, 11), new Articulo("2", "Articulo2", "Imagen2", 102, 12), new Articulo("3", "Articulo3", "Imagen3", 103, 13), new Articulo("4", "Articulo4", "Imagen4", 104, 14), new Articulo("5", "Articulo5", "Imagen5", 105, 15)];

let carrito: Map<string, number> = JSON.parse(window.localStorage.getItem('cart')) || {};

const iniciarSesion: Function = (nombre: string, contrasena: string): boolean => {
    let isSesionIniciada: boolean = usuarios.some((usuario) => {
        return usuario.usuario === nombre && usuario.contrasena === contrasena;
    });

    return isSesionIniciada;
}

const mostrarArticulos: Function = (): void => {
    const tablaArticulos = document.querySelector("#articulos");

    for (let i = 0; i < articulos.length; i++) {
        tablaArticulos.innerHTML += `<tr>
                                        <th scope="row">${articulos[i].codigo}</th>
                                        <td>${articulos[i].descripcion}</td>
                                        <td>${articulos[i].imagen}</td>
                                        <td>${articulos[i].unidades}</td>
                                        <td>${articulos[i].precio}</td>
                                        <td><input id="cantidad${i}" class="form-control" type="number" min="1" max="${articulos[i].unidades}" value="1"></td>
                                        <td><button id="botonAnadir${i}" class="btn btn-info">Añadir</button></td>
                                    </tr>`;

        // (document.querySelector(`#botonAnadir${i}`) as HTMLElement).onclick = () => articulos[i].anadirAlCarrito(parseInt((document.querySelector(`cantidad${i}`) as HTMLInputElement).value));
    }
}

mostrarArticulos();