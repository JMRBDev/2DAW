<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Librería para arrays - Jose Rosendo</title>
    <?php include './funciones_arrays.php' ?>
</head>

<body>
    <h1>Librería de funciones de Arrays</h1>
    <h2>Función generaArrayInt(longitud, min, max)</h2>
    <?php
    $random_int_array = generaArrayInt(10, 2, 20);

    foreach ($random_int_array as $key => $value) {
        print("<p>$value</p>");
    }
    ?>

    <h2>Función minimoArrayInt(array)</h2>
    <?php
    print("<p>" . minimoArrayInt($random_int_array) . "</p>");
    ?>

    <h2>Función estaEnArrayInt(array, numero)</h2>
    <?php
    $numero_a_buscar = 5;
    print("<p>" .
        (estaEnArrayInt($random_int_array, $numero_a_buscar) ?
            "$numero_a_buscar se encuentra en el Aray" :
            "$numero_a_buscar no se encuentra en el Array") .
        "</p>");
    ?>
</body>

</html>