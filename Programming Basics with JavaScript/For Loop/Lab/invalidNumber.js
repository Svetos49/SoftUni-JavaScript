function invalidNumber(input) {
    let num = Number(input[0]);

    // if(num >= 100 && num <= 200 ||  num == 0) {
     
    // } else {
    //     console.log('invalid');
    // }

    let isValid = num >= 100 && num <=200 || num == 0;
    if(!isValid) {
        console.log('invalid');
    }
}

invalidNumber(['-1']);