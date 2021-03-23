<?php

session_start();

if (isset($_SESSION['contador'])) {
    $_SESSION['contador'] += 1;
} else {
    $_SESSION['contador'] = 1;
}

echo '<h3>Has visitado esta página ' . $_SESSION['contador'] . ' veces.</h3>'

?>