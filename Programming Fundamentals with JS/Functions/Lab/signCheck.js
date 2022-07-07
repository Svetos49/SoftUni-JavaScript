function solve(n1, n2, n3) {
  let negativNums = 0;
   if(isNegative(n1)) {
     negativNums++
   } 
   if(isNegative(n2)) {
       negativNums++;
   }
   if(isNegative(n3)) {
       negativNums++;
   }

   if(negativNums % 2 == 0) {
       console.log('Positive');
   } else {
       console.log('Negative');
   }
  
   function isNegative(n) {
      return n < 0;
  }
}

solve(5, 12, -15);