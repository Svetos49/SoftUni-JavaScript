<?php
$length = floatval(readline());
$width = floatval(readline());
$aquariumHeight = floatval(readline());
$percent = floatval(readline());

$capacity = $length * $width * $aquariumHeight;
$totalLiters = $capacity * 0.001;
$calculatedPercent = $percent * 0.01;
$litersNeeded = $totalLiters * (1 - $calculatedPercent);

echo sprintf('%0.3f', $litersNeeded);