<?php
$name = readline();
echo "Hello, $name!";
$greeting = sprintf("Hello, %s!", $name);

echo $greeting;
echo "Hello, " . $name . "!";

?>

<?php
$name = readline();

echo "Hello, $name!" . PHP_EOL;