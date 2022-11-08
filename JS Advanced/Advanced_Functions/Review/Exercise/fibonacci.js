function fibonacci() {
   let prev = 1;
   let cur = 0;

   function inner() {
     let next = prev + cur;
     prev = cur;
     cur = next;
     return cur;
   }
    return inner;
}

fibonacci()
let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13