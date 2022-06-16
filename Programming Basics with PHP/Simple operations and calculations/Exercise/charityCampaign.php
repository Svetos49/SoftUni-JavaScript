<?php
$cakePrice = 45;
$wafflePrice = 5.80;
$pancakePrice = 3.20;

$days = intval(readline());
$bakersCount = intval(readline());

$cakesCount = intval(readline());
$wafflesCount = intval(readline());
$pancakeCount = intval(readline());

$cakesSum = $cakesCount * $cakePrice;
$wafflesSum = $wafflesCount * $wafflePrice;
$pancakesSum = $pancakeCount * $pancakePrice;

$totalDaySum = ($cakesSum + $wafflesSum + $pancakesSum) * $bakersCount;
$allSum = $totalDaySum * $days;
$finalSum = $allSum - ($allSum / 8);

echo  number_format($finalSum, 2, '.', '');
