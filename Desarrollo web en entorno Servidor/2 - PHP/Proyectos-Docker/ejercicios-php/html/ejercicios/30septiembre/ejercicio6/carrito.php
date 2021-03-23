<?php

$carrito = [];
// DUDA: Cómo acceder a $carrito desde la función. PHP da error de que $carrito es un String y no un Array.

function anadirAlCarrito($item_id)
{
    global $carrito;
    if (in_array($carrito, $item_id)) {
        print("Ya esta en carrito");
    } else {
        print("Ya esta en carrito");
    }
}
