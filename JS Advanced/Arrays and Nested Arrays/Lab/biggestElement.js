function biggestElement(input) {
  const result = input.reduce((acc, item) => {
      return acc.concat(item)
  }, []);
  
  const biggest = result.reduce((a, b) => a > b ? a: b);
  console.log(biggest);
}

// console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
biggestElement([[20, 50, 10], [8, 33, 145]])