<?php

$evenNum = intval(readline());
while ($evenNum) {
    if ($evenNum % 2 == 0) {
        echo "The number is: ".abs($evenNum);
        break;
    } else {
        echo 'Please write an even number.'.PHP_EOL;
        $evenNum = intval(readline());
    }
}
