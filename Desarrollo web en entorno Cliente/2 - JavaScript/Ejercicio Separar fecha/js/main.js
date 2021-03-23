let resultado = document.getElementById("resultado");

function separarFecha() {
    let fecha = document.getElementById("fecha").value;
    let fecha_list = fecha.split("/");
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    if (fecha_list.length == 3) { // Comprobar que solo hayan día, mes y año, que no haya otro módulo en la fecha con otra barra (dd/mm/aaaa)
        if (fecha_list[0] > 0 && fecha_list[0] < 32) { // Comprobar que el día está entre 1 y 31
            resultado.innerHTML = "<p>El día es: " + fecha_list[0] + "</p>";
            if (fecha_list[1] > 0 && fecha_list[1] < 13) { // Comprobar que el mes está entre 1 y 12
                resultado.innerHTML += "<p>El mes es: " + meses[fecha_list[1] - 1] + "</p>";
                if (fecha_list[2] > 0) { // Comprobar que el año es positivo
                    resultado.innerHTML += "<p>El año es: " + fecha_list[2] + "</p>";
                } else { // Dar error si el año es erróneo
                    resultado.innerHTML = "<p>El año " + fecha_list[2] + " no es correcto</p>";
                }
            } else { // Dar error si el mes es erróneo
                resultado.innerHTML = "<p>El mes " + fecha_list[1] + " no es correcto</p>";
            }
        } else { // Dar error si el día es erróneo
            resultado.innerHTML = "<p>El día " + fecha_list[0] + " no es correcto</p>";
        }
    } else { // Dar error si el formato tiene más módulos con más barras que los necesarios
        resultado.innerHTML = "<p>El formato de " + fecha + " no es correcto</p>";
    }
}