function suitCasesLoad(input) {
 let index = 0;
 let capacity = Number(input[index++]);
 let command = input[index++];
 let count = 0;

 while(command !== 'End') {
     let size = Number(command);
     count++
     let freeSize = capacity - size;
     if(count === 3) {
         freeSize += 1.10;
     }
     if(freeSize < size) {
       console.log('No more space!');
       break;
     }
     command = input[index++];
 }
   if(command === 'End') {
       console.log('Congratulations! All suitcases are loaded!');
   }
   console.log(`Statistic: ${count} suitcases loaded.`);
}

suitCasesLoad([550, 100, 252, 72, 'End']);