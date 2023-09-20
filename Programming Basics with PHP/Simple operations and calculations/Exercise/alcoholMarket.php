<?php
$whiskeyPrice = floatval(readline());
$beerQuantity = floatval(readline());
$wineQuantity = floatval(readline());
$rakiaQuantity = floatval(readline());
$whiskeyQuantity = floatval(readline());

$rakiaPrice = $whiskeyPrice / 2 ;
$winePrice = $rakiaPrice * 0.6;
$beerPrice = $rakiaPrice * 0.2;

$sumRakia = $rakiaQuantity * $rakiaPrice;
$sumWine = $wineQuantity * $winePrice;
$sumBeer = $beerQuantity * $beerPrice;
$sumWhiskey = $whiskeyQuantity * $whiskeyPrice;


$allSum = $sumBeer + $sumRakia + $sumWine + $sumWhiskey;
echo number_format($allSum, 2, '.', '');