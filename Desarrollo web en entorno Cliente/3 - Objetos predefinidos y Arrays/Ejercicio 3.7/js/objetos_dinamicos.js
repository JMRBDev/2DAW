let nuevasVentanas = []

const gestionarVentana = (ventana) => {
    if (ventana == nuevasVentanas[0]) {
        // Botón abrir otra ventana
        let btn1 = ventana.document.createElement('button');
        let btn1Txt = ventana.document.createTextNode('Abrir nueva ventana');
        btn1.appendChild(btn1Txt);
        btn1.onclick = () => nuevaVentanaEmergente();
        ventana.document.body.appendChild(btn1);
    } else {
        // Botón cerrar ventana
        let btn2 = ventana.document.createElement('button');
        let btn2Txt = ventana.document.createTextNode('Cerrar ventana');
        btn2.appendChild(btn2Txt);
        btn2.onclick = () => { ventana.window.close(); nuevasVentanas.pop(); };
        ventana.document.body.appendChild(btn2);

        // Tabla
        let tabla = ventana.document.createElement('table');
        let tbody = ventana.document.createElement('tbody');
        let fila = ventana.document.createElement('tr');
        fila.style.border = '1px solid black';
        let columna1 = ventana.document.createElement('td');
        columna1.style.border = '1px solid black';
        let columna2 = ventana.document.createElement('td');
        columna2.style.border = '1px solid black';
        let columna3 = ventana.document.createElement('td');
        columna3.style.border = '1px solid black';
        let columna4 = ventana.document.createElement('td');
        columna4.style.border = '1px solid black';
        let columna5 = ventana.document.createElement('td');
        columna5.style.border = '1px solid black';

        // Input nombre de la primera columna
        let inputNombre = ventana.document.createElement('input');
        let inputNombreLabel = ventana.document.createElement('label');
        let nombreInput = ventana.prompt("¿Qué nombre tiene el input nombre?");
        let inputNombreLabelTxt = ventana.document.createTextNode(nombreInput);
        inputNombreLabel.setAttribute('for', nombreInput);
        inputNombre.setAttribute("type", "text");
        inputNombre.setAttribute("name", nombreInput);
        inputNombreLabel.appendChild(inputNombreLabelTxt);
        columna1.appendChild(inputNombreLabel);
        columna1.appendChild(inputNombre);

        // Input password de la segunda columna
        let inputPassword = ventana.document.createElement('input');
        let inputPasswordLabel = ventana.document.createElement('label');
        let passwordInput = ventana.prompt('¿Qué nombre tiene el input password?');
        let inputPasswordLabelTxt = ventana.document.createTextNode(passwordInput);
        inputPasswordLabel.setAttribute('for', passwordInput);
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("name", passwordInput);
        inputPasswordLabel.appendChild(inputPasswordLabelTxt);
        columna2.appendChild(inputPasswordLabel);
        columna2.appendChild(inputPassword);

        // Textarea de la tercera columna
        let textArea = ventana.document.createElement('textarea');
        let textAreaInput = ventana.prompt("¿Qué nombre tiene el textarea?");
        textArea.setAttribute("name", textAreaInput);
        textArea.setAttribute("rows", 5);
        textArea.setAttribute("cols", 40);
        columna3.appendChild(textArea);

        // Igamen de la cuarta columna
        let imagen = ventana.document.createElement('img');
        let imagenInput = ventana.prompt("¿Cuál es la ruta de la imagen?");
        imagen.setAttribute("src", imagenInput);
        columna4.appendChild(imagen);

        // Botón Submit de la quinta columna
        let submitBtn = ventana.document.createElement('input');
        let inputSubmitLabel = ventana.document.createElement('label');
        let submitInput = ventana.prompt("¿Qué nombre tiene el botón submit?");
        let inputSubmitLabelTxt = ventana.document.createTextNode(submitInput);
        inputSubmitLabel.setAttribute('for', submitInput);
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("name", nombreInput);
        submitBtn.setAttribute("value", "Enviar");
        submitBtn.setAttribute("onclick", "this.setAttribute('disabled', ''); this.setAttribute('value', 'Enviando...');");
        inputSubmitLabel.appendChild(inputSubmitLabelTxt);
        columna5.appendChild(inputSubmitLabel);
        columna5.appendChild(submitBtn);


        // Añadir la tabla a la ventana
        fila.append(columna1, columna2, columna3, columna4, columna5);
        tbody.appendChild(fila);
        tabla.appendChild(tbody);
        ventana.document.body.appendChild(tabla);
    }
}

const nuevaVentanaEmergente = () => {
    let ancho = 900;
    let alto = 300;
    let paddingIzquierda = (screen.width / 2) - (ancho / 2);
    let paddingArriba = (screen.height / 2) - (alto / 2);
    let nuevaVentana = window.open('', '', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${ancho}, height=${alto}, top=${paddingArriba}, left=${paddingIzquierda}`);
    nuevaVentana.document.title = "Nueva ventana";
    nuevasVentanas.push(nuevaVentana);
    gestionarVentana(nuevaVentana);
};

nuevaVentanaEmergente();