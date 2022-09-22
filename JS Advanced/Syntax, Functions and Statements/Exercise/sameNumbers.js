function sameNumbers(input) {
  let sum = 0;
  let numInput = input.toString();
  let isSame = true;
//   for(let i = 0; i < numInput.length -1; i++) {

//        if(numInput[i] == numInput[i + 1]) {
//            result = 'true';
//        } else {
//            result = 'false';
//          break;
        
//        }
//   }  
//        console.log(result);
//       for(let line of numInput) {
//            line = Number(line);
//           sum += line;
//       }
//       console.log(sum);
  for(let i = 0; i < numInput.length; i++) {
      let current = Number(numInput[i]);
      let next = numInput[i + 1];
      if(numInput[i] != numInput[i + 1] && next != undefined) {
          isSame = false;
      }
      sum += current;
  }
     return  `${isSame}\n${sum}`;
}

 
 console.log(sameNumbers(1234));
