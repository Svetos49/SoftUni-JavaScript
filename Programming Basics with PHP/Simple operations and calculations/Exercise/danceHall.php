<?php
$length = floatval(readline());
$width = floatval(readline());
$wardrobeSide = floatval(readline());

$hallArea = ($length * 100) * ($width * 100);
$wardrobeArea = $wardrobeSide * $wardrobeSide;
$benchArea = $hallArea / 10;

$freeSpace = $hallArea - $wardrobeArea - $benchArea;
$neededDancerSpace = 7000 + 40;
$dancerCount = $freeSpace / $neededDancerSpace;

echo floor($dancerCount);