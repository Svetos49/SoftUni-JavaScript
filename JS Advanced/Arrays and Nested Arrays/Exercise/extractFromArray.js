function extractFromArray(arr) {
//    let result = [];
//    for(let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if(num >= result[result.length - 1] || result.length == 0) {
//             result.push(num);
//         }
//    }
//    return result;

  return arr.reduce(function(acc, c, i) {
       if(c >= acc[acc.length -1] || acc.length == 0) {
          acc.push(c);
       }
       return acc;
  }, []);
}

extractFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
console.log(extractFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));