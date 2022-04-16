function fishingBoat(input) {
  let buget = Number(input[0]);
  let season = input[1];
  let numFisher = Number(input[2]);

  let price = 0;

  if(season == 'Spring') {
      if(numFisher <= 6) {
          price = 3000 * 0.90
      } else if(numFisher > 6 && numFisher <= 11) {
          price = 3000 * 0.85;
      } else if(numFisher > 11) {
          price = 3000 * 0.75;
      }  
  } else if(season == 'Summer' || season == 'Autumn') {
    if(numFisher <= 6) {
        price = 4200 * 0.90
    } else if(numFisher > 6 && numFisher <= 11) {
        price = 4200 * 0.85;
    } else if(numFisher > 11) {
        price = 4200 * 0.75;
    }  
} else if(season == 'Winter') {
    if(numFisher <= 6) {
        price = 2600 * 0.90
    } else if(numFisher > 6 && numFisher <= 11) {
        price = 2600 * 0.85;
    } else if(numFisher > 11) {
        price = 2600 * 0.75;
    }  
} 

   if(season == 'Spring' || season == 'Summer' || season == 'Winter') {
       if(numFisher % 2 == 0) {
           price *= 0.95;
       }
   }

   let difference = Math.abs(buget - price);
   if(buget >= price) {
       console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
   } else if(buget < price) {
       console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
   }
}

fishingBoat(['3000', 'Summer', '11'])