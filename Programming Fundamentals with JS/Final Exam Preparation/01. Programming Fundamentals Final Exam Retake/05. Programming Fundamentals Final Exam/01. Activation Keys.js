function activationKeys(input) {
 let rawKey = input.shift();
 input.pop();
 for(line of input) {
    let tokens = line.split('>>>');
    let command = tokens[0];
    if(command == 'Contains') {
        let substr = tokens[1];
        if(rawKey.includes(substr)) {
            console.log(`${rawKey} contains ${substr}`);
        } else {
            console.log("Substring not found!");
        }
    } else if(command == 'Slice') {
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let part1 = rawKey.slice(0, startIndex);
        let part3 = rawKey.slice(endIndex);
        rawKey = part1 + part3;
        console.log(rawKey);
    } else if(command == 'Flip') {
        let startIndex = Number(tokens[2]);
        let endIndex = Number(tokens[3]);
        let part1 = rawKey.slice(0, startIndex);
        let part2 = rawKey.slice(startIndex, endIndex);
        let part3 = rawKey.slice(endIndex);
        if(tokens[1] == 'Upper') {
          part2 = part2.toUpperCase();
        } else if(tokens[1] == 'Lower') {
         part2 = part2.toLowerCase();
        }
        rawKey = part1 + part2 + part3;
        console.log(rawKey);
    }
    
 }
   console.log(`Your activation key is: ${rawKey}`);

}

activationKeys((["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7",

"Contains>>>def", "Contains>>>deF", "Generate"]));

