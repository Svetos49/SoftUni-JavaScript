function christmasPreparation(input) {
  let paper = Number(input[0]);
  let rolls = Number(input[1]);
  let glue = Number(input[2]);
  let discountPercent = Number(input[3]);

  let sumPaper = paper * 5.80;
  let rollsSum = rolls * 7.20;
  let sumGlue = glue * 1.20;
  let allSum = (sumPaper + rollsSum + sumGlue) * ( 1 - discountPercent / 100);

  console.log(allSum.toFixed(3));
}

christmasPreparation(['2', '3', '2.5', '25'])