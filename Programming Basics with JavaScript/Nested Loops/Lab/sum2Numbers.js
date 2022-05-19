function sum2Numbers(input) {
   let startInterval = Number(input[0]);
   let endInterval = Number(input[1]);
   let magicNamber = Number(input[2]);
   
   let isFound = false;
   let combination = 0;
   let counter = 0;
   for(let i = startInterval; i <= endInterval; i++) {
       for(let j = startInterval; j <= endInterval; j++) {
           combination = i + j;
            counter++;
            if(combination == magicNamber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNamber})`);
                isFound = true;
                break;
                
            }
        }
       if(isFound) {
        break;
    }
   }
   if(!isFound) {
       console.log(`${counter} combinations - neither equals ${magicNamber}`);
   }
}

sum2Numbers(['1', '10', '5']);
sum2Numbers(['23', '24', '20']);