function foodDelivery(input) {
  let chickenMenu = 10.35;
  let vegetarianMenu = 8.15;
  let fishMenu = 12.40;
  let priceForDeliver = 2.50;

  let numChickenMenu = Number(input[0]);
  let numFishMenu = Number(input[1]);
  let numVegetarianMenu = Number(input[2]);

  let priceChicken = numChickenMenu * chickenMenu;
  let priceFish = numFishMenu * fishMenu;
  let priceVegetarian = numVegetarianMenu * vegetarianMenu;
  let allPriceMenues = priceChicken + priceFish + priceVegetarian;
  let dessertPrice = allPriceMenues * 0.2;
  let allPriceDeliver = allPriceMenues + dessertPrice + priceForDeliver;

  console.log(allPriceDeliver);
}

foodDelivery(['2', '4', '3']);