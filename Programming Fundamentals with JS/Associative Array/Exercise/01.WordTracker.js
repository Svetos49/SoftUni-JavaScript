function wordTracker(input) {
    let obj = {};
    
   let words = input.shift().split(' ');
   for(let word of words){
      obj[word] = 0;
      for(str of input) {
         if(word == str) {
           let oldCount = obj[word]; 
          obj[word] += 1 
         }
      }
   }
   let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);  
   
    sorted.forEach(el => {
       console.log(`${el[0]} - ${el[1]}`);
   });
}
   

wordTracker([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]);

    
    
    
    
    