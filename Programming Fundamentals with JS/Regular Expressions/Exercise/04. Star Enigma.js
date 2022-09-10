function starEnigma(input) {
  let num = Number(input.shift());
  let pattern =/@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
  let attacked = [];
  let destroyed = [];

  for(let i  = 0; i < num; i++) {
    let encryptedMessages = input[i];
    let count = encryptedMessages.toLowerCase().split('').filter(char => filtred(char)).length;
    let decryptedMessages = encryptedMessages
                           .split('')
                           .map((char) => String.fromCharCode(char.charCodeAt(0) - count))
                           .join('');
     let matches = decryptedMessages.match(pattern);
     
     if(matches) {
        if(matches[2] == 'A') {
            attacked.push(matches[1])
        } else if(matches[2] == 'D') {
            destroyed.push(matches[1])
        }
     }                   
  }

   console.log(`Attacked planets: ${attacked.length}`);
   Object.entries(attacked)
   .sort((a, b) => a[1].localeCompare(b[1]))
   .forEach(p => console.log(` -> ${p[1]}`));

   console.log(`Destroyed planets: ${destroyed.length}`);
   Object.entries(destroyed)
   .sort((a, b) => a[1].localeCompare(b[1]))
   .forEach(p => console.log(` -> ${p[1]}`));

  function filtred(char) {
    return char == 'a' || char == 'r' || char == 's' || char == 't';
  }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);