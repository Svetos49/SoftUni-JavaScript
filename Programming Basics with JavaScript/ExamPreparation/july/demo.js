function renovation(input) {
  let height = Number(input[0]);
  let width = Number(input[1]);
  let percentage = Number(input[2]);
  let sum = height * width * 4;

  sum = sum - (sum * percentage / 100);

  let index = 3;
  let liters = input[index];
  index++;

  while(liters != 'Tired!') {
      sum -= Number(liters);

      if(sum <= 0) {
         
          break;
      }
      liters = input[index];
      index++;
  }

   if(sum < 0) {
    console.log(`All walls are painted and you have ${Math.abs(sum)} l paint left!`);
   } else if(sum === 0) {
         console.log('All walls are painted! Great job, Pesho!');
   } else if(sum >= 0) {
       console.log(`${sum} quadratic m left.`);
   }

   
}


renovation(['3', '5', '10', '2', '3', '4', 'Tired!']);
renovation(['2', '3', '25', '6', '7', '8']);
