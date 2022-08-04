function tresureHunt(input) {
 let treasureChest = input.shift().split('|');
 let line = input.shift();
 let sum = 0;

 while(line != "Yohoho!") {
    let tokens = line.split(' ');
    let command = tokens.shift();
    switch(command) {
      case 'Loot': 
      for(let i = 0; i < tokens.length; i++) {
        if(!treasureChest.includes(tokens[i])) {
          treasureChest.unshift(tokens[i]);
        } 
      }
      break;
      case 'Drop': let i = Number(tokens[0]);
       if(i < 0 || i >= treasureChest.length) {
        line = input.shift();
         continue;
       }
       let item = treasureChest.splice(i, 1);
       treasureChest.push(item[0]); 
      break;
      case 'Steal':
        let count = Number(tokens[0]);
      let stealed = treasureChest.splice(-count);
      console.log(stealed.join(', '));  
      break;
    }
    line = input.shift();
 }

 for(item of treasureChest) {
   item = item.length;
   sum += item;
 }
 let avg = sum / treasureChest.length;

 if(treasureChest.length == 0) {
    console.log("Failed treasure hunt.");
 } else {
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
 }
 
}

tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);

console.log('-----------------------------------------');
tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);