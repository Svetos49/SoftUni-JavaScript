function depositCalculator(input) {
  let deposit = Number(input[0]);
  let timeOfDep = Number(input[1]);
  let anIntRate = Number(input[2]);
  let allSum = deposit * (anIntRate / 100);
  let monthRate = allSum / 12;
  let result = (deposit + timeOfDep * monthRate).toFixed(2);
  console.log(result);

}

depositCalculator(['200', '3', '5.7']);