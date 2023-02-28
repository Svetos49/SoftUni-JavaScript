<?php
$end = intval(readline());

for($row = 1; $row <= $end; $row++) {
    for($col = 0; $col < $row; $col++) {
        echo "$row ";
    }
   echo PHP_EOL;
}