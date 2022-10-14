function listOfNames(arr) {
     
    //  let result = arr.sort();
    //  let orderNum = 1;
    //  arr.forEach(el=> {
    //      console.log(`${orderNum}.${el}`);
    //      orderNum++;
    //  });
    
    let sorted = arr.sort((a, b) => a.localeCompare(b))
                 .map((name,index) => {
                     let result = `${index + 1}.${name}`;
                    console.log(result);
                 })
            
}

listOfNames([ 'John', 'Bob', 'Christina', 'Ema' ]);

