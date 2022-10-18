function calorieObject(arr) {
   let obj = {};
   arr.forEach((el, i) => {
       if(i % 2 == 0) {
           obj[el] = undefined;
       } else if(i % 2 != 0) {
           obj[arr[i-1]] = Number(el);
       }
   });
   console.log(obj);
}

calorieObject(['Youghurt', '48', 'Rise', '138', 'Apple', '52'])