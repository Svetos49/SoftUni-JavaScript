function toyShop(input) {
  let priceE = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let talkingDollCount = Number(input[2]);
  let teddyBearCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let puzzlePrice = 2.60;
  let talkingDollPrice = 3.00;
  let teddyBearPrice = 4.10;
  let minionPrice = 8.20;
  let truckPrice = 2.00;

  let totalCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;
  let totalPrice = puzzleCount * puzzlePrice + talkingDollCount * talkingDollPrice + teddyBearCount * teddyBearPrice
   + minionCount * minionPrice + truckCount * truckPrice;
   
   if(totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
   }
   let earndMoney = totalPrice * 0.90;
   let restMoney = Math.abs(earndMoney - priceE);
   

   if(earndMoney >= priceE) {
       console.log(`Yes! ${restMoney.toFixed(2)} lv left.`);
   } else {
       console.log(`Not enough money! ${restMoney.toFixed(2)} lv needed.`);
   }

}

toyShop(['40.8', '20', '25', '30', '50', '10']);