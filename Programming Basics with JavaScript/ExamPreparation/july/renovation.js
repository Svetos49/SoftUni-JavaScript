function renovation(input) {
  let index = 0;
  let h = Number(input[index]);
  index++;
  let w = Number(input[index]);
  index++;
  let percentage = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let allWallArea = h * w * 4;
  let realWallArea = Math.ceil(allWallArea - (allWallArea * percentage / 100));
  let sumLiters = 0;

  while(command != 'Tired!') {
      let paintInLiters = Number(command);
      sumLiters += paintInLiters;
      
     if(sumLiters > realWallArea) {
        console.log(`All walls are painted and you have ${sumLiters - realWallArea} l paint left!`);
        break;
     }

      command = input[index];
      index++;

  }
     if(realWallArea > sumLiters) {
          console.log(`${realWallArea - sumLiters} quadratic m left.`);
     } else if(realWallArea == sumLiters) {
     console.log(`All walls are painted! Great job, Pesho!`);
    }
}

renovation(['3', '5', '10', '2', '3', '4', 'Tired!']);
renovation(['2', '3', '25', '6', '7', '8']);