function cake(input) {
    let index = 0;
  let w = Number(input[index]);
  index++;
  let l = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let sizeCake = w * l;
  let numPieces = 0;
  while(command != 'STOP') {
       command = Number(command)
       numPieces += command;
       if(numPieces > sizeCake) {
           console.log(`No more cake left! You need ${numPieces - sizeCake} pieces more.`);
           break;
       }
       command = input[index];
       index++;
  }
   if(command == 'STOP') {
       if(numPieces <= sizeCake) {
           console.log(`${sizeCake - numPieces} pieces are left.`);
       }
   }
}


cake(['10', '10', '20', '20', '20', '20', '21']);
cake(['10', '2', '2', '4', '6', 'STOP']);