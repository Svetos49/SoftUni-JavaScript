function coins(input) {
  let change = Number(input[0]);
  let inCoins =Math.floor(change * 100);
  let counter = 0;

  while(inCoins > 0) {
      if(inCoins >= 200) {
        counter++;
        inCoins -= 200;
      } else if(inCoins >= 100) {
        counter++;
        inCoins -= 100;
      } else if(inCoins >= 50) {
        counter++;
        inCoins -= 50;
      } else if(inCoins >= 20) {
        counter++;
        inCoins -= 20;
      } else if(inCoins >= 10) {
        counter++;
        inCoins -= 10;
      } else if(inCoins >= 5) {
        counter++;
        inCoins -= 5;
      } else if(inCoins >= 2) {
        counter++;
        inCoins -= 2;
      } else  {
          counter++;
          inCoins -= 1
      }
  }
  console.log(counter);
}

coins(['1.23']);