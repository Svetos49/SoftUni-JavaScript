function processOddPositions(arr) {
    let result = [];
   for(let i = 1; i < arr.length; i += 2 ) {
         result.unshift(arr[i] * 2);
   }
   return result.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
processOddPositions([10, 15, 20, 25]);