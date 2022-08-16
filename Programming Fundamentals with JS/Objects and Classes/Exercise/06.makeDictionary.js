// function makeDictionary(input) {
//  let result = [];
//  for(line of input) {
//     line = JSON.parse(line);
//     let entries = Object.entries(line);
//     let term = entries[0][0];
//     let description = entries[0][1];
//     let obj = {
//         term,
//         description
//     }
//     result.push(obj);
//  }
//     result.sort((a, b) => a.term.localeCompare(b.term));
//     for(line of result) {
//         let values = Object.values(line);
//         console.log(`Term: ${values[0]} => Definition: ${values[1]}`);

//     }
// }

function makeDictionary(input) {
    let dictionary = {};
    let parsedItem = input.map(JSON.parse);
    parsedItem
    .forEach(item => {
      let tuple = Object.entries(item);
      let term = tuple[0][0];
      let definition = tuple[0][1];
      dictionary[term] = definition;  
    });
    let sortedItm = Object.entries(dictionary)
    .sort((a,b) => a[0].localeCompare(b));
    for(let key of sortedItm) {
        console.log(`Term: ${key[0]} => Definition: ${key[1]}`);
    }
}

makeDictionary([
'{"Coffee":"A hot drink made from the roasted and groundseeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
]);