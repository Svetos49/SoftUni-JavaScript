function matchFullName(str) {
  let names = [];
 let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
   let matches = str.match(pattern);
//   let matches = pattern.exec(str);
//   while(matches !== null) {
//      names.push(matches[0]);
//     matches = pattern.exec(str);
//   }
//   console.log(names.join(' '));
console.log(matches.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");