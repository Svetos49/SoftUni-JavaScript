function addAndRemoveElements(arr) {
    let result = [];
    let num = 1;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 'add') {
    //         result.push(i + 1);

    //     } else {
    //         result.pop();
    //     }
    // }
     
    arr.forEach(el => {
        if(el == 'add') {
         result.push(num);
        } else {
          result.pop();  
        }
        num++;
    });
    
    if(result.length == 0) {
        console.log('Empty');
    }
    console.log(result.join('\n'));
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);