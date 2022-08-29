function censoredWords(text, word) {
//   let replaced = text.replace(word, repeat(word));
//   while(replaced.includes(word)) {
//        replaced = text.replace(word, repeat(word));
//   }

//   function repeat(word) {
//      let repeated = '';
//      for(let i = 0; i < word.length; i++) {
//         repeated += '*';
//      }
//      return repeated;
//   }
//   return replaced

  while(text.includes(word)) {
    text = text.replace(word, '*'.repeat(word.length));
  }
  console.log(text);
}
censoredWords('A small sentence with some words', 'small');
 let result = censoredWords('A small sentence with some words', 'small');
 console.log(result);


