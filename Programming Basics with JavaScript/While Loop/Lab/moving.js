function moving(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);
  
  let busiesSpace = 0;
  let freeSpace = 0;
  let leftSpace = 0
  let numBoxes = input[3];
  let index = 3;

  while(numBoxes != 'Done') {
      numBoxes = Number(numBoxes);
      busiesSpace += numBoxes;
      index++
      freeSpace = w * l * h;
      leftSpace = Math.abs(freeSpace - busiesSpace);

      if(busiesSpace > freeSpace) {
          console.log(`No more free space! You need ${leftSpace} Cubic meters more.`);
          break;
      }
      numBoxes = input[index];
  }
  
  if(freeSpace > busiesSpace) {
    console.log(`${leftSpace} Cubic meters left.`);
}
}

moving(['10', '10', '2', '20','20', '20', '20', '122']);