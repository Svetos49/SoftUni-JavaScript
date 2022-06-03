function filmPremiere(input) {
    let filmName = input[0];
    let filmPack = input[1];
    let filmTickets = Number(input[2]);

    let bill = 0;
    switch (filmName) {
        case 'John Wick':
            if (filmPack == 'Drink') {
                bill = filmTickets * 12;
            } else if (filmPack == 'Popcorn') {
                bill = filmTickets * 15;
            } else {
                bill = filmTickets * 19;
            }
            break;
        case 'Star Wars':
            if (filmPack == 'Drink') {
                bill = filmTickets * 18;
            } else if (filmPack == 'Popcorn') {
                bill = filmTickets * 25;
            } else {
                bill = filmTickets * 30;
            }

            if (filmTickets >= 4) {
                bill = bill * 0.70;
            }
            break;
        case 'Jumanji':
            if (filmPack == 'Drink') {
                bill = filmTickets * 9;
            } else if (filmPack == 'Popcorn') {
                bill = filmTickets * 11;
            } else {
                bill = filmTickets * 14;
            }

            if (filmTickets == 2) {
                bill *= 0.85;
            }
            break;
    }
    console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}

filmPremiere(['John Wick', 'Drink', '6']);

filmPremiere(['Star Wars', 'Popcorn', '4'])

