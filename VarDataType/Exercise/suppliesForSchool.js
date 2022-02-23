function suppliesForSchool(input) {
  let numPens = Number(input[0]);
  let numMark = Number(input[1]);
  let cleanDet = Number(input[2]);
  let percentageRed = Number(input[3]);
  let packagePens = 5.80;
  let packageMarks = 7.20;
  let preparation = 1.20;
  let sum = numPens * packagePens + numMark * packageMarks + cleanDet * preparation;
  let reduceSum = sum * (percentageRed / 100);

  let finalSum = sum - reduceSum;
  console.log(finalSum.toFixed(2));
}

suppliesForSchool(['2', '3', '4', '25']);