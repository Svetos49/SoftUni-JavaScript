function solve(input) {
    let leftSum = 0;
    let rightSum = 0;

for(let i = 0; i < input.length; i++) {
     leftSum = 0;
     rightSum = 0;
    if(i != 0) {
      for(let l = 0; l < i; l++) {
          leftSum += input[l];
      }
    }
    if(i < input.length - 1) {
      for(let r = i + 1; r < input.length; r++) {
          rightSum += input[r]
      }
    }
    if(leftSum == 0 && rightSum == 0 ) {
        console.log(0);
        break;

    } else if(leftSum == rightSum) {
        console.log(i);
        break;
        
    } 

}
if(leftSum !== rightSum) {
    console.log('no');
}
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

