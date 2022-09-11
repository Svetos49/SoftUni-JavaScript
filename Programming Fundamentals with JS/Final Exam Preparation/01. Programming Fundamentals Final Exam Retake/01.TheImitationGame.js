function imitationGame(input) {
    let password = input.shift();
     
    // let commandParser = {
    //     'Move': (password, firstN) => {
    //        firstN = Number(firstN);
    //        let part1 = password.slice(0, firstN);
    //        let part2 = password.slice(firstN);
    //       return password = part2 + part1;
    //     },
    //     'Insert': (password, index, value ) => {
    //          index = Number(index);
    //       return   password = password.slice(0, index) + value + password.slice(index);
    //     },
    //     'ChangeAll': (password, substring, replacement) => {
    //          return password.replace(new RegExp(substring, 'g'), replacement);
    //     },
    // }

    // input.forEach(line => {
    //     if (line != 'Decode') {
    //         let [command, ...tokens] = line.split('|');
    //         let oldPassword = password;
    //          password = commandParser[command](password, ...tokens);
    //         // if (oldPassword !== password) {
    //         //     console.log(password);
    //         // }
    //     }
    // });
    
    while(input[0] !== 'Decode') {
        let tokens = input[0].split('|');
        let command = tokens[0];
        if(command == 'Move') {
            firstN = Number(tokens[1]);
            let part1 = password.slice(0, firstN);
            let part2 = password.slice(firstN);
             password = part2 + part1;
        } else if(command == 'Insert') {
          let index = Number(tokens[1]);
          let value = tokens[2];
          password = password.slice(0, index) + value + password.slice(index);
        } else if(command == 'ChangeAll') {
           let substring = tokens[1];
           let replacement = tokens[2];
         //password = password.replace(new RegExp(substring, 'g'), replacement);
         while(password.includes(substring)) {
            password = password.replace(substring, replacement);
         }
        }
       
        input.shift();
     }
    
    console.log(`The decrypted message is: ${password}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);