function negativeOrPositiveNumbers(input) {
    input = input.map(Number);
   let arr = [];
   for(let i = 0; i < input.length; i++) {
       if(input[i] >= 0) {
           arr.push(input[i]);
       } else {
           arr.unshift(input[i]);
       }
   }
   console.log(arr.join('\n'));
}

negativeOrPositiveNumbers(['3', '-2', '0', '-1']);