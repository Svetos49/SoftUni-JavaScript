function sortArrayBy2Criteria(input) {
    //  let sorted = input.sort((a, b) =>{
    //       if(a.length == b.length) {
    //           return a.localeCompare(b);
    //       }
    //       return a.length - b.length
    //  })
    //  console.log(sorted.join('\n'));

   input.sort((a, b) => {
      return  a.length - b.length || a.localeCompare(b);
    });
    console.log(input.join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma'])