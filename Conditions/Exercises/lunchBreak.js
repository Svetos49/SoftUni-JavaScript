function lunchBreak(input) {
  let serialName = input[0];
  let serialTime = Number(input[1]);
  let rest = Number(input[2]);

   let timeForLunch = rest * (1/8);
   let timeForBreak = rest * 0.25;
   let diff = rest - (timeForLunch + timeForBreak);
   let freeTime = Math.abs(diff - serialTime);

   if(diff >= serialTime) {
       console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(freeTime)} minutes free time.`);
   } else {
       console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(freeTime)} more minutes.`);
   }
}

lunchBreak(['Game of Thrones', '60', '96']);