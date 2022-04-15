function shopping(input) {
  let budget = Number(input[0]);
  let videoCardCounter = Number(input[1]);
  let procesorCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let videoCardPrice = 250;
  let totalVCPrice = videoCardCounter  * videoCardPrice;
  let procesoPrice = totalVCPrice * 0.35;
  let totalProcesorPrice = procesoPrice * procesorCount;
  let ramPrice = totalVCPrice * 0.1;
  let totalRamPrice = ramCount * ramPrice;
  let allSum = totalVCPrice + totalProcesorPrice + totalRamPrice;

  if(videoCardCounter > procesorCount) {
      allSum = allSum * 0.85;
  }

  let diff = Math.abs(budget - allSum);

  if(budget >= allSum) {
      console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
      console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}

shopping(['900', '2', '1', '3']);