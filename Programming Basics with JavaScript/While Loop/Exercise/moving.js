function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumBoxes = 0;
    let freeSpace = 0
    while(command != 'Done' || index < input.length) {
        let boxes = Number(command);
         freeSpace = w * l * h;
        sumBoxes += boxes;
        if(sumBoxes > freeSpace) {
            console.log(`No more free space! You need ${sumBoxes - freeSpace} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }

      if(freeSpace > sumBoxes) {
        console.log(`${freeSpace - sumBoxes} Cubic meters left.`);
      }

}

moving(['10', '10', '2', '20', '20', '20', '20', '122' ]);