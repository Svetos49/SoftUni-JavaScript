function everest(input) {
  let index = 0;
  let command = input[index++];

  let days = 1;
  let counter = 0;
  let sumM = 5364;
  let end = 8848;
  
   
  while(command !== 'END') {
      meterPerDay = Number(input[index++]);
      
     if(command == 'Yes') {
        days++;

     } else {

     }
     if(days > 5 ) {
       console.log('Failed!');
       console.log(sumM);
         break;
     }

     sumM += meterPerDay;
     if(sumM >= end) {
         console.log(`Goal reached for ${days} days!`);
         break;
     }
     command = input[index++];
  } 
   
  if(command == 'END') {
    console.log('Failed!');
    console.log(sumM);
  }
   
}


everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"]);

everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);