function emojiDetector([input]) {
 let emojiRgx = /(::|\*\*)[A-z][a-z]{2,}\1/g;
 let digitsRgx = /\d/g;
 let digits = input.match(digitsRgx);
 let coolThresholdSum = digits.map(Number).reduce((a,b) => a * b);
 console.log(`Cool threshold: ${coolThresholdSum}`);
 let matchEmojis = input.match(emojiRgx);

 console.log(`${matchEmojis.length} emojis found in the text. The cool ones are:`);

 for(line of matchEmojis) {
   let word = line.slice(2, -2);
   let coolness = 0;
    for(let w of word) {
      let numW = w.charCodeAt();
     coolness += numW;
    }
    if(coolness > coolThresholdSum) {
      console.log(line);
    }
    
 }

}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]);