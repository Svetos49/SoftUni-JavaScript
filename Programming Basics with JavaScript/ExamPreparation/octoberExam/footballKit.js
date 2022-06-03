function footballKit(input) {
  let tshirtPrice = Number(input[0]);
  let amountPrize = Number(input[1]);
  let discountCard = 15;

  let priceShorts = tshirtPrice * 0.75;
  let socksPrice = priceShorts * 0.20;
  let sneakers = (tshirtPrice + priceShorts) * 2;
  let allSum = (tshirtPrice + priceShorts + socksPrice + sneakers) * (1 - discountCard / 100);
   
  if(allSum >= amountPrize) {
      console.log('Yes, he will earn the world-cup replica ball!');
      console.log(`His sum is ${allSum.toFixed(2)} lv.`);
  } else {
      console.log('No, he will not earn the world-cup replica ball.');
      console.log(`He needs ${(amountPrize - allSum).toFixed(2)} lv. more.`);
  }
}

footballKit(['55', '310']);