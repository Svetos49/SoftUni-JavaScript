function solve(char1, char2) {
  let firstCh = char1.charCodeAt(0);
  let secondCh = char2.charCodeAt(0);
  let line = '';
  let first = firstCh < secondCh ? firstCh : secondCh;
  let second = secondCh > firstCh ? secondCh : firstCh;

  for(let i = first + 1; i < second; i++) {
      line += String.fromCharCode(i) + ' ';
  }
  console.log(line);
}


solve('a', 'd');
solve('C', '#');