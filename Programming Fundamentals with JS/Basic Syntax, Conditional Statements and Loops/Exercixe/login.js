function solve(input) {
    let index = 0;
    let username = input[index++];
    let pass = username.split('').reverse().join('');
    for(i = 1; i < input.length; i++) {
        if(input[i] === pass) {
            console.log(`User ${username} logged in.`);
        } else {
            if(i == 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
 
 }

solve(['Acer','login','go','let me in','recA']);