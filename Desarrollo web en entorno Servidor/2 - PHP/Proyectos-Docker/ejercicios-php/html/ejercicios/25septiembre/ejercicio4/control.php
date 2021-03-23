<!DOCTYPE html>
<body>
    <?php
        $numero = $_GET['numero'];
        print("<h2>El número $numero tiene " . strlen($numero) . " dígitos</h2>");
    ?>
</body>
</html>