function passwordGenerator(input) {
  let [firstStr, secondStr, thirdStr] = input;
  let concat = firstStr.concat(secondStr);
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let password = '';
  thirdStr = thirdStr.toLowerCase();
  let indexOfVowels = 0;
  for(let i = 0; i < concat.length; i++) {
    if(vowels.includes(concat[i])) {
        let indexOfChar = indexOfVowels % thirdStr.length;
        indexOfVowels++;
        let currentChar = thirdStr.charAt(indexOfChar);
       
        password += currentChar.toUpperCase();
    } else {
        password += concat[i]
    }
  }
  console.log(`Your generated password is ${password.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);