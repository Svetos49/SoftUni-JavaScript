function pascalCaseSplitter(str) {
let result = '';
 for(let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    
    if(code >= 65 && code <= 90) {
       result += ' ' + str[i];
      
       continue;
    } else {
        result += str[i];
        
    }
 }
 console.log(result.trim().split(' ').join(', '));
}


// function pascalCaseSpliter(str) {
//     let result = [];
//     let capInd = 0;
//     for(let i = 1; i < str.length; i++) {
//         if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
//             let word = str.substring(capInd, i);
//             result.push(word);
//             capInd = i;
//         }
//     }
//       result.push(str.substring(capInd, str.length));
//       console.log(result.join(', '));
//    }

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');