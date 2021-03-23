const lista = [5, 200, 456, 78, 9621, -123, -54564];
const resultado = document.getElementById('resultado');

// Se usa .apply porque Math.min() y Math.max() no saben trabajar con arrays
resultado.innerText = "El número mínimo es: " + (Math.min.apply(null, lista)) + " y el número máximo es: " + (Math.max.apply(null, lista));