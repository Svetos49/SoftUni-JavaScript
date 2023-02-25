<?php
 $num = intval(readline());

 if($num % 10 == 0) {
     echo 'The number is divisible by 10';
 } elseif ($num % 7 == 0) {
     echo 'The number is divisible by 7';
 } else if($num % 6 == 0) {
     echo 'The number is divisible by 6';
 } else if($num % 3 == 0) {
     echo 'The number is divisible by 3';
 } else if($num % 2 == 0) {
     echo 'The number is divisible by 2';
 } else {
     echo 'Not divisible';
 }
