function solve(num) {
  let numStr = String(num);
  let evenSum = 0;
  let oddSum = 0;
  for(let i = 0; i < numStr.length; i++) {
      currentNum = Number(numStr[i]);
      if(currentNum % 2 == 0) {
        evenSum += currentNum;
      } else {
          oddSum += currentNum;
      }
  }
  return result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));
solve(1000435);