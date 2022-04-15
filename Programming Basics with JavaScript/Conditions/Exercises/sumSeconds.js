function sumSeconds(input) {
    let firstT = Number(input[0]);
    let secondT = Number(input[1]);
    let thirdT = Number(input[2]);

    let allT = firstT + secondT + thirdT;
    let minute = Math.floor(allT / 60);
    let restS = allT % 60;

    if(restS < 10) {
       console.log(`${minute}:0${restS}`);
    } else {
        console.log(`${minute}:${restS}`);
    }
}

sumSeconds(['35', '45', '44' ]);