<!DOCTYPE html>
<body>
    <?php
        $piezas_seleccionadas = $_REQUEST['piezas'];
        print("<h1>Se ha seleccionado </h1>");
        print("<ol>");
        foreach($piezas_seleccionadas as $pieza)
            print("<li>$pieza<br></li>");
        print("</ol>");

        if (in_array('caballo', $piezas_seleccionadas) && in_array('alfil', $piezas_seleccionadas) && sizeof($piezas_seleccionadas) == 2) {
            echo "<b>La respuesta es correcta</b>";
        } else {
            echo "<b>¡Te quié i ya!, busca en Google</b>";
        }
    ?>
</body>
</html>