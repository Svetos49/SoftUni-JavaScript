function solve(input) {
  let recordTime = Number(input[0]);
  let distance = Number(input[1]);
  let timeForMet = Number(input[2]);

  let currentTime = distance * timeForMet;
  let ways = Math.floor(distance / 15);
  let additionalTime = ways * 12.5;
  let realTime = currentTime + additionalTime;
  let diff = realTime - recordTime;
  
  if(realTime < recordTime ) {
      console.log(`Yes, he succeeded! The new world record is ${realTime.toFixed(2)} seconds.`);
  } else {
      console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
  }
}

solve(['55555.67', '3017', '5.03']);