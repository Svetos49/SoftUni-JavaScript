function diagonalAttack(input) {
   let matrix = [];

   while(input.length > 0) {
       matrix.push(input.shift().split(' ').map(Number));
   }
   let primaryDiagSum = 0;
   let secondaryDiagSum = 0;

   for(let i = 0; i < matrix.length; i++) {
       primaryDiagSum += matrix[i][i];
       secondaryDiagSum += matrix[i][matrix.length - 1 - i];
   }
   if(primaryDiagSum == secondaryDiagSum) {
       for(let i = 0; i < matrix.length; i++) {
           for(let j = 0; j < matrix.length; j++) {
               if((j !== matrix.length - 1 - i) && (j !== i)) {
                   matrix[i][j] = primaryDiagSum;
               }
           }
       }
   }

   for(let i = 0; i < matrix.length; i++) {
       console.log(matrix[i].join(' '));
   }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])