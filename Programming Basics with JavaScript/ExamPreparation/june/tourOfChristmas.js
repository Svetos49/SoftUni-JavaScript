function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);
   let command = input[index++];
   let allSum = 0;
  
   
   let counter = 0;
  for(let i = 0; i < days; i++) {
    let counterW = 0;
    let counterL = 0;
    let sum = 0;
       while(command != 'Finish') {
           let sport = command;
         let result = input[index++];
           if(result == 'win') {
               sum += 20;
               counterW++;
           } else{
               counterL++;
           }
           
           command = input[index++];
       }
         if(counterW > counterL) {
             sum *= 1.10;
             counter++;
         }
         allSum += sum;
         command = input[index++];
  }
       if((counter / days) > 0.50) {
           allSum *= 1.20;
           console.log(`You won the tournament! Total raised money: ${allSum.toFixed(2)}`);
       } else {
           console.log(`You lost the tournament! Total raised money: ${allSum.toFixed(2)}`);
       }
   
}

tournamentOfChristmas([
    '2',         'volleyball',
    'win',       'football',
    'lose',      'basketball',
    'win',       'Finish',
    'golf',      'win',
    'tennis',    'win',
    'badminton', 'win',
    'Finish'
  ]);