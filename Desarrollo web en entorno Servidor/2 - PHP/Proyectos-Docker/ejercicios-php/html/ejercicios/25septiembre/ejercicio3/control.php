<!DOCTYPE html>
<body>
    <?php
        $numero = $_GET['numero'];
        do {
            $resultado = $i*$numero;
            print("$i x $numero = $resultado <br>");
            $i++;
        }
        while ($i <= 10);
    ?>
</body>
</html>