<!DOCTYPE html>
<body>
    <?php
        $numero = $_GET['numero'];
        function generar($num) {
            for ($i = 0; $i <= $num; $i++) {
                $numero_generado = rand();
                print($numero_generado . "<br>");
            }
        }

        generar($numero);
    ?>
</body>
</html>