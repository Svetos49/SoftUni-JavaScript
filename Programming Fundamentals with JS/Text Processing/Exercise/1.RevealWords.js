function revealWords(str1, str2) {
  arr = str1.split(', ');
  for(let word of arr) {
    let starStr = '*'.repeat(word.length);
    str2 = str2.replace(starStr, word);
  }
  console.log(str2);

}

revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log('-----------------------------------');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');