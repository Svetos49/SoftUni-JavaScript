<?php
$r = floatval(readline());

$area = pi() * $r * $r;
$perimeter = 2 * pi() * $r;

echo round($area, 2) . PHP_EOL;
echo  round($perimeter, 2);