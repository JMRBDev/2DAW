<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario - Jose Rosendo</title>
</head>
<body>
    <h2>¿Qué color prefieres cuando juegas al Ajedrez?</h2>
    <form action="control.php" method="post">
        <input type="radio" id="blanco" name="color" value="blanco">
        <label for="blanco">Blancas</label>
        <input type="radio" id="negro" name="color" value="negro" checked>
        <label for="negro">Negro</label>
        <input type="submit" value="Submit">
    </form>
</body>
</html>