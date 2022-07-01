function solve(input) {
   
    let result = [];
    for(let i = 0; i < input.length; i++) {
      let isBigger = true;
      for(let j = i + 1; j < input.length; j++) {
        
        input[i] = Number(input[i]);
        input[j] = Number(input[j]);
          if(input[i] <= input[j]) {
            isBigger = false;
            break;
          } 
      }
      if(isBigger) {
         result.push(input[i])
      }
    }
     console.log(result.join(' '));
}

solve([14, 24, 3, 19, 15, 17]);