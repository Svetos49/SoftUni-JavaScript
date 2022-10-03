function diagonalSums(input) {
   let firstDiagonal = 0;
   let secondDiagonal = 0;
   let firstIndex = 0;
   let secondIndex = input[0].length -1;

//    input.forEach(array => {
//        firstDiagonal += array[firstIndex++];
//        secondDiagonal += array[secondIndex--];
//    });
  for(let i = 0; i < input.length; i++) {
          firstDiagonal += input[i][i];
          secondDiagonal += input[i][input.length - i - 1];
  }  

   console.log(`${firstDiagonal} ${secondDiagonal}`);
}

diagonalSums([[20, 40], [10, 60]])