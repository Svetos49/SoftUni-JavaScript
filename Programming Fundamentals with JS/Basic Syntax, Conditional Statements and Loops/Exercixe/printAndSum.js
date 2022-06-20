function solve(n, m) {
    let line = '';
    let sum = 0;
   for(let i = n; i <=m; i++) {
      line += i + ' ';
      sum += i;
   }
   console.log(line.trim());
   console.log('Sum:' + " " + sum);
}

solve(5, 10);