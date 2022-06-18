<?php
//$excursionPrice = floatval(readline());
//$puzzles = intval(readline());
//$talkingDolls = intval(readline());
//$teddyBears = intval(readline());
//$minions = intval(readline());
//$trucks = intval(readline());
//
///*
// * puzzle - 2.60 lv.; talkingDoll - 3 lv.; teddyBear - 4.10 lv.;
// * minion - 8.20 lv.; truck - 2 lv.;
// */
//$sum = ($puzzles * 2.60) + ($talkingDolls * 3) + ($teddyBears * 4.10) + ($minions * 8.20) + ($trucks * 2);
//$toysCount = $puzzles + $talkingDolls + $teddyBears + $minions + $trucks;
//$discount = 0;
//if($toysCount >= 50) {
//    $discount = $sum * 0.25;
//}
//
//$totalPrice = $sum - $discount;
//$totalPrice -= $totalPrice * 0.10;
//
//if($excursionPrice <= $totalPrice) {
//    printf("Yes! %.2f lv left.", $totalPrice - $excursionPrice);
//} else {
//    printf("Not enough money! %.2f lv needed.", abs($totalPrice - $excursionPrice));
//}


$excursionPrice = floatval(readline());
$puzzles = intval(readline());
$talkingDolls = intval(readline());
$teddyBears = intval(readline());
$minions = intval(readline());
$trucks = intval(readline());

/*
 * puzzle - 2.60 lv.; talkingDoll - 3 lv.; teddyBear - 4.10 lv.;
 * minion - 8.20 lv.; truck - 2 lv.;
 */
$sum = ($puzzles * 2.60) + ($talkingDolls * 3) + ($teddyBears * 4.10) + ($minions * 8.20) + ($trucks * 2);
$toysCount = $puzzles + $talkingDolls + $teddyBears + $minions + $trucks;

if ($toysCount >= 50) {
    $sum *= 0.75;
}
$sum *= 0.90;

if ($sum >= $excursionPrice) {
    printf("Yes! %.2f lv left.", ($sum - $excursionPrice));
} else {
    printf("Not enough money! %.2f lv needed.", abs($sum - $excursionPrice));
}