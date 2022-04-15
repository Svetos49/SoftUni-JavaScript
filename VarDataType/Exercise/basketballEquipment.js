function basketballEquipment(input) {
  let annualFee = Number(input[0]);

  let sneakersPrice = annualFee * 0.60;
  let baskEquipment = sneakersPrice * 0.80;
  let baskBallPrice = baskEquipment * 0.25;
  let baskAccessories = baskBallPrice * 0.20;

  let allPriceOfEquipment = annualFee + sneakersPrice + baskEquipment + baskBallPrice + baskAccessories;

  console.log(allPriceOfEquipment);
}

basketballEquipment(['365']);