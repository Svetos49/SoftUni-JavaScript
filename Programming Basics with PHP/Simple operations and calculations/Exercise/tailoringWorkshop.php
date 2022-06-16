<?php
$tables = floatval(readline());
$tableLength = floatval(readline());
$tableWidth = floatval(readline());

$coversArea = $tables * ($tableLength + 2 * 0.30) * ($tableWidth + 2 * 0.30);
$squaresArea = $tables * ($tableLength / 2) * ($tableLength / 2);

$priceInDollars = $coversArea * 7 + $squaresArea * 9;
$priceInLeva = $priceInDollars * 1.85;

printf("%.2f" . ' USD' . PHP_EOL, $priceInDollars);
printf("%.2f" . ' BGN', $priceInLeva);