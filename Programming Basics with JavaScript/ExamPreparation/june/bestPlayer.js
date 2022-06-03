function bestPlayer(input) {
   let index = 0;
   let command = input[index];
   index++;

   let bestPlName = '';
   let bestPGoals = 0;

   while(command != 'END') {
       let name = command;
       let goals = Number(input[index]);
       index++;
       if(goals > bestPGoals) {
           bestPlName = name;
           bestPGoals = goals;
       }

       if(goals >= 10) {
           break;
       }

       command = input[index];
       index++
   }
   console.log(`${bestPlName} is the best player!`);
   if(bestPGoals >= 3) {
       
       console.log(`He has scored ${bestPGoals} goals and made a hat-trick !!!`);
   } else {
       console.log(`He has scored ${bestPGoals} goals.`);
   }
}

bestPlayer([
    'Neymar',  '2',
    'Ronaldo', '1',
    'Messi',   '3',
    'END',     ''
  ]);