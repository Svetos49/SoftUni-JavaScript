function footballTournament(input) {
    let index = 0;
    let name = input[index++];
    let playedGames = Number(input[index++]);
    let wCounter = 0;
    let dCounter = 0;
    let lCounter = 0;
    let points = 0;

    for (let i = 0; i < playedGames; i++) {
        let result = input[index++];

        switch (result) {
            case 'W':
                wCounter++;
                points += 3;
                break;
            case 'D':
                dCounter++;
                points += 1;
                break;
            case 'L':
                lCounter++;
                break;
        }
    }
    let winRate = wCounter / playedGames * 100;
      if(playedGames == 0) {
          console.log("Chelsea hasn't played any games during this season.");
      } else {
        console.log(`${name} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wCounter}`);
        console.log(`## D: ${dCounter}`);
        console.log(`## L: ${lCounter}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
      }
    
    
}

footballTournament([
    'Liverpool', '10',
    'W', 'D',
    'D', 'W',
    'L', 'W',
    'D', 'D',
    'W', 'W'
]);