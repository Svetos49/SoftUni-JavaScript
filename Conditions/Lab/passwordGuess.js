function passwordGuess(input) {
  let passG = input[0];
  let realPass = 's3cr3t!P@ssw0rd'

  if(passG == realPass) {
      console.log('Welcome');
  } else {
      console.log('Wrong password!');
  }
}

passwordGuess(['qwerty']);