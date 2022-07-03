function solve(input) {
   let arr = [];
   for(let i = 0; i < input.length; i++) {
       let current = [input[i]];
       for(let j = i+1; j<input.length; j++) {
           if(input[i] == input[j]) {
               current.push(input[j]);
           } else{
               break;
           }
       }
       if(arr.length < current.length) {
           arr = current;
          
       }
   }
   console.log(arr.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);