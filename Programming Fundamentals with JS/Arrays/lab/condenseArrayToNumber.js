function solve(input) {
    let condense = [];
 
    while(input.length > 1) {
     for(i = 0; i < input.length -1; i++) {
         condense[i] = input[i] + input[i + 1];
     }
     input = condense;
     condense = [];
    }
    console.log(input[0]);
 }
solve([2,10,3]);