function tournamentOfChristmas(input) {
   let index = 0;
   let days = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   counterDaysW = 0
   counterDaysL = 0;
   let sum = 0;
   let allSum = 0;
   for(let i = 1; i <= days; i++) {
       sum = 0;
    let countW = 0;
    let countL = 0;
       while(command != 'Finish') {
        
           let typeSport = command;
           let typeWL = input[index];
           index++;
           
           if(typeWL == 'win') {
              sum += 20;
              countW++;
           } else if(typeWL == 'lose') {
               countL++;
           }
           command = input[index];
           index++;
        }
        if(countW > countL) {
            sum *= 1.10;
            counterDaysW++
        } else if(countW < countL) {
            counterDaysL++
        }
        allSum += sum;
        command = input[index];
        index++;
   }
       if(counterDaysW > counterDaysL) {
           allSum *= 1.20;
           console.log(`You won the tournament! Total raised money: ${allSum.toFixed(2)}`);
       } else if(counterDaysL > counterDaysW) {
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