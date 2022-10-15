function magicMatrices(input) {
   let sum = input[0].reduce((a, b) => a + b);
   
   for(let i = 0; i < input[0].length; i++) {
       let colSum = 0;
       for(let j = 0; j < input.length; j++) {
            colSum += input[j][i];
       }
       if(sum !== colSum) {
           return false;
       }
   }
    return true;
}

console.log(magicMatrices([[4, 5, 6],
                           [6, 5, 4],
                           [5, 5, 5]]));
magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]])