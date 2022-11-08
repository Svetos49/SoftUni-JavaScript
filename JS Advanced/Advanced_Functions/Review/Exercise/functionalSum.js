function functionalSum(num) {
     let sum = 0;
  
   function inner(numb) {
       sum += numb;
       return inner;

   }
   inner.toString = () => {
       return sum;
   };
   return inner(num)
}


let a = functionalSum(1)(6)(-3);
console.log(a.toString());



