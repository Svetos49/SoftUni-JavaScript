function numberPyramid(input) {
  let num = Number(input[0]);
  let line = '';
  let isBiggerNum = false;
  let current = 1;
   for(let i = 1; i <= num; i++) {
       for(let j = 1; j <= i ; j++) {
           if(current > num) {
             isBiggerNum = true;
             break;
           }
           line += current + ' ';
           current++;
       }
       console.log(line);
       line = '';
       if(isBiggerNum) {
           break;
       }
   }

}

numberPyramid(['1']);