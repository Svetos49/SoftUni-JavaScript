function sortingNumbers(input) {
    let result = [];
    let sorted = input.sort((a, b) => a - b);
    
    // while(sorted.length) {
    //    result.push(sorted.shift());
    //    result.push(sorted.pop());
      
    // }
    
     for(let i = 0; i < Math.floor(sorted.length/2); i++) {
         result.push(sorted[i]);
         result.push(sorted[sorted.length - 1 - i]);
     }

    
      result = result.filter((el) => {
         return  typeof el !== 'undifined';
     })
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])