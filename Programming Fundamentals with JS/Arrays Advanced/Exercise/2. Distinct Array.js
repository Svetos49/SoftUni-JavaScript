function distinctArray(input) {
//     let arr = [];
//    for(let el of input) {
//        if(!arr.includes(el)) {
//            arr.push(el);
//        }
//    }
//  console.log(arr.join(' '));

// let arr = input.filter((x, i, arr) => {
//       let sliceArr = input.slice(0, i);
//       if(!sliceArr.includes(x)) {
//           return x;
//       }
//     })
//     console.log(arr.join(' '));

    for(let i = 0; i < input.length; i++) {
            let index = input.indexOf(input[i], i + 1);
    
            if(index !== -1) {
                input.splice(index, 1);
            }
        }
        console.log(input.join(' '));
    
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);