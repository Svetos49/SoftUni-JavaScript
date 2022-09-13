// function secretChat(input) {
//  let message = input.shift();

  
//  while(input[0] != 'Reveal') {
//     let tokens = input[0].split(':|:');
//     let command = tokens[0];
//      if(command == 'InsertSpace') {
//       let index = +tokens[1];
//       let str1 = message.slice(0, index);
//       let str2 = ' ';
//       let str3 = message.slice(index)
//       message = str1 + str2 + str3;
//       console.log(message);
     
//      } else if(command == 'Reverse') {
//         let str = tokens[1];
//         if(message.includes(str)) {
//          message.replace(str, '');
//          str = message.split('');
        
//          let reverseStr = []
//          str.forEach(el => {
//             let ch = str.shift()
//             reverseStr.unshift(ch);
//          });
//          message = message + reverseStr.join('');
//          console.log(message);
//         } else {
//          console.log('error');
//         }
//      } else if(command == 'ChangeAll') {
//        let substr = tokens[1];
//        let replacement = tokens[2];
//        while(message.includes(substr)) {
//        message = message.replace(substr, replacement);
//        }
//        console.log(message);
//      }
    
//      input.shift();
//   }
//   console.log(`You have a new text message: ${message}`);
// }


function secretChat(arr) {
   let str = arr.shift();

   for(const line of arr) {
       let[com, a, b] = line.split(':|:');
       if(com === 'InsertSpace') {
           str = str.substring(0, a) + ' ' + str.substring(a);
       } else if(com == 'Reverse') {
          if(str.includes(a)) {
              let i = str.indexOf(a);
              let reversed = a.split('').reverse().join('');
              str = str.substring(0, i) + str.substring(i + a.length) + reversed;
            
          } else {
              console.log('error');
              continue;
          }
       } else if(com == 'ChangeAll') {
          let i = str.indexOf(a)
           while( i  !== -1) {
            str = str.substring(0, i) + b + str.substring(i + a.length);   
            i = str.indexOf(a);
           }
       } else if(com == 'Reveal') {
           console.log(`You have a new text message: ${str}`);
           break;
       }
       console.log(str);
   }
}


secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);