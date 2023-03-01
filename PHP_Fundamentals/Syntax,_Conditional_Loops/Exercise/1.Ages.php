<?php
$age = intval(readline());

if($age>=0 && $age <=2) {
    echo 'baby';
} elseif ($age>=3 && $age <= 13) {
    echo 'child';
} elseif ($age >=14 && $age <= 19) {
    echo 'teenager';
} elseif ($age >= 20 && $age <= 65) {
    echo 'adult';
} elseif ($age >= 66) {
    echo 'elder';
}
