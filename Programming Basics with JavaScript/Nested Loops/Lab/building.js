function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
   for(let i = floors; i >= 1 ; i--) {
       let line = '';
       for(j= 0; j < rooms; j++) {
           if(i == floors) {
            line += `L${i}${j} `;
           } else if(i % 2 == 0) {
            line += `O${i}${j} `;
          } else {
            line += `A${i}${j} `; 
          }
       }
       console.log(line);
   }
}

building(['6', '4']);