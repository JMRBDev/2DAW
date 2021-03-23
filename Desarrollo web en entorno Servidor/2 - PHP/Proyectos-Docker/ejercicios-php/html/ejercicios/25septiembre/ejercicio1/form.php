<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario - Jose Rosendo</title>
</head>
<body>
    <h2>¿Cual(es) pieza(s) tiene(n) un valor relativo de 5 puntos?</h2>
    <form action="control.php" method="get">
        <input type="checkbox" name="piezas[]" value="peon">Peon
        <input type="checkbox" name="piezas[]" value="caballo" checked>Caballo
        <input type="checkbox" name="piezas[]" value="alfil">Alfil
        <input type="checkbox" name="piezas[]" value="torre">Torre
        <input type="checkbox" name="piezas[]" value="reina">Reina
        <input type="checkbox" name="piezas[]" value="rey">Rey
        <input type="submit" value="Submit">
    </form>
</body>
</html>