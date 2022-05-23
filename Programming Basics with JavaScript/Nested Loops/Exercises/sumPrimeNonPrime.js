function sumPrimeNonPrime(input) {
   let index = 0;
   let command = Number(input[index]);
   index++;
   let primeNum = 0;
   let nonPrimeNum = 0;
   
    while(command != 'stop') {
       let num = Number(command);
        if(num < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
           
        }
        if(num == 1) {
            primeNum += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for(let i = 2; i < Math.sqrt(num); i++) {
           if(num % i == 0) {
               isPrime = false;
               break;
           }
        }

         if(isPrime) {
             primeNum += num;
         } else {
             nonPrimeNum += num;
         }

         command = input[index];
         index++;
    }

    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}

sumPrimeNonPrime(['30', '83', '33', '-1', '20', 'stop']);