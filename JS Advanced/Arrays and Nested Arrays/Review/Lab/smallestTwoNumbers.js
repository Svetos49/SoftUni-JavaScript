function smallestTwoNumbers(arr) {
   let sortedArr = arr.sort((a, b) => a - b);
   let twoSmallestNum = '';
    for(let i = 0; i < 2; i++) {
        twoSmallestNum += sortedArr[i] + ' ';
    }
    console.log(twoSmallestNum);
}

smallestTwoNumbers([30, 15, 50, 5]);