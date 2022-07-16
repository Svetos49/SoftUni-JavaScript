function solve(num) {
  let sum = 1;
  for(let i = 2; i <= num / 2; i++) {
       if(num % i == 0) {
          sum += i;
       }
  }
  return  sum == num ? "We have a perfect number!" : "It's not so perfect.";
}

console.log(solve(28));
solve(28);