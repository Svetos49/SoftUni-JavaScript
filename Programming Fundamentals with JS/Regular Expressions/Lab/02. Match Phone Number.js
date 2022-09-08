function matchPhoneNumber(telNumbers) {
   let text = telNumbers[0]; 
 let pattern = /\+359([-| ])2\1[0-9]{3}\1[0-9]{4}\b/g;   
// let matches = telNumbers.match(pattern);
// console.log(matches.join(', '));
let result = [];
let match = pattern.exec(text);
while(match != null) {
    result.push(match[0].trim());
    match = pattern.exec(text);
}
console.log(result.join(', '));
}

matchPhoneNumber([
'+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ]);