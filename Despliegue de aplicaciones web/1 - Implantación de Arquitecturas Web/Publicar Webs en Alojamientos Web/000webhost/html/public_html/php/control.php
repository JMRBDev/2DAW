<!DOCTYPE html>
<body>
    <?php
        $funcion = $_GET['funcion'];
        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];

        function sumar($num1, $num2) {
            return $num1 + $num2;
        }

        function restar($num1, $num2) {
            return $num1 - $num2;
        }

        function multiplicar($num1, $num2) {
            return $num1 * $num2;
        }

        function dividir($num1, $num2) {
            return $num1 / $num2;
        }

        print("El resultado es: " . $funcion($num1, $num2));
    ?>
</body>
</html>