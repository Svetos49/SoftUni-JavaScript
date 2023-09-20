<?php
$number = intval(readline());
$bonus = 0;

if ($number <= 100) {
    $bonus = 5;
} else if ($number <= 1000) {
    $bonus = 0.2 * $number;
} else {
    $bonus = 0.1 * $number;
}

if ($number % 2 == 0) {
    $bonus += 1;
} else if ($number % 10 == 5) {
    $bonus += 5;
}

echo $bonus . "<br>";
echo $number + $bonus;
$name = "Ivan";
echo $name;
