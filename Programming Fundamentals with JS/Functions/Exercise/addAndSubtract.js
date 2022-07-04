function solve(n1, n2, n3) {

   
   let result = subtract(sum(n1, n2), n3);
   console.log(result);

   function sum(n1, n2) {
       return n1 + n2;
   }
   function subtract(n1, n2) {
       return n1 - n2;
   }
   
}

solve(23, 6, 10);