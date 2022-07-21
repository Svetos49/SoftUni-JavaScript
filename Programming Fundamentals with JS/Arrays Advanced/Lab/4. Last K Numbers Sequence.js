function lastKNumbersSequence(n, k) {
  let arr = [1];
  for(i = 1; i < n; i++) {
      let curr = arr.slice(-k);
      let sum = 0;
      for(let el of curr) {
          sum += el;
          
      }
      arr.push(sum);
  }
  console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);