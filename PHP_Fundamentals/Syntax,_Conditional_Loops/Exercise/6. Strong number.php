<?php
$number = readline();
$sumFactorial = 0;
for($i = 0; $i < strlen($number); $i++) {

    $currentFactorial = 1;
   for($n = $number[$i]; $n >= 1; $n--) {
       $currentFactorial *= $n;
   }
   $sumFactorial += $currentFactorial;
}

echo ($number == $sumFactorial)  ? 'yes': 'no';