function solve(n, arr) {
  let newArr = [];
  for(let i = 0; i < n; i++) {
      newArr.push(arr[i]);
  }
    let result = '';
  for(let i = newArr.length - 1; i >= 0; i--) {
        result += (newArr[i] + ' ');
  }
  console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);