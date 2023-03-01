<?php
$user = readline();
$length = strlen($user);
$pass = '';
//$pass = strrev($user);
for($i = $length - 1; $i >= 0; $i--) {
//    if(ctype_digit($user[$i])) {
//        continue;
//    }
    $pass .= $user[$i];
}

$attempts = 0;
while ($attempts++ <= 5) {
    $input = readline();
    if($input === $pass) {
        echo "User $user logged in.".PHP_EOL;
        break;
    }
    if($attempts === 4) {
        echo "User $user blocked!".PHP_EOL;
        break;
    } else {
        echo "Incorrect password. Try again.".PHP_EOL;
    }
}