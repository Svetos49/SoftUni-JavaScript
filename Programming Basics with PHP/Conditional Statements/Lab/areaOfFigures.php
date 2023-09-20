<?php
$figure = readline();
$result = 0;

switch ($figure) {
    case 'square': $side = floatval(readline());
        $result = $side * $side;
        break;
    case 'rectangle': $side = floatval(readline());
        $side1 = floatval(readline());
        $result = $side * $side1;
        break;
    case 'circle': $side = floatval(readline());
        $result = pi() * $side * $side;
        break;
    case 'triangle': $side = floatval(readline());
        $side1 = floatval(readline());
        $result = $side * $side1 / 2;
        break;

}

echo number_format($result, 3);