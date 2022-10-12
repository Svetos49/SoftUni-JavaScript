function lastK_NumSequens(n, k) {
   let result = [1];
   for(let i = 1; i < n; i++) {
      let lastK = result.slice(-k);
      sum = 0;
      for(let num of lastK) {
         sum += num;
      }
      result.push(sum);
   }  
   return result;
}

// function lastK_NumSequens(n, k) {
//    let result = [1];
//    for (let i = 1; i < n; i++) {
//       let sum = 0;
//       let target = i - k;
//       for (let j = i - 1; j >= target; j--) {
//          if (j < 0) {
//             break;
//          }
//          sum += result[j];
//       }
//       result.push(sum);
//    }


//    return result;
// }

// function lastK_NumSequens(n, k) {
//     let seq = [1];
//     for (let current = 1; current < n; current++) {
//         let start = Math.max(0, current - k);
//         let end = current - 1;
//         let sum = 0;
//         for (i = start; i <= end; i++) {
//             sum += seq[i];

//         }
//         if (sum > 0) {
//             seq[current] = sum;
//         }
//     }
//     return seq
// }

console.log(lastK_NumSequens(6, 3));
lastK_NumSequens(6, 3)

