<?php
 $input = readline();
 $sum = 0;
 while ($input !=='Start') {
     if($input == "0.1" || $input == "0.2" || $input == "0.5" || $input == "1" || $input == "2") {
         $sum += floatval($input);
     } else {
         echo "Cannot accept ".$input.PHP_EOL;
     }
     $input = readline();
 }

$price = 0;
 $input = readline();
while ($input !=='End') {
 //"Nuts", "Water", "Crisps", "Soda", "Coke". The prices are: 2.0, 0.7, 1.5, 0.8, 1.0
     switch ($input) {
         case 'Nuts': $price = 2.0; break;
         case 'Water': $price = 0.7; break;
         case 'Crisps': $price = 1.5; break;
         case 'Soda': $price = 0.8; break;
         case 'Coke': $price = 1.0; break;
         default: echo 'Invalid product'.PHP_EOL;
         break;
     }

     if($sum < $price) {
         echo "Sorry, not enough money".PHP_EOL;
     } else if($price !== 0){
         echo "Purchased ".strtolower($input).PHP_EOL;
         $sum -= $price;
     }

    $input = readline();
}
printf("Change: %.2f", $sum);