function safari(input) {
   let budget = Number(input[0]);
   let needFuel = Number(input[1]);
   let dayOfWeek = input[2];
   let priceFuel = 2.10;
   let priceGuide = 100;

   let moneyForFuel = needFuel * priceFuel;
   let allMoney = moneyForFuel + priceGuide;
   if(dayOfWeek == 'Saturday') {
        allMoney = allMoney * 0.90;
   } else {
        allMoney = allMoney * 0.80;
   }

   if(budget >= allMoney) {
   console.log(`Safari time! Money left: ${(budget - allMoney).toFixed(2)} lv.`);
   } else {
       console.log(`Not enough money! Money needed: ${(allMoney - budget).toFixed(2)} lv.`);
   }

}

safari(['1000', '10', 'Sunday']);