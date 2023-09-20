<?php
$x1 = floatval(readline());
$y1 = floatval(readline());
$x2 = floatval(readline());
$y2 = floatval(readline());

$a = abs($x1 - $x2);
$b = abs($y1 - $y2);

$area = number_format(($a * $b), 2, '.', '');
$perimeter = 2 * $a + 2 * $b;


echo $area . PHP_EOL;

printf("%.2f", $perimeter);

