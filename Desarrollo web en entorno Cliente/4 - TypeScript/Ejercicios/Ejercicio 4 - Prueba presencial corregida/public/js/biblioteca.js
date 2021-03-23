"use strict";
class Libro {
    constructor(codigo, titulo, autor, abonado, prestado) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.abonado = abonado;
        this.prestado = prestado;
    }
    prestar(abonado) {
        this.abonado = abonado;
        this.prestado = true;
    }
    devolver() {
        this.abonado = null;
        this.prestado = false;
    }
}
const libros = [
    new Libro("1", "Aquitania", "Eva García", "Jose", true),
    new Libro("2", "La ciudad de vapor", "Carlos Ruiz", "", false),
    new Libro("3", "Línea de fuego", "Arturo Pérez-Reverte", "", false),
];
const ejecutar = () => {
    let codigo = document.getElementById("codigo");
    let codigoActual = document.getElementById("codigo-actual");
    let abonado = document.getElementById("abonado");
    let errorTxt = document.getElementById("error-txt");
    let formBtn = document.getElementById("form-btn");
    let libroEncontrado;
    libros.forEach((libro) => {
        if (libro.codigo === codigo.value) {
            libroEncontrado = libro;
        }
    });
    if (libroEncontrado) {
        errorTxt.classList.replace('visible', 'invisible');
        formBtn.value = "Modificar";
        if (codigo.value === codigoActual.value) {
            if (abonado.value) {
                libroEncontrado.prestar(abonado.value);
                mostrarOcultarLibro(null);
            }
            else {
                libroEncontrado.devolver();
                mostrarOcultarLibro(null);
            }
        }
        else {
            mostrarOcultarLibro(libroEncontrado);
        }
    }
    else {
        errorTxt.classList.replace('invisible', 'visible');
        formBtn.value = "Prestar/Devolver";
        mostrarOcultarLibro(null);
    }
};
const mostrarOcultarLibro = (libro) => {
    let codigoActual = document.getElementById("codigo-actual");
    let titulo = document.getElementById("titulo");
    let autor = document.getElementById("autor");
    let abonado = document.getElementById("abonado");
    let prestado = document.getElementById("prestado");
    if (libro) {
        codigoActual.value = libro.codigo;
        titulo.value = libro.titulo;
        autor.value = libro.autor;
        abonado.value = libro.abonado;
        prestado.checked = libro.prestado;
    }
    else {
        codigoActual.value = null;
        titulo.value = null;
        autor.value = null;
        abonado.value = null;
        prestado.checked = null;
    }
};
//# sourceMappingURL=biblioteca.js.map