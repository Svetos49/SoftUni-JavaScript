<?php
$radius = floatval(readline());
$area = pi()*pow($radius, 2);
echo number_format($area, 12, ".", "");
