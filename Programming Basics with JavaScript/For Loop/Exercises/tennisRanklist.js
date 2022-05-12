function tennisRanklist(input) {
   let  numOfTourneys = Number(input[0]);
   let firstPoints = Number(input[1]);
   let tourStage = '';

   let numPointsW = 0;
   let finalPoints = 0;
   let averagePoints = 0;
   let p = 0;
   let count = 0;
   let numPointsF = 0;
   let numPointsSF = 0;

   for(let i = 2; i < numOfTourneys + 2; i++) {
       tourStage = input[i];
       if(tourStage == 'W') {
         numPointsW += 2000;
         count++
       } else if(tourStage == 'F') {
         numPointsF += 1200;
       } else if(tourStage == 'SF') {
         numPointsSF += 720;
       }
   }
    let sumPoints = numPointsW + numPointsF + numPointsSF;
     averagePoints = sumPoints / numOfTourneys;
    finalPoints = sumPoints + firstPoints;
    p = count / numOfTourneys * 100;
    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${p.toFixed(2)}%`);
     
}

tennisRanklist([
    '5',  '1400', 'F',
    'SF', 'W',    'W',
    'SF'
  ]);