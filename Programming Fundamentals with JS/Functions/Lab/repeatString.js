function solve(str, repeat) {
   newStr = '';
   for(let i = 0; i < repeat; i++) {
       newStr += str;
       
   }
   return newStr;
}


console.log(solve("abc", 3));
solve("abc", 3);