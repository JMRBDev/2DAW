interface ICoche {
    matricula: string,
    modelo: string,
    precio: number,
    fechaAlquiler: Date, // He decidido incluir el atributo fechaAlquiler en la interfaz, aunque lo podría haber hecho usando una lista con pares clave valor, las claves serían los coches, y sus valores serían la fecha de alquiler. Pero usando POO creo que esta manera es más correcta
    alquilar(): void;
    devolver(): void;
    mostrarOcultarInfo(mostrarOcultar: string): void;
}

class Coche implements ICoche {
    matricula: string;
    modelo: string;
    precio: number;
    fechaAlquiler: Date;

    constructor(matricula: string, modelo: string, precio: number, fechaAlquiler: Date) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.precio = precio;
        this.fechaAlquiler = fechaAlquiler;
    }

    alquilar() {
        this.fechaAlquiler = new Date(); // Alquilarlo asignandole la fecha actual
        let errorTxt: HTMLElement = document.getElementById("error-txt"); // Texto de error para hacerlo invisible por si estaba visible antes
        errorTxt.classList.replace('visible', 'invisible'); // Hacer el mensaje de error invisible
        this.mostrarOcultarInfo("mostrar"); // Mostrar la info de este coche
        let precioTxt: HTMLElement = document.getElementById("precio-txt"); // Texto de precio o "factura"

        precioTxt.classList.replace('visible', 'invisible');
    }

    devolver() {
        let precioTxt: HTMLElement = document.getElementById("precio-txt"); // Texto de precio o "factura"
        this.mostrarOcultarInfo("mostrar"); // Mostrar la info de este coche
        const diasAlquilado: number = Math.ceil(Math.abs(new Date().getTime() - this.fechaAlquiler.getTime()) / (1000 * 3600 * 24)); // Restar la fecha actual menos la fecha en que se alquiló el coche para hallar los días que ha sido alquilado.

        const precio: number = this.precio * diasAlquilado == 0 ? this.precio : this.precio * diasAlquilado; // Precio total del alquiler. He decidido poner que si el coche ha estado alquilado 0 días (es decir, algunas horas pero menos de 24), se muestre el precio de un solo día, ya que si resulta que ha sido alquilado 0 días, el precio será 0 al multiplicar <precio * 0 días>.
        precioTxt.classList.replace('invisible', 'visible'); // Mostrar el texto del precio
        precioTxt.innerHTML = `Días transcurridos: ${diasAlquilado}<br>
            Precio por día: ${this.precio}€<br>
            Total a pagar: ${precio}€`; // Cambiar el contenido del texto del precio

        this.fechaAlquiler = null; // Borrar la fecha de alquiler de este coche para que deje de estar alquilado

        this.mostrarOcultarInfo("ocultar"); // Ocultar tabla de info
    }

    mostrarOcultarInfo(mostrarOcultar: string) {
        const tablaInfo: HTMLElement = document.getElementById('tabla-info'); // Tabla de información sobre el coche

        if (mostrarOcultar === "mostrar") {

            const tablaInfoBody: HTMLElement = document.getElementById('tabla-info-body'); // Cuerpo de la tabla de información sobre el coche

            tablaInfo.classList.replace('invisible', 'visible'); // Mostrar la info de este coche

            tablaInfoBody.innerHTML =
                `<tr>
            <th scope="row">${this.matricula}</th>
            <td>${this.modelo}</td>
            <td>${this.precio}€</td>
            <td>${this.fechaAlquiler ? this.fechaAlquiler.getUTCDate().toString() + '/' + (this.fechaAlquiler.getUTCMonth() + 1).toString() + '/' + this.fechaAlquiler.getFullYear().toString() : "No alquilado"}</td>
            </tr>`; // Incluir el registro de este coche al cuerpo de la tabla de información
        } else if (mostrarOcultar === "ocultar") {
            tablaInfo.classList.replace('visible', 'invisible'); // Mostrar la tabla de información
        }
    }
}

// Lista de coches
let coches: Coche[] = [new Coche("23456CMN", "Fiat 500", 25, null), new Coche("1234DPR", "Seat León", 40, null)];

const alquilarDevolverCoche: Function = (alquilarODevolver: string): void => {
    let matricula: HTMLInputElement = (document.getElementById("matricula") as HTMLInputElement); // Campo matrícula del formulario

    if (matricula.value) { // Si la matrícula en el formulario tiene un valor asignado:
        let errorTxt: HTMLElement = document.getElementById("error-txt"); // Texto de error

        let cocheEncontrado: Coche;

        coches.forEach((c) => { // Para cada coche (c) en coches:
            if (c.matricula === matricula.value) { // Si la matrícula del coche (c) es igual a la matrícula aportada en el formulario:
                cocheEncontrado = c; // Guardar el coche encontrado en cocheEncontrado
            }
        });

        if (cocheEncontrado) { // Comprobar que existe un coche con la matricula dada:
            errorTxt.classList.replace('visible', 'invisible'); // Ocultar mensaje de error si se ha mostrado antes

            if (alquilarODevolver.toLowerCase() === "alquilar") { // Si lo que se quiere hacer es alquilar el coche:
                if (!cocheEncontrado.fechaAlquiler) { // Si el coche encontrado no está alquilado: 
                    cocheEncontrado.alquilar(); // Alquilar el coche encontrado con la matrícula dada
                } else { // En caso contrario:
                    let errorTxt: HTMLElement = document.getElementById("error-txt"); // Texto de error para avisar de que el coche ya está alquilado
                    errorTxt.innerHTML = "Vehículo no disponible"; // Cambiar el texto del mensaje de error
                    errorTxt.classList.replace('invisible', 'visible'); // Hacer el mensaje de error visible

                    cocheEncontrado.mostrarOcultarInfo("mostrar"); // Mostrar la info del coche encontrado
                }
            } else if (alquilarODevolver.toLowerCase() === "devolver") { // Si lo que se quiere hacer es devolver el coche:
                if (cocheEncontrado.fechaAlquiler) { // Si el coche encontrado está alquilado: 
                    cocheEncontrado.devolver(); // Alquilar el coche encontrado con la matrícula dada
                } else { // En caso contrario:
                    let errorTxt: HTMLElement = document.getElementById("error-txt"); // Texto de error para avisar de que el coche no está alquilado
                    let precioTxt: HTMLElement = document.getElementById("precio-txt"); // Texto de precio para ocultarlo en caso de que esté mostrándose
                    precioTxt.classList.replace('visible', 'invisible'); // Ocultar texto de precio
                    errorTxt.innerHTML = "El vehículo no está alquilado"; // Cambiar el texto del mensaje de error
                    errorTxt.classList.replace('invisible', 'visible'); // Hacer el mensaje de error visible

                    cocheEncontrado.mostrarOcultarInfo("mostrar"); // Mostrar la info del coche encontrado
                }
            } else {
                let errorTxt: HTMLElement = document.getElementById("error-txt"); // Texto de error para avisar de que el coche no está alquilado
                errorTxt.innerHTML = "Ha ocurrido un error, inténtelo de nuevo"; // Cambiar el texto del mensaje de error
                errorTxt.classList.replace('invisible', 'visible'); // Hacer el mensaje de error visible
            }

        } else { // Si no existe el coche con esa matrícula:
            errorTxt.classList.replace('invisible', 'visible'); // Mostrar mensaje de error de que nmo existe un coche con dicha matrícula
            errorTxt.innerHTML = "Vehículo inexistente"; // Cambiar el texto del mensaje de error

            const tablaInfo: HTMLElement = document.getElementById('tabla-info'); // Tabla de información sobre el coche
            tablaInfo.classList.replace('visible', 'invisible'); // Ocultar la tabla de info si está mostrándose
        }
    }
}