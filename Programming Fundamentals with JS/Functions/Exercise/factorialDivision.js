function solve(factNum1, factNum2) {
   function facturialCalculator(num) {
    let result = 1;
     while(num != 1) {
         result *= num;
         num -= 1;
     }
     return result;
   }
   let final = facturialCalculator(factNum1) / facturialCalculator(factNum2);
   console.log(final.toFixed(2));
}

solve(5, 2);