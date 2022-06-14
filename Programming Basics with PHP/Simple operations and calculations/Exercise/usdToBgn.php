<?php
$usd = floatval(readline());
$bgn = 1.79546;
$result = number_format(($bgn * $usd), 2);

echo  $result;