function vowelsSum(input) {
   let word = input[0];
   let sum = 0;
   for(let i = 0; i < word.length; i++) {
       let lett = word[i];
       if(lett == 'a' ) {
         sum += 1;
       } else if(lett == 'e') {
           sum += 2;
       } else if(lett == 'i') {
           sum += 3;
       } else if(lett == 'o') {
           sum += 4;
       } else if(lett == 'u') {
           sum += 5;
       }
   }
   console.log( sum);
}

vowelsSum(['hello'])