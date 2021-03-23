<?php

if (isset($_COOKIE['contador'])) {
    setcookie('contador', $_COOKIE['contador'] + 1, time()+3600*24);
} else {
    setcookie('contador', 1, time()+3600*24);
}

echo '<h3>Has visitado esta página ' . $_COOKIE['contador'] . ' veces.</h3>'

?>