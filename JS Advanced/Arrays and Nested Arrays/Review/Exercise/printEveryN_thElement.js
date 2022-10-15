function printEveryN_thElement(arr, step) {
    let result = [];
     for(let i = 0; i < arr.length; i += step) {
          result.push(arr[i])
     }
     return result;
}


console.log(printEveryN_thElement(['5', '10', '31', '4', '20'], 2));
printEveryN_thElement(['5', '10', '31', '4', '20'], 2);