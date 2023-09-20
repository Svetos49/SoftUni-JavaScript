<?php
$speed = floatval(readline());


if($speed <= 10) {
    echo "slow";
} else if($speed <= 50){
    echo "average";
} else if($speed <=150) {
    echo "fast";
} else if($speed <= 1000) {
    echo "ultra fast";
} else {
    echo "extremely fast";
}