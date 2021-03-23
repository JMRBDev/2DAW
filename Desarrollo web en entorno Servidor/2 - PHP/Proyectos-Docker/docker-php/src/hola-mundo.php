<!DOCTYPE html>
<html>

<head>
    <title>Hello World - Jose Rosendo</title>
    <style>
        .test-class {
            color: green;
        }

        table {
            border: 2px solid black;
        }

        td {
            border: 1px solid black;
            padding: 0.3rem 1rem;
        }
    </style>
</head>

<body>
    <p><?php print "Test echo" . " Hola Mundo!"; ?></p>
    <p><?php print "Test print" . " Hola Mundo!"; ?></p>
    <?php print "<h1>Se pueden usar etiquetas HTML dentro de un echo ó print de PHP</h1>" ?>
    <?php print "<h1 style='color: red;'>Se puede cambiar el estilo de la etiqueta inline</h1>" ?>
    <?php print "<h1 class='test-class'>Se puede cambiar el estilo de la etiqueta usando class ó id</h1>" ?>
    <?php include('php/mi-php.php'); ?>
    <?php
    $msg_es = "Hola Mundo!";
    $msg_en = "Hello World!";
    $lang = "es";
    // print $$msg_ . "$lang";
    ?>
    <?php
    define("CONSTANTE3", "Esto es una constante");
    print(CONSTANTE3 . "<br>");
    ?>
    <?php
    function suma($x, $y) {
        $s = $x + $y;
        return $s;
    }

    function resta($x, $y) {
        $s = $x - $y;
        return $s;
    }

    $test_suma = suma(3, 2);
    $test_resta = resta(3, 2);
    print("El valor de la suma es: " . $test_suma . "<br>");
    print("El valor de la resta es: " . $test_resta . "<br>");
    ?>
    <?php
    $mi_array = ["test1", "test2", "test3"];
    $mi_diccionario = ["primero" => "test1", "segundo" => "test2", "tercero" => "test3"];
    print("Acceder a un array por el index de su item: " . $mi_array[0]);
    print("<br>");
    print("Acceder a un diccionario (array clave-valor) por el nombre de su item: " . $mi_diccionario["primero"]);
    ?>
    <?php
    print("<table>");
    $dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for ($idx = 0; $idx < count($dias_semana); $idx++) {
        print("<td>");
        print($dias_semana[$idx]);
        print("</td>");
    }
    print("</table>");
    ?>
</body>

</html>