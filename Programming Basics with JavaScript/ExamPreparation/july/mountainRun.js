function mountainRun(input) {
  let recordsTime = Number(input[0]);
  let distance = Number(input[1]); 
  let timeFormeter = Number(input[2]);

  let idealTime = distance * timeFormeter;

  let delay = Math.floor(distance / 50) * 30;
  let realTime = idealTime + delay;

  if(realTime < recordsTime) {
      console.log(`Yes! The new record is ${realTime.toFixed(2)} seconds.`);
  } else {
      let diff = realTime - recordsTime;
      console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}

mountainRun(['10164', '1400', '25']);