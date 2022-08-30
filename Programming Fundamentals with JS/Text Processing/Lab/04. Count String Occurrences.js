// function countStringOccurences(str, word) {
//   let count = 0;
//    str = str.split(' ');
//   for(let currentWord of str) {
//       if(currentWord == word) {
//         count++;
//       }
//   }
//   console.log(count);
// }


function countStringOccurences(str, word) {
    let text = str.split(' ');
    let count = 0;
    let index = text.indexOf(word);
 
    while(index != -1) {
        
        index = text.indexOf(word, index + 1);
        count++;
    }
    console.log(count);
 }
countStringOccurences('This is a word and it also is a sentence',

'is');