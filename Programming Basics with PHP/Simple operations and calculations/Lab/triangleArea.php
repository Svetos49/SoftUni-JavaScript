<?php
$a = floatval(readline());
$h = floatval(readline());

$area = $a * $h / 2;

$format = number_format($area,2, '.', '');
echo $format;

#echo sprintf('%0.2f', $area);