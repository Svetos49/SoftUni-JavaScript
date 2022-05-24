function accountBalance(input) {
   let n = input[0];
   let index = 1;
   let sum = 0;
   while(n != 'NoMoreMoney') {
       n = Number(n);
       if(n < 0) {
           console.log('Invalid operation!');
           break;
       }
       sum += n;
    console.log(`Increase: ${n.toFixed(2)}`);
      n = (input[index]);
      index++;
     
   }
   console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(['5.51', '69.42', '-100', 'NoMoreMoney']);