<?php
$timeFirst = intval(readline());
$timeSecond = intval(readline());
$timeThird = intval(readline());

$totalTime = $timeFirst + $timeSecond + $timeThird;

$minutes = (int) ($totalTime / 60);
$seconds = (int) ($totalTime % 60);

if($seconds < 10) {
    echo "$minutes:0$seconds";
} else {
    echo "$minutes:$seconds";
}