<?php
$people = intval(readline());
$capacity = intval((readline()));

$courses = ceil($people / $capacity);
echo $courses;
//$courses =$people / $capacity;
//if($people % $capacity == 0) {
//    echo $courses;
//} else {
//    echo floor($courses + 1);
//}
