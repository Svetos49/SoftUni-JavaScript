<?php
$password = "s3cr3t!P@ssw0rd";
$line = readline();

if($password == $line) {
    echo "Welcome";
} else {
    echo 'Wrong password!';
}