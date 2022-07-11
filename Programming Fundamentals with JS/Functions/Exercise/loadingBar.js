function solve(n) {
  let persent = n/10;
  let persentLoader = '..........';
  let arr = persentLoader.split('');

  if(n == 100) {
      console.log('100% Complete!');
      console.log('100% [%%%%%%%%%%]');
  } else {
     for(let i = 0; i<persent; i++) {
         arr.pop();
         arr.unshift('%');
     }
     console.log(`${n}% [${arr.join('')}]`);
  console.log('Still loading...');
  }
  
}

solve(30);