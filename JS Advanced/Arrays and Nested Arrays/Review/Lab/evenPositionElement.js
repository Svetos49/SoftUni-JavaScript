function evenPositionElement(arr) {
      let elements = '';
    for (let index = 0; index < arr.length; index++) {
        let currentEl = Number(arr[index])
        if(index % 2 === 0) {
            elements += arr[index] + ' ';
         }
    }
    console.log(elements);
}

evenPositionElement(['20', '30', '40', '50', '60'])