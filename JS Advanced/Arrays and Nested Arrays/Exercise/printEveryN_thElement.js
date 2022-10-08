function printEveryN_thElement(arr, step) {
    
    //  arr.forEach((el, index) => {
    //      if(index % step === 0) {
    //          console.log(el);
    //      }
    //  });
    let result = [];
    for(let i = 0; i < arr.length; i++) {
         if(i % step === 0) {
             result.push(arr[i]);
         }
    }
    console.log(result.join('\n'));
   
//    return result.join('\n');     
}

 printEveryN_thElement(['5', '20', '31', '4', '20'], 2);

// console.log(printEveryN_thElement(['5', '20', '31', '4', '20'], 2));
// printEveryN_thElement([ '5', '20', '31', '4', '20' ] 2
// You must return an array!)