function movingTarget(input) {
  let sequence = input.shift().split(' ').map(Number);
  let curr = input.shift().split(' ');
   let command = curr[0];

  while(command != 'End') {
   let index = Number(curr[1]);
   let value = Number(curr[2]);
  
   if(command == 'Shoot') {
       sequence[index] -= value;
       if(sequence[index] <= 0) {
        sequence.splice(index, 1);
       }
   } else if(command == 'Add') {
      if(index < 0 || index >= sequence.length) {
        console.log("Invalid placement!");
      } else {
        sequence.splice(index, 0, value)
      }
   } else  {
    if(index - value < 0 || index + value >= sequence.length) {
        console.log("Strike missed!");
        continue;
      } else {
        let remove = 2 * value + 1;
        sequence.splice(index - value, remove);
      }
   }

   curr = input.shift().split(' ');
   command = curr[0];
  }
  console.log(sequence.join('|'));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);