function solve(input) {
   let arr = [];
   let inputSum = 0;
   let arrSum = 0;
   for(let i = 0; i < input.length; i++) {
         inputSum += input[i];
         if(input[i] % 2 == 0) {
             arr.push(input[i] + i);
             arrSum += arr[i];
         } else if(input[i] % 2 != 0) {
             arr.push(input[i] - i);
             arrSum += arr[i];
         }
   }
   console.log(arr);
   console.log(inputSum);
   console.log(arrSum);
}

solve([5, 15, 23, 56, 35]);