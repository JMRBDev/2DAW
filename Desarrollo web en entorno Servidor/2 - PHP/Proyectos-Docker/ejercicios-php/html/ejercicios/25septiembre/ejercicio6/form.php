<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario - Jose Rosendo</title>
</head>

<body>
    <h2>Calculadora</h2>
    <form action="control.php" method="get">
        <label for="funcion">Elige una función:</label>
        <select name="funcion" id="funcion">
            <option value="sumar">Sumar</option>
            <option value="restar">Restar</option>
            <option value="multiplicar">Multiplicar</option>
            <option value="dividir">Dividir</option>
        </select>
        <br><br>
        <label for="num1">Numero 1</label>
        <input type="number" name="num1" id="num1">
        <label for="num2">Numero 2</label>
        <input type="number" name="num2" id="num2">
        <input type="submit" value="Enviar">
    </form>
</body>

</html>