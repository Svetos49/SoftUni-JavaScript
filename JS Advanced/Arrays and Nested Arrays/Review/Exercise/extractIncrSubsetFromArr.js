function extractIncrSubsetFromArr(arr) {
     let out = [];
   let bigNum = Number.MIN_SAFE_INTEGER;
//    arr.forEach(el => {
//        if(el >= bigNum) {
//            bigNum = el;
//            out.push(bigNum);
//        } 
//    });

//   const result = arr.filter(n => {
//       if(n >= bigNum) {
//           bigNum = n;
//           return true
//       }
//       return false
//   })
//    return result;

    // arr.reduce((acc, curr) => {
    //     if(curr >= bigNum) {
    //         bigNum = curr;
    //         acc.push(curr);
    //     }
    //     return acc;
    // }, out);
    // return out;

   return arr.reduce((acc, curr) => {
       if(curr >= acc[acc.length - 1] || acc.length == 0) {
           acc.push(curr);
       }
       return acc;
    }, []);
}

console.log(extractIncrSubsetFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
extractIncrSubsetFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);