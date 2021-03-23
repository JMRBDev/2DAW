"use strict";
const tbody = document.getElementById('tbody');
const numeroEmpleados = document.getElementById('numero-empleados');
/* Lista de empleados */
let empleados = [];
const anadirEmpleado = () => {
    /* Se crea un empleado a partir de los datos proporcionados */
    const empleado = {
        numero: empleados.length == 0 ? 1 : empleados[empleados.length - 1].numero + 1,
        dni: prompt("DNI"),
        nombre: prompt("Nombre"),
        apellidos: prompt("Apellidos"),
    };
    /**
     * La función some devuelve el elemento que cumple la condición, en este caso devuelve el empleado que tiene el mismo dni que el introducido por el usuario.
     * En este caso, si no hay ningún empleado con el dni proporcionado, se introduce en la lista de empleados el nuevo empleado.
     * Pero en caso de que sí exista un usuario con el mismo dni, lo devolverá y pasará al else que muestra un mensaje de aviso.
    */
    if (!empleados.some((e) => e.dni === empleado.dni)) {
        empleados.push(empleado);
        numeroEmpleados.innerHTML = `${empleados.length}`;
        tbody.innerHTML +=
            `<tr id="empleado${empleado.dni}">
                <td>${empleado.numero}</td>
                <td>${empleado.dni}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellidos}</td>
            </tr>`;
    }
    else {
        alert(`El empleado ${empleado.nombre} ${empleado.apellidos} con DNI ${empleado.dni} ya existe, inténtelo de nuevo`);
    }
};
const eliminarEmpleado = () => {
    let dni = prompt("Introduzca el DNI del empleado");
    /**
     * De nuevo, si hay algún empleado con el dni proporcionado, lo devolverá y se cumplirá la condición. Por tanto, ejecutará el contenido del if.
     * Se crea un filtro que revuelve la lista de empleados, eliminando el empleado con el dni dado.
     * Se guarda la nueva lista modificada en la lista de empleados inicial.
     *
     * En caso de que no exista el empleado con el dni dado, se muestra un mensaje de aviso en el else.
     */
    if (empleados.some((e) => e.dni === dni)) {
        empleados = empleados.filter((empleado) => {
            return empleado.dni !== dni;
        });
        numeroEmpleados.innerHTML = `${empleados.length}`;
        document.getElementById(`empleado${dni}`).remove();
    }
    else {
        alert(`No existe ningún empleado con DNI ${dni}, inténtelo de nuevo`);
    }
};
const modificarEmpleado = () => {
    let dni = prompt("Introduzca el DNI del empleado");
    /**
     * Se repite la misma fórmula, si hay algún empleado con el dni proporcionado, se devuelve y se cumple la condición. Por tanto, se ejecuta el contenido del if.
     * En cuyo caso se guarda el empleado a modificar en la constante "empleado" para modificarlo posteriormente.
     */
    if (empleados.some((e) => e.dni === dni)) {
        const empleado = empleados.filter((empleado) => {
            return empleado.dni === dni;
        })[0];
        /**
         * Por cada atributo del elemento "empleado", se mira si la propiedad es "numero", en cuyo caso se quedará tal y como está ya que el usuario no puede modificar el número de los empleados.
         * Se mira si la propiedad es "dni", en cuyo caso se pide repetidamente un nuevo dni hasta que se introducza uno que no esté duplicado. Aunque en caso de NO querer modificar el dni, se deja el campo vacío y automáticamente se queda como estaba.
         * En caso de que el atributo no sea "número" ni "dni", se pide la nueva propiedad, pero si se deja vacía se entiende que no se quiere modificar y se deja como estaba.
         */
        for (let propiedad in empleado) {
            if (propiedad === "numero") {
                empleado[propiedad] = empleado[propiedad];
            }
            else if (propiedad === "dni") {
                while (true) {
                    let nuevoValor = prompt(`Introduzca el ${propiedad}`);
                    if (!empleados.some((e) => e.dni === nuevoValor)) {
                        empleado[propiedad] = nuevoValor || empleado[propiedad]; // Usa el nuevo dni, o deja el que estaba en caso de que se deje vacío.
                        break;
                    }
                    else {
                        alert(`Ya existe un empleado con DNI ${nuevoValor} ya existe, inténtelo de nuevo`);
                    }
                }
            }
            else {
                const nuevoValor = prompt(`${propiedad}`);
                empleado[propiedad] = nuevoValor || empleado[propiedad]; // Usa el nuevo atributo, o deja el que estaba en caso de que se deje vacío.
            }
        }
        /**
         * Modificar la fila correspondiente de la tabla empleados para mostrar los nuevos datos.
         */
        document.getElementById(`empleado${dni}`).innerHTML =
            `<td>${empleado.numero}</td>
                <td>${empleado.dni}</td>
                <td>${empleado.nombre}</td>
                <td>${empleado.apellidos}</td>`;
        document.getElementById(`empleado${dni}`).id = `empleado${empleado.dni}`;
    }
    else {
        alert(`No existe ningún empleado con DNI ${dni}, inténtelo de nuevo`);
    }
};
