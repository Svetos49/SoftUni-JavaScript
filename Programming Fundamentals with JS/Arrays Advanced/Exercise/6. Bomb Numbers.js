function bombNumbers(arr1, arr2) {
    let [specialNumber, power] = arr2;
    
    for(let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i];
        if(currentNum == specialNumber) {
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, arr1.length - 1);
  
            for(let j = start; j <= end; j++) {
                arr1[j] = 0;
            }
        }
   }
      let sum = arr1.reduce((a, b) => a + b);
      console.log(sum);

  //   let index = 0;
    
    
  //   while(arr1.indexOf(specialNumber) !== -1) {
  //       index = arr1.indexOf(specialNumber);
  //       let start = index - power;
  //       if(start < 0) {
  //           start = 0;
  //       }
  //       let end = index + power + 1;
  //       if(end > arr1.length) {
  //           end = arr1.length
  //       }
  
  //       arr1.splice(start, end - start);
  
  //     }
    
  //       let result = arr1.reduce((a, b) => a + b);
  //       console.log(result);
         
  // }
  }

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);