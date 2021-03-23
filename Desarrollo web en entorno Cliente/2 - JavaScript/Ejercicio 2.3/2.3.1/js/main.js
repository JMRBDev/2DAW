const test_form = document.getElementById('testForm');

const preguntas = ['Pregunta 1',
                   'Pregunta 2',
                   'Pregunta 3',
                   'Pregunta 4',
                   'Pregunta 5',
                   'Pregunta 6',
                   'Pregunta 7',
                ];

for (let i = 0; i < 7; i += 1) {
    let parrafo = document.createElement('p');
    parrafo.setAttribute('id', `pregunta${i}`);
    let texto_pregunta = document.createTextNode(preguntas[i]);
    
    parrafo.appendChild(texto_pregunta);
    let pregunta = test_form.appendChild(parrafo);

    test_form.appendChild(pregunta);
    
    let botonVerdadero = document.createElement('button');
    botonVerdadero.setAttribute('id', `boton${i}-verdadero`);
    botonVerdadero.setAttribute('onclick', `seleccionarRespuesta(${i}, true)`);
    botonVerdadero.innerHTML = 'Verdadero';
    test_form.appendChild(botonVerdadero);

    let botonFalso = document.createElement('button');
    botonFalso.setAttribute('id', `boton${i}-falso`);
    botonFalso.setAttribute('onclick', `seleccionarRespuesta(${i}, false)`);
    botonFalso.innerHTML = 'Falso';
    test_form.appendChild(botonFalso);
}

function seleccionarRespuesta(numeroPregunta, verdaderoOFalso) {
    console.log('Se ha seleccionado ' + numeroPregunta + ' ' + verdaderoOFalso);

    let pregunta = document.getElementById(`pregunta${numeroPregunta}`);
    pregunta.style.color = verdaderoOFalso ? '#2cde2c' : '#ed1313';
}