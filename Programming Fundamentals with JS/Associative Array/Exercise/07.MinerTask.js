function minerTask(input) {
  let obj = {};
  
  for(let i = 0; i < input.length; i+= 2) {
     if(obj.hasOwnProperty(input[i]) == false) {
        obj[input[i]] = Number(input[i + 1]);
     } else {
        obj[input[i]] += Number(input[i + 1]);
     }
    
  }
  let entries = Object.entries(obj);
  for(let [resource, quantity] of entries) {
    console.log(`${resource} -> ${quantity}`);
  }
 
}

minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
console.log('----------------------------');
minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);
    
    
    
    
    
    
    