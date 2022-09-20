function greatestCommonDivisor (num1, num2) {
     while(num2 != 0) {
         let t = num2;
         num2 = num1 % num2;
         num1 = t;
     }
     return num1;
}

// greatestCommonDivisor(15, 5)
//console.log(greatestCommonDivisor(2154, 458));
console.log(greatestCommonDivisor(14, 5));