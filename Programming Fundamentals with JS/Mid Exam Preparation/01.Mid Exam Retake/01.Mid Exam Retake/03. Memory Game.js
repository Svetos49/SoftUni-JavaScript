// function memoryGame(input) {
//  let lines = input.shift().split(' ');
//  let moves = 0;
//  while(input[0] != 'end') {
    
//      let [index1, index2] = input[0].split(' ').map(Number);
//      if(lines[index1] == lines[index2]) {
//          let element = lines[index1];
//             let el = lines[index1]
//          lines.splice(index1, 1);
//          let index = lines.indexOf(el)
//          lines.splice(index, 1);
//          console.log(`Congrats! You have found matching elements - ${element}!`);
//          moves++
//      } else if(index1 == index2 || index1 < 0  || index2 < 0 || index1 >= lines.length ||
//          index2 >= lines.length){
//          let index = lines.length / 2;
//          let ins = lines[index1];
//          lines.splice(index, 0, `-${moves+1}a`, `-${moves+1}a`);
//          console.log("Invalid input! Adding additional elements to the board");
//      } else if(!(lines[index1] == lines[index2])) {
//          console.log("Try again!"
//          );
//      }

//      if(lines.length == 0) {
//         console.log(`You have won in ${moves} turns!`);
//         break; 
//     }
     
//     input.shift();
//  }
//      if(lines.length > 0) {
//          console.log(`Sorry you lose :(
// ${lines.join(' ')}`);
//      }
// }

function memoryGame(input) {
    let line = input.shift().split(' ');
    let move = input.shift();
    let count = 0;

    while(move != 'end') {
        count++;
     let [n1, n2] = move.split(' ').map(Number);
     if(n1 == n2 || n1 < 0 || n2 < 0 || n1 >= line.length || n2 >= line.length) {
         let el = `-${count}a`;
         line.splice(line.length/2, 0, el, el);
        console.log("Invalid input! Adding additional elements to the board");
        
     } else if(line[n1] == line[n2]) {
        console.log(`Congrats! You have found matching elements - ${line[n1]}!`);
        let element = line[n1];
        line.splice(n1, 1);
        let index = line.indexOf(element);
        line.splice(index, 1);
   
    } else if(!(line[n1] === line[n2])){
        console.log("Try again!");
    }

    if(line.length == 0) {
        console.log(`You have won in ${count} turns!`);
        break;
    }
    move = input.shift();
    
 }

    if(line.length > 0) {
        console.log(`Sorry you lose :(
${line.join(' ')}`);
    }
   
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);

 console.log('--------------------------');   
 memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);