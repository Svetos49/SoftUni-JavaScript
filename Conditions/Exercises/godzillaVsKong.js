function godzilaVsKong(input) {
  let budget =  Number(input[0]);
  let  extraCount = Number(input[1]);
  let clothPrice = Number(input[2]);
  
  let decoration = budget * 0.1;
  let allClothPrice = 0;
  if(extraCount >150) {
      allClothPrice = extraCount*(clothPrice * 0.90);
  } else {
      allClothPrice = extraCount * clothPrice;
  }

  let totalPrice = decoration + allClothPrice;
  let diff = Math.abs(totalPrice - budget);
  
  if(totalPrice > budget) {
      console.log('Not enough money!');
      console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
      console.log('Action!');
      console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}

godzilaVsKong(['20000', '120', '55.5']);
godzilaVsKong(['9587.88', '222', '55.68' ])