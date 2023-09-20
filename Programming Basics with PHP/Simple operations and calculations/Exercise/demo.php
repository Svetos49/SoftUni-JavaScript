<?php
$whiskeyPrice = floatval(readline());
$beerQuantity = floatval(readline());
$wineQuantity = floatval(readline());
$rakiaQuantity = floatval(readline());
$whiskeyQuantity = floatval(readline());

$rakiaPrice = $whiskeyPrice / 2;
$winePrice = $rakiaPrice * 0.6;
$beerPrice = $rakiaPrice * 0.2;

$whiskeySum = $whiskeyPrice * $whiskeyQuantity;
$beerSum = $beerPrice * $beerQuantity;
$wineSum = $winePrice * $wineQuantity;
$rakiaSum = $rakiaPrice * $rakiaQuantity;

$finalSum = $wineSum + $beerSum + $wineSum + $rakiaSum;
echo number_format($finalSum, 2, '.', '');