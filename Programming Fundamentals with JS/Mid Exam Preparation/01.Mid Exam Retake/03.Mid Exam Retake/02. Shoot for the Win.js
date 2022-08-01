function shootForWin(input) {
   let line = input.shift().split(' ').map(Number);
    let index = input.shift();
    let count = 0;
   while(index != 'End') {
        index = Number(index);
       if(index < 0 || index >= line.length) {
          index = input.shift();
          continue;
       } 
       let curr = line[index];
       
       line[index] = -1;
       for(let i = 0; i < line.length; i++) {
        if(curr < line[i]) {
            line[i] -= curr
        } else if(curr >= line[i] && line[i] !== -1) {
           line[i] += curr; 
        }
       }  
       
      count++;
      index = input.shift()
   }
   console.log(`Shot targets: ${count} -> ${line.join(' ')}`);
}

shootForWin((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]));