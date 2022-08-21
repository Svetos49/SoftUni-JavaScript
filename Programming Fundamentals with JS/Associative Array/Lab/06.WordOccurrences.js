function wordOccurences(input) {
   let map = new Map();
   let count = 1;
   for(let word of input) {
     if(!map.has(word)) {
        map.set(word, count)
     } else {
        let oldCount = map.get(word);
        //count = oldCount + count;
        map.set(word, count + oldCount);
     }
   }
   
   let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
   
   sorted.forEach(el => {
    console.log(`${el[0]} -> ${el[1]} times`);
   })
}

wordOccurences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);

