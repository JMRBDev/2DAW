/**
 * Aclaración de algunas decisiones que he tomado:
 * - En este ejercicio he decidido crear la tabla en el HTML para que sobrecargar el JavaScript y que no sea todo un lío de "createElement()",
 *   pero el elemento "td" sí lo he creado aquí porque he pensado que quedaría más completo que hacerlo con "innerHTML", aunque también
 *   se podría hacer de esa manera.
 */

const inputs = document.getElementsByClassName('input'); // Todos los inputs
const celdasTabla = document.getElementsByClassName('celdas-tabla'); // Todas las celdas de la tabla
const tablaBody = document.getElementById('tabla-body'); // Cuerpo de la tabla

const enviar = () => {
    const nuevaFila = document.createElement('tr'); // Crear una fila nueva
    for (let i = 0; i < inputs.length; i++) { // Iterar sobre todos los inputs:
        const nuevaCelda = document.createElement('td'); // Crear una celda nueva
        nuevaCelda.innerHTML = `<p>${inputs[i].value}</p>`; // Añadir como valor de la celda el valor del input iterado
        nuevaFila.appendChild(nuevaCelda); // Añadir la nueva celda a la nueva fila

        inputs[i].value = null; // Vaciar el input iterado
    }

    tablaBody.appendChild(nuevaFila); // Añadir la nueva fila al cuerpo de la tabla
}