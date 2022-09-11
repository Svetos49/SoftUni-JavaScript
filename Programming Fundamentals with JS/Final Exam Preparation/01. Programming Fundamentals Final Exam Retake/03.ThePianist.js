function thePianist(input) {
   let num = Number(input.shift());
   let count = num;
   let pieces = {};
   let composer = '';
   let key = '';
   let piece = '';
   while(count > 0) {
     let line = input.shift().split('|');
     piece = line[0];
     composer = line[1];
     key = line[2];
     pieces[piece] = [composer, key];
     
    count--
   }

   while(input[0] !== 'Stop') {
     let tokens = input[0].split('|');
     let command = tokens[0];
     if(command == 'Add') {
       piece = tokens[1];
       composer = tokens[2];
       key = tokens[3];
       if(!pieces.hasOwnProperty(piece)) {
        pieces[piece] = [composer, key];
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
       } else {
        console.log(`${piece} is already in the collection!`);
       }
     } else if(command == 'Remove') {
        piece = tokens[1];
        if(!pieces.hasOwnProperty(piece)) {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } else {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }

     } else if(command == 'ChangeKey') {
       piece = tokens[1];
       let newKey = tokens[2];
       if(pieces.hasOwnProperty(piece)) {
        let oldKey = pieces[piece][1];
        pieces[piece].splice(1, 1, newKey);
        console.log(`Changed the key of ${piece} to ${newKey}!`);
       } else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
       }
     }
     
     input.shift();
   }
    for(piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece][0]}, Key: ${pieces[piece][1]}`);
    }
   
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);