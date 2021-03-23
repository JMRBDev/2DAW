<!DOCTYPE html>
<body>
    <?php
        $numero = $_GET['numero'];
        for ($i = 0; $i <= 10; $i++) {
            $resultado = $i*$numero;
            print("$i x $numero = $resultado <br>");
        }
    ?>
</body>
</html>