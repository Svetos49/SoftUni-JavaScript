function arrayManipulator(intArr, commArr) {
    for(let comm of commArr) {
      let token = comm.split(' ');
      let current = token[0];
      if(current === 'add') {
          let index = Number(token[1]);
          let element = Number(token[2]);
          intArr.splice(index, 0, element);
      } else if(current === 'addMany') {
          let index = Number(token[1]);
         token.splice(0, 2);
         let nums = token.map(Number)
         intArr.splice(index, 0, ...nums);
         
      } else if(current === 'contains') {
          let result = intArr.indexOf(Number(token[1]));
          console.log(result);
      } else if(current === 'remove') {
        let index = Number(token[1]);
        intArr.splice(index, 1);
      } else if(current === 'shift') {
       let position = token[1];
       for(let i = 0; i < position; i++) {
           let firstEl = intArr.shift();
           intArr.push(firstEl);
       }
       
      } else if(current === 'sumPairs') {
         let arr = [];
         if(intArr % 2 !== 0) {
             intArr.push(0);
         }
        for(let i = 0; i < intArr.length - 1; i+= 2) {
            let sum = intArr[i] + intArr[i + 1];
            arr.push(sum);
        }
        intArr = arr;
        
      } else if(current == 'print') {
        console.log(`[ ${intArr.join(', ')} ]`);
        
      }
    }
}



arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);