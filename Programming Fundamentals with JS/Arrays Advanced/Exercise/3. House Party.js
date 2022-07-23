function houseParty(input) {
    let list = [];
  
   for(let line of input) {
       line = line.split(' ');
       let name = line[0];
      if(line.length == 3) {
          if(list.includes(name)) {
              console.log(`${name} is already in the list!`);
          } else {
            list.push(name);
          }
      } else {
          let index = list.indexOf(name);
          if(index != -1) {
              list.splice(index, 1);
          } else {
              console.log(`${name} is not in the list!`);
          }
      }
   }
   console.log(list.join('\n'));
}



houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);


