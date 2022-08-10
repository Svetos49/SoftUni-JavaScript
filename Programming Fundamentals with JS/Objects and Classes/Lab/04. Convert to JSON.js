function convertToJson(name, lastName, hairColor) {
 let obj = {name, lastName, hairColor};
 let json = JSON.stringify(obj);
 return json;
}

convertToJson('George', 'Jones', 'Brown');
console.log(convertToJson('George', 'Jones', 'Brown'));