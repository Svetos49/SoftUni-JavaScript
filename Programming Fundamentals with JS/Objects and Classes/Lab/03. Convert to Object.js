function convertObject(json) {
 let obj = JSON.parse(json);
 let result = '';

 for(key in obj) {
    result += `${key}: ${obj[key]}` + '\n';
    
 }

 return result;
//  for(key of Object.keys(obj)) {
//     console.log(`${key}: ${obj[key]}`);
//  }
}

let obj = convertObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log(obj);
//convertObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');