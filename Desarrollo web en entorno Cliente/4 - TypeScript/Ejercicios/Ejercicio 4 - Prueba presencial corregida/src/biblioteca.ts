interface ILibro {
    codigo: string,
    titulo: string,
    autor: string,
    abonado: string,
    prestado: boolean,
    prestar: Function,
    devolver: Function,
}

class Libro implements ILibro {
    codigo: string;
    titulo: string;
    autor: string;
    abonado: string;
    prestado: boolean;

    constructor(codigo: string, titulo: string, autor: string, abonado: string, prestado: boolean) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.abonado = abonado;
        this.prestado = prestado;
    }

    prestar(abonado: string) {
        this.abonado = abonado;
        this.prestado = true;
    }

    devolver() {
        this.abonado = null;
        this.prestado = false;
    }
}

const libros: Libro[] = [
    new Libro("1", "Aquitania", "Eva García", "Jose", true),
    new Libro("2", "La ciudad de vapor", "Carlos Ruiz", "", false),
    new Libro("3", "Línea de fuego", "Arturo Pérez-Reverte", "", false),
];

const ejecutar: Function = (): void => {
    let codigo: HTMLInputElement = (document.getElementById("codigo") as HTMLInputElement);
    let codigoActual: HTMLInputElement = (document.getElementById("codigo-actual") as HTMLInputElement);
    let abonado: HTMLInputElement = (document.getElementById("abonado") as HTMLInputElement);
    let errorTxt: HTMLElement = document.getElementById("error-txt");
    let formBtn: HTMLInputElement = (document.getElementById("form-btn") as HTMLInputElement);

    let libroEncontrado: Libro;

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
            } else {
                libroEncontrado.devolver();
                mostrarOcultarLibro(null);
            }
        } else {
            mostrarOcultarLibro(libroEncontrado);
        }

    } else {
        errorTxt.classList.replace('invisible', 'visible');
        formBtn.value = "Prestar/Devolver";
        mostrarOcultarLibro(null);
    }
}

const mostrarOcultarLibro: Function = (libro: Libro): void => {
    let codigoActual: HTMLInputElement = (document.getElementById("codigo-actual") as HTMLInputElement);
    let titulo: HTMLInputElement = (document.getElementById("titulo") as HTMLInputElement);
    let autor: HTMLInputElement = (document.getElementById("autor") as HTMLInputElement);
    let abonado: HTMLInputElement = (document.getElementById("abonado") as HTMLInputElement);
    let prestado: HTMLInputElement = (document.getElementById("prestado") as HTMLInputElement);

    if (libro) {
        codigoActual.value = libro.codigo;
        titulo.value = libro.titulo;
        autor.value = libro.autor;
        abonado.value = libro.abonado;
        prestado.checked = libro.prestado;
    } else {
        codigoActual.value = null;
        titulo.value = null;
        autor.value = null;
        abonado.value = null;
        prestado.checked = null;
    }
}