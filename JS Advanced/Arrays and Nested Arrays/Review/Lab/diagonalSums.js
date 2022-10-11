function diagonalSums(arr) {
    let firstDiagSum = 0;
    let secondDiagSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let lastElArr = arr.length - 1;
        secondDiagSum += arr[i][lastElArr - i];
        firstDiagSum += arr[i][i];

    }
    console.log(`${firstDiagSum} ${secondDiagSum}`);
}

diagonalSums([[20, 40],
              [10, 60]]);

function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;

    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}    

diagonalSums([[20, 40],
              [10, 60]]);