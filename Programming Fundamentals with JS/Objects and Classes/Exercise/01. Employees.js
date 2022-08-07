function employees(input) {
  let obj = {};
  
  for(line of input) {
    
    obj[line] = line.length;
  }
 
  for(key of Object.keys(obj)) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);