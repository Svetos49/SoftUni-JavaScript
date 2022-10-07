function listOfNames(input) {
      let sorted = input.sort((a, b) => a.localeCompare(b)).map((name, index) => {
          let result = `${index + 1}.${name}`;
          return result
      });
       return sorted.join('\n');
}

 listOfNames(['Jhon', 'Bob', 'Christina', 'Ema'])
console.log( listOfNames(['Jhon', 'Bob', 'Christina', 'Ema']));