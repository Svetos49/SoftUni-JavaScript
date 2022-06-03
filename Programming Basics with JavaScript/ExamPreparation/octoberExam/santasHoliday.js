function santasHoliday(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let grade = input[2];

    let priceRoom = 18.00;
    let priceApartment = 25.00;
    let presidentApartment = 35.00;
    let price = 0;

    switch (typeOfRoom) {
        case 'room for one person':
            price = priceRoom * (days - 1);
             
            break;
        case 'apartment':
            if(days < 10) {
                price = (priceApartment * (days - 1)) * 0.70;
            } else if(days >= 10 && days <= 15) {
                price = (priceApartment * (days - 1)) * 0.65;
            } else {
                price = (priceApartment * (days - 1)) * 0.50; 
            }
            break;
        case 'president apartment':
            if(days < 10) {
                price = (presidentApartment * (days - 1)) * 0.90;
            } else if(days >= 10 && days <= 15) {
                price = (presidentApartment * (days - 1)) * 0.85;
            } else {
                price = (presidentApartment * (days - 1)) * 0.80;
            }
            break;
    }
       if(grade == 'positive') {
           price *= 1.25;
           
       } else {
           price *= 0.90;
       }
       console.log(price.toFixed(2));
}

santasHoliday(['30', 'president apartment', 'negative']);