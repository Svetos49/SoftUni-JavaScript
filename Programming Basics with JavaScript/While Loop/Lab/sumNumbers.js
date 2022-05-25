function sumNumbers(input) {
 let n = Number(input[0]);
 let numbers = Number(input[1]);
 let index = 1;
 while(n > numbers) {
    index++;
     numbers += Number(input[index]);
    
 }
 console.log(numbers);
}

sumNumbers(['20', '1', '2', '3', '4', '5', '6']);