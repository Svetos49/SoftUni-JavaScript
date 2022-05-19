function equalSumsEOP(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  
  let line = "";
  for(let i = n1; i <= n2; i++) {
      let currentNum = '' + i;
      let evenNum = 0;
      let oddNum = 0; 
      for(let j = 0; j < currentNum.length; j++) {
          let currentI = Number(currentNum[j]);
          if(j % 2 == 0) {
              evenNum += currentI;
          } else  {
              oddNum += currentI;
          }
      }
      if(evenNum == oddNum) {
          line += `${i} `;
      }
  }
  console.log(line);
}

equalSumsEOP(['100000', '100050'])