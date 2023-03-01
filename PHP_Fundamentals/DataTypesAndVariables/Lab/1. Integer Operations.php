<?php
$num1 = intval(readline());
$num2 = intval(readline());
$num3 = intval(readline());
$num4 = intval(readline());

$result = floor(($num1 + $num2) / $num3);
$result *= $num4;
echo $result;
