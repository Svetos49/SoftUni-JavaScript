function cookingMasterclass(input) {
  let budget = input.shift();
  let students = input.shift();
  let flourPrice = input.shift();
  let eggPrice = input.shift();
  let apronPrice = input.shift();
  let countOffreeFlour = 0;
  
  for(let i = 1; i <= students; i++) {
    if(i % 5 == 0) {
       countOffreeFlour++;
    }
    
  }
  let sumOfFlour = flourPrice * (students - countOffreeFlour);
  let sumOfApron = apronPrice * Math.ceil(students * 1.2);
  let sumOfEggs = eggPrice * 10 * students;
  let neededSum = sumOfApron + sumOfEggs + sumOfFlour;

  if(neededSum  <= budget) {
    console.log(`Items purchased for ${neededSum.toFixed(2)}$.`);
  } else {
    console.log(`${(neededSum - budget).toFixed(2)}$ more needed.`);
  }
}

cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);

cookingMasterclass([100, 25, 4.0, 1.0,6.0])