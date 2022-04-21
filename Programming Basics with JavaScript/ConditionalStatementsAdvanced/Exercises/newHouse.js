function newHouse(input) {
    let typeOfFlowers = input[0];
    let count = Number(input[1]);
    let buget = Number(input[2]);
    let price = 0;

    if (typeOfFlowers == 'Roses') {
        if (count > 80) {
            price = (count * 5) * 0.90;
        } else {
            price = count * 5;
        }
    } else if(typeOfFlowers == 'Dahlias') {
        if(count > 90) {
           price = (count * 3.80) * 0.85;
        } else{
           price = count * 3.80;
        }
    }

    else if(typeOfFlowers == 'Tulips') {
        if(count > 80) {
          price = (count * 2.80) * 0.85;
        } else{
           price = count * 2.80; 
        }
    }

    else if(typeOfFlowers == 'Narcissus') {
        if(count < 120) {
           price = (count * 3) * 1.15;
        } else{
            price = count * 3;
        }
    }

    else if(typeOfFlowers == 'Gladiolus') {
        if(count < 80) {
           price = (count * 2.50) * 1.20;
        } else{
           price = count * 2.50; 
        }
    }
    let difference = Math.abs(price - buget);
    if(buget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${typeOfFlowers} and ${difference.toFixed(2)} leva left. `);
    } else if(buget < price) {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }
}

  newHouse(['Tulips', '88', '260']);