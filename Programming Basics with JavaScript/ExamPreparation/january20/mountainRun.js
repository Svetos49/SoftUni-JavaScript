function mountainRun(input) {
 let record = input[0];
 let distance = input[1];
 let timeForMeter = input[2];
 let idealPersonalTime = distance * timeForMeter;
 let delay = Math.floor(distance / 50) * 30;
 let realTime = idealPersonalTime + delay;

 if(realTime < record) {
     console.log(`Yes! The new record is ${realTime.toFixed(2)} seconds.`);
 } else {
     console.log(`No! He was ${(realTime - record).toFixed(2)} seconds slower.`);
 }
 
}

mountainRun([1377, 389, 3]);