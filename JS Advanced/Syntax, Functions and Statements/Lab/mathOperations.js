function mathOperation(num1, num2, str) {
   if(str == '+') {
       console.log(num1 + num2);
   }  if(str == '-') {
       console.log(num1 - num2);
   }  if(str == '*') {
       console.log(num1 * num2);
   }  if(str == '/') {
       console.log(num1 / num2);
   }  if(str == '%') {
       console.log(num1 % num2);
   }  if(str == '**') {
       console.log(num1 ** num2);
   }
}

mathOperation(5, 6, '+' );
mathOperation(3, 5.5, '*')