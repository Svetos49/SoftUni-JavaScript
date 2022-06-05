function solve(input) {
  let str = input.toString();
  let sum = 0;
  for(let i = 0; i < str.length; i++) {
     sum += Number(str[i]);
  }
   
  if(sum.toString().includes('9')) {
    console.log(`${input} Amazing? True`);
  } else {
    console.log(`${input} Amazing? False`); 
  }
  
}

solve(1233);