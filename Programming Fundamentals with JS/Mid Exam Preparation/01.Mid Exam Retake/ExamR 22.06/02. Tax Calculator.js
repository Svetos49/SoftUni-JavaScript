function taxCalculator(input) {
  let arr = input[0].split('>>');
  let initialTax = 0;
  let declineTaxPerYear = 0;
  let increaseCount = 0;
  let totalTax = 0;
  let totalTaxCollected = 0

  for(line of arr) {
    let[carType, yearsUsed, kmTraveled] = line.split(' ');
    yearsUsed = Number(yearsUsed);
    kmTraveled = Number(kmTraveled);
    if(carType == 'family') {
      initialTax = 50;
     
      increaseCount = Math.floor(kmTraveled / 3000);
      declineTaxPerYear = 5;
      totalTax = initialTax - declineTaxPerYear * yearsUsed + increaseCount * 12;
      console.log(`A ${carType} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
      totalTaxCollected = totalTaxCollected + totalTax;
    } else if(carType == 'heavyDuty') {
      initialTax = 80;
      declineTaxPerYear = 8;
      increaseCount = Math.floor(kmTraveled / 9000);
      totalTax = initialTax - declineTaxPerYear * yearsUsed + increaseCount * 14;
      console.log(`A ${carType} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
      totalTaxCollected = totalTaxCollected + totalTax;
     
    } else if(carType == 'sports') {
      initialTax = 100;
      declineTaxPerYear = 9;
      increaseCount = Math.floor(kmTraveled / 2000);
      totalTax = initialTax - declineTaxPerYear * yearsUsed + increaseCount * 18;
      console.log(`A ${carType} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
      totalTaxCollected = totalTaxCollected + totalTax;
      
    } else {
       console.log("Invalid car type.");
       
    }

    
  }

  console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
}


taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);