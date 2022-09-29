function greatestCommonDivsor(num1, num2) {
     while(num2 != 0) {
         let t = num2;
         num2 = num1 % num2; 
         num1 = t;
     }
     return num1;
}
console.log(greatestCommonDivsor(2154, 458));
greatestCommonDivsor(15, 5)