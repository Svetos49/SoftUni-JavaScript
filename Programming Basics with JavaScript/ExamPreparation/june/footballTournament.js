function footballTournament(input) {
  let teamName = input[0];
  let numGames = Number(input[1]);
  let resultOfMatch = '';

  let points = 0;
  let counterW = 0;
  let counterD = 0;
  let counterL = 0;
  let winRate = 0;
   
   for(let i = 2; i < numGames +2; i++) {
      
       resultOfMatch = input[i];
       if(resultOfMatch == 'W') {
          counterW++;
          points += 3;
       } else if(resultOfMatch == 'D') {
          counterD++;
          points += 1;
       } else {
          counterL++;
       }
   }
   if(numGames == 0) {
    console.log(`${teamName} hasn't played any games during this season.`);
   }
    winRate = counterW / numGames * 100;

    console.log(`${teamName} has won ${points} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${counterW}`);
    console.log(`## D: ${counterD}`);
    console.log(`## L: ${counterL}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
    
 
   
}

footballTournament([
    'Liverpool', '10',
    'W',         'D',
    'D',         'W',
    'L',         'W',
    'D',         'D',
    'W',         'W'
  ]);