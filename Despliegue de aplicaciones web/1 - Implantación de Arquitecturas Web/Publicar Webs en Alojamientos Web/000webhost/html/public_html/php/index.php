<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Jose Rosendo</title>
    <script src="./js/main.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>

<body>
    <!-- Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 mb-5">
        <a class="navbar-brand" href="#">Jose Rosendo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Inicio</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="./php/index.php">PHP <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://jotahacksyt5.wixsite.com/joserosendo">Sitio en Wix</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Fin Bootstrap -->

    <!-- PHP -->
    <div class="col">
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
    </div>
    <!-- Fin PHP -->
    
    <footer class="bg-dark fixed-bottom">
        <div class="text-white footer-copyright text-center py-3">Hecho con <p class="badge badge-light">🖤</p> por
            <a class="badge badge-light" href="https://jmrbdev.github.io/" target="_blank"> Jose Rosendo</a>
        </div>
    </footer>
</body>

</html>