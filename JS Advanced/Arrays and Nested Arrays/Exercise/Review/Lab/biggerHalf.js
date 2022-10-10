function biggerHalf(arr) {
    
    let sorted = arr.sort((a, b) => a - b);
    let indexHalf = Math.floor(arr.length / 2);
 
    const result = sorted.slice(indexHalf);
    return result
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
biggerHalf([3, 19, 14, 7, 2, 19, 6]);