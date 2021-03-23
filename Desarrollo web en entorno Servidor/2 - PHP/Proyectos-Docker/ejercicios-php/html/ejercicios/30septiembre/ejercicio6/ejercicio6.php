<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda - Jose Rosendo</title>
    <link rel="stylesheet" href="./css/style.css">
    <?php include './carrito.php'?>
</head>
<body>
    <h1>Tienda</h1>
    <ul class="lista-productos">
        <li class="item-producto">
            <div class="container-producto">
                <img src="https://www.galichip.com/wp-content/uploads/2019/02/IPhone-X-Download-PNG-Image.png" alt="iPhone X">
                <h3 class="nombre-producto">iPhone X</h3>
                <p class="precio-producto">Precio: 330€</p>
                <button class="btn-comprar" onclick=<?php anadirAlCarrito("0001");?>>Agregar al carrito</button>
            </div>
        </li>
        <li class="item-producto">
            <div class="container-producto">
                <img src="https://www.galichip.com/wp-content/uploads/2019/02/IPhone-X-Download-PNG-Image.png" alt="iPhone X">
                <h3 class="nombre-producto">iPhone X</h3>
                <p class="precio-producto">Precio: 330€</p>
                <button class="btn-comprar" onclick=<?php anadirAlCarrito("0002");?>>Agregar al carrito</button>
            </div>
        </li>
        <li class="item-producto">
            <div class="container-producto">
                <img src="https://www.galichip.com/wp-content/uploads/2019/02/IPhone-X-Download-PNG-Image.png" alt="iPhone X">
                <h3 class="nombre-producto">iPhone X</h3>
                <p class="precio-producto">Precio: 330€</p>
                <button class="btn-comprar" onclick=<?php anadirAlCarrito("0003");?>>Agregar al carrito</button>
            </div>
        </li>
    </ul>
</body>
</html>