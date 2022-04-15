function solve(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let allMin = hours * 60 + minutes + 15;
  let allHours = Math.floor(allMin / 60);
  let restMin = allMin % 60;

  if(allHours >= 24) {
     allHours = 0;
  }

  if(restMin < 10) {
      console.log(`${allHours}:0${restMin}`);
  } else {
      console.log(`${allHours}:${restMin}`);
  }
}

solve(['23', '46']);