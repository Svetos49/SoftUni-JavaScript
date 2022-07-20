function firstAndLastKNumbers(input) {
  let numK = input.shift();
  let firstK = input.slice(0, numK );
  let lastK = input.slice(-numK);
  console.log(input.slice(0, numK).join(' '));
  console.log(input.slice(-numK).join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);