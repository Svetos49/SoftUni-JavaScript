function snookerChampionship(input) {
    let stageOfChamp = input[0];
    let typeOfTickets = input[1];
    let ticketsCount = Number(input[2]);
    let photo = input[3];


    let sumTickets = 0;

    switch (stageOfChamp) {
        case 'Quarter final':
            if (typeOfTickets == 'Standart') {
                sumTickets = ticketsCount * 55.50;
            } else if (typeOfTickets == 'Premuim') {
                sumTickets = ticketsCount * 105.20;
            } else if (typeOfTickets == 'VIP') {
                sumTickets = ticketsCount * 118.90;
            }
            break;
        case 'Semi final':
            if (typeOfTickets == 'Standart') {
                sumTickets = ticketsCount * 75.88;
            } else if (typeOfTickets == 'Premuim') {
                sumTickets = ticketsCount * 125.22;
            } else if (typeOfTickets == 'VIP') {
                sumTickets = ticketsCount * 300.40;
            }
            break;
        case 'Final':
            if (typeOfTickets == 'Standart') {
                sumTickets = ticketsCount * 110.10;
            } else if (typeOfTickets == 'Premium') {
                sumTickets = ticketsCount * 160.66;
            } else if (typeOfTickets == 'VIP') {
                sumTickets = ticketsCount * 400.00;
            }
            break;
    }
     let totalSum = 0;
    if(sumTickets > 4000) {
      totalSum = sumTickets * 0.75;
    } else if(sumTickets > 2500 && sumTickets <= 4000) {
        if(photo == 'Y') {
            totalSum = sumTickets * 0.90;
            totalSum += (ticketsCount * 40);
        } else {
            totalSum = sumTickets + 0.90;
        }
    } else if(sumTickets <= 2500) {
        if(photo == 'Y') {
            totalSum = sumTickets;
            totalSum += (ticketsCount * 40);
        } else {
            totalSum = sumTickets;
        }
    }
       console.log(totalSum.toFixed(2));
}

// snookerChampionship(['Final', 'Premium', '25', 'Y'])
// snookerChampionship(['Semi final', 'VIP', '9', 'Y']);


snookerChampionship(['Quarter final', 'Standart', '11', 'N'])