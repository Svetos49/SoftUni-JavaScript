function sortingNumbers(arr) {
   arr = arr.sort((a, b) => a - b);
   let sortNum = [];
   
   while(arr.length) {
        sortNum.push(arr.shift())
        sortNum.push(arr.pop());
       
   } return sortNum;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));