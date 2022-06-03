function grandpaStavri(input) {
  let days = Number(input[0]);

  let sumRakia = 0;
  let sumDegree = 0;
  let rakiaForDay = 0;
  let dayDegree = 0;
  for(let i = 1; i <= days * 2; i++) {
      
      if(i % 2 !== 0) {
        rakiaForDay = Number(input[i])
        sumRakia += rakiaForDay
      } 
      if(i % 2 == 0) {
        dayDegree = Number(input[i]) 
        sumDegree += (dayDegree * rakiaForDay);
      }
      
      
  }
  let averageDegree = sumDegree / sumRakia;
  console.log(`Liter: ${sumRakia.toFixed(2)}`);
  console.log(`Degrees: ${averageDegree.toFixed(2)}`);
  if(averageDegree < 38) {
    console.log('Not good, you should baking!');
  } else if(averageDegree >= 38 && averageDegree <= 42) {
     console.log("Super!");
  } else {
     console.log("Dilution with distilled water!");
  }
}

grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);