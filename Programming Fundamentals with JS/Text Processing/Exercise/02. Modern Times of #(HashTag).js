// function hashTag(str) {
//     arr = str.split(' ');
//    for(let word of arr) {
//     if(word.length > 1) {
//         if(word[0] == '#') {
//             console.log(word.substring(1));
//         }
//     }
//    }
// }

function hashTag(str) {
    let arr = str.split(' ');
 
   arr.forEach(word => {
       if(word[0] == '#' && word.length > 1) {
          word = word.slice(1);
          let isOnlyLetters = true;
          for(let char of word) {
             let code = char.charCodeAt();
             if(code < 64 || code > 90 && code < 97 || code > 122) {
                isOnlyLetters = false;
                break;
             }
          }
          if(isOnlyLetters) {
             console.log(word);
          }
       }
 
    });
 }

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');