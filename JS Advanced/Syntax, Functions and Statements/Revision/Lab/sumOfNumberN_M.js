function sumOfNumbersN_M(n, m) {
   let num1 = Number(n);
   let num2 = Number(m);
   let sum = 0;
   for(let i = num1; i <= num2; i++) {
       sum += i;
   }
   return sum;
}
console.log(sumOfNumbersN_M('1', '5'));

sumOfNumbersN_M('1', '5');