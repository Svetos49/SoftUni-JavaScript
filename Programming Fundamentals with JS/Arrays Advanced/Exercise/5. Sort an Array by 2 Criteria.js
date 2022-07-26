function sortArrayBy2Criteria(input) {
   let result = input.sort(sorted);
   function sorted(a, b) {
       let firstCriteria = a.length - b.length;
       if(firstCriteria == 0) {
           return a.localeCompare(b);
       }
       return firstCriteria;
   }
    console.log(result.join('\n'));
}

sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

