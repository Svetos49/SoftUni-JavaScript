function sinemaTickets(input) {
    let index = 0;
   let filmName = input[index];
   index++;

   let countStudent = 0;
   let countStandart = 0;
   let countKid = 0;

   while(filmName != 'Finish') {
       let freeSpace = Number(input[index]);
       let counter = 0;
       index++;
       let command = input[index];
       index++;
       while(command !== 'End') {
          let type = command;
          if(type == 'student') {
             countStudent++
          } else if(type == 'standard') {
             countStandart++;
          } else if(type == 'kid') {
              countKid++;
          }

          counter++;
          if(freeSpace == counter) {
              break;
          }
          command = input[index];
          index++;
       }
       let percentage = counter / freeSpace * 100;
       console.log(`${filmName} - ${percentage.toFixed(2)}% full.`);

       filmName = input[index];
       index++;
   }
   let allTickets = countStandart + countStudent + countKid;
   console.log(`Total tickets: ${allTickets}`);
   console.log(`${(countStudent / allTickets * 100).toFixed(2)}% student tickets.`);
   console.log(`${(countStandart / allTickets * 100).toFixed(2)}% standard tickets.`);
   console.log(`${(countKid / allTickets * 100).toFixed(2)}% kids tickets.`);
}

sinemaTickets([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]);