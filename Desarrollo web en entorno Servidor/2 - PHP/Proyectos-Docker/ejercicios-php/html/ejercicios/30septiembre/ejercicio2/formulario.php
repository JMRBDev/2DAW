<?php
    $numero = $_GET['numero'] - 1;
    $dias_semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    print("<h2>$dias_semana[$numero]</h2>");
?>