function numbers(input) {
  let arr = input.split(' ').map(Number);
  let average = arr.reduce((a, b) => (a + b)) / arr.length;
  let sorted = arr.sort((a, b) => b - a);
  let result = '';
  
  for(let i = 0; i < 5; i++) {
     
      
      if(sorted[i] > average) {
       result += sorted[i] + ' ';
      }
  }
  if(result.length == 0) {
    console.log('No');
  } else {
    console.log(result);
  }
  
}

numbers('10 20 30 40 50');
numbers('1');