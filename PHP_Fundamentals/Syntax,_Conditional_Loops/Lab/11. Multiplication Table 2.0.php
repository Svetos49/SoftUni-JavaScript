<?php
$num = intval(readline());
$multiplier = intval(readline());

do {
  echo "$num X $multiplier = ".$num*$multiplier.PHP_EOL;
  $multiplier++;
} while ($multiplier <= 10);