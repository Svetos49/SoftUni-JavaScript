<?php
$groupCount = intval(readline());
$groupType =readline();
$day = readline();
$pricePerNight = 0;

switch ($groupType) {
    case 'Students':
        if($day == 'Friday') {
            $pricePerNight = 8.45;
        } else if($day == 'Saturday') {
            $pricePerNight = 9.80;
        } else if($day == 'Sunday') {
            $pricePerNight = 10.46;
        }
        break;
    case 'Business':
        if($day == 'Friday') {
            $pricePerNight = 10.90;
        } else if($day == 'Saturday') {
            $pricePerNight = 15.60;
        } else if($day == 'Sunday') {
            $pricePerNight = 16;
        }
        break;
    case 'Regular':
        if($day == 'Friday') {
            $pricePerNight = 15;
        } else if($day == 'Saturday') {
            $pricePerNight = 20;
        } else if($day == 'Sunday') {
            $pricePerNight = 22.50;
        }
        break;
}

if($groupType == 'Business' && $groupCount >= 100) {
    $groupCount -= 10;
}
$total = $pricePerNight * $groupCount;
if($groupType == 'Students' && $groupCount >= 30) {
    $total *= 0.85;
}
if($groupType == 'Regular' && $groupCount >= 10 && $groupCount <= 20) {
    $groupCount *= 0.95;
}

$formatted = number_format($total, 2, ".", "");

echo "Total price: $formatted";