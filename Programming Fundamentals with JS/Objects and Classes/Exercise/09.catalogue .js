function catalogue(input) {
  let arr = [];
  for(line of input) {
    let [name, price] = line.split(' :');
    price = Number(price);
    let obj = {name, price};
    
    arr.push(obj);
  }
  let sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
  for(line of sorted) {
    
  }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

    
    
    
    
    
    
    
    