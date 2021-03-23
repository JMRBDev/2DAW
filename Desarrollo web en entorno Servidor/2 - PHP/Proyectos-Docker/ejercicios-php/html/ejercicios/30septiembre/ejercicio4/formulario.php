<!DOCTYPE html>
<body>
    <?php
        $numero = $_GET['numero'];
        print("<table><ul>");
        for ($i = 0; $i <= 10; $i++) {
            $resultado = $i*$numero;
            print("<li>$i x $numero = $resultado</li>");
        }
        print("</ul></table>");
    ?>
</body>
</html>