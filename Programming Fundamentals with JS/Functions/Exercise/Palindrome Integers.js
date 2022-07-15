function solve(input) {
   
  for(let line of input) {
    let isTrue = true;
      line = line.toString();
      for(let i = 0; i < line.length/2; i++) {
          if(line[i] !== line[line.length -1 - i]) {
               isTrue = false;
               break;
          }
      }
       if(isTrue) {
           console.log(true);
       } else {
           console.log(false);
       }
  }
}

solve([123,323,421,121]);