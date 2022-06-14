<?php
$celsius = floatval(readline());
$fahrenheit = ($celsius * 9) / 5 + 32;

echo  number_format($fahrenheit, 2);