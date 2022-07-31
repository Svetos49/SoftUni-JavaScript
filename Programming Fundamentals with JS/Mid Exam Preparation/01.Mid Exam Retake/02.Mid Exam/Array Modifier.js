function arrayModifier(input) {
  let arr = input.shift().split(' ').map(Number);
  
 
  while(input[0] != 'end') {
      let [command, el1, el2] = input.shift().split(' ');
      el1 = Number(el1);
      el2 = Number(el2);
      if(command == 'swap') {
        let first = arr[el1];
        arr[el1] = arr[el2];
        arr[el2] = first;
      } else if(command == 'multiply') {
       let newEl = arr[el1] * arr[el2];
       arr[el1] = newEl;
      } else if(command == 'decrease') {
       arr = arr.map( el => el-1);
      }
  }
  console.log(arr.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);