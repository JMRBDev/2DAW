// Interfaz Libro de la cual heredan todos los objetos libro
interface Libro {
    codigo: string,
    titulo: string,
    autor: string,
    abonado: string,
    prestamo: boolean,
}

// He creado los libros uno a uno aunque no es lo óptimo, pero como solo son tres en esta práctica, he decididio hacerlo así
const libro1: Libro = {
    codigo: "1",
    titulo: "Aquitania",
    autor: "Eva García",
    abonado: null,
    prestamo: false,
}

const libro2: Libro = {
    codigo: "2",
    titulo: "La ciudad de vapor",
    autor: "Carlos Ruiz",
    abonado: null,
    prestamo: false,
}

const libro3: Libro = {
    codigo: "3",
    titulo: "Línea de fuego",
    autor: "Arturo Pérez-Reverte",
    abonado: null,
    prestamo: false,
}

// Lista de libros
let libros: Libro[] = [libro1, libro2, libro3];

// Función para modificar los libros
const modificar: Function = (): void => {
    // Recojo todos los elementos necesarios del formulario
    let codigo: HTMLInputElement = (document.getElementById("codigo") as HTMLInputElement);
    let titulo: HTMLInputElement = (document.getElementById("titulo") as HTMLInputElement);
    let autor: HTMLInputElement = (document.getElementById("autor") as HTMLInputElement);
    let abonadoAPrestar: HTMLInputElement = (document.getElementById("abonado") as HTMLInputElement);

    // Creo un libro nuevo vacío para poder comparar más adelante
    let libroEncontrado: Libro;
    libros.forEach((libro) => { // Para cada libro en la lista libros:
        if (codigo.value === libro.codigo) { // Si el código del formulario es igual al código del libro:
            libroEncontrado = libro; // Guardar el libro en libroEncontrado

            // Cambiar el contenido del botón
            const prestarDevolverBtn: HTMLElement = document.getElementById('prestar-devolver-btn');
            prestarDevolverBtn.innerHTML = "Modificar";
            // Cambiar el contenido y la funcionalidad del formulario
            const formulario: HTMLElement = document.getElementById('formulario');
            abonadoAPrestar.required = true;
            formulario.onsubmit = (e: Event) => { // Cambio el onsubmit para que ahora haga prestarDevolver()
                e.preventDefault();
                prestarDevolver(libroEncontrado, abonadoAPrestar);
            }
        }
    }
    );

    const errorMsg: HTMLElement = document.getElementById('error-msg');
    if (libroEncontrado) { // Si se ha encontrado un libro con el mismo código:
        errorMsg.classList.add('d-none'); // Ocultar el mensaje de error

        // Introducir el contenido a los inputs del formulario
        titulo.value = `${libroEncontrado.titulo}`;
        autor.value = `${libroEncontrado.autor}`;
    } else { // Si no se ha encontrado:
        errorMsg.innerHTML = `No existe ningún libro con código ${codigo.value}`; // Cambiar el mensaje de error
        errorMsg.classList.remove('d-none'); // Mostrar el mensaje de error

        // Introducir el contenido a los inputs del formulario
        titulo.value = null;
        autor.value = null;
    }
}

// Función para prestar y/o devolver libros
const prestarDevolver: Function = (libro: Libro, abonadoAPrestar: HTMLInputElement): void => {
    let prestamo: HTMLInputElement = (document.getElementById("prestamo") as HTMLInputElement);

    if (libro.prestamo) { // Si el libro está prestado:
        prestamo.checked = libro.prestamo = false; // Desmarcar la casilla "Prestado" y cambiar el valor a false en el objeto
        libro.abonado = null; // Borrar el abonado que lo tiene
        abonadoAPrestar.value = null; // Borrar el abonado que lo tiene en el formulario
    } else { // Si el libro no está prestado:
        prestamo.checked = libro.prestamo = true; // Marcar la casilla "Prestado" y cambiar el valor a true en el objeto
        libro.abonado = abonadoAPrestar.value; // Modificar el abonado que lo tiene
    }

    // Renderizar de nuevo la tabla de libros para ver los datos actualizados
    mostrarLibros();
}

// Esta función simplemente muestra los libros con los datos actualizados en la tabla, es solo para comprobar que todo está ocurriendo como debe
const mostrarLibros: Function = (): void => {
    const tablaLibros: HTMLElement = document.getElementById('tabla-libros');
    tablaLibros.innerHTML = null;
    libros.forEach((libro) => {
        tablaLibros.innerHTML += `
        <tr>
            <td>${libro.codigo}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.abonado || "Nadie"}</td>
            <td>${libro.prestamo ? "Sí" : "No"}</td>
        </tr>
    `;
    });
}

mostrarLibros();