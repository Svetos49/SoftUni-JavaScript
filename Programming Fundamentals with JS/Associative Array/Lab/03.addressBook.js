function addressBook(input) {
  let obj = {};
  for(line of input) {
    let [name, address] = line.split(':');
    obj[name] = address;
  }
  let entries = Object.entries(obj)
                .sort((a, b) => a[0].localeCompare(b[0]));
           
  for(let [name, address] of entries) {
     console.log(`${name} -> ${address}`);
  }              
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);


