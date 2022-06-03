function fitnessCard(input) {
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let typeSport = input[3];
    let cardPrice = 0;

    switch (typeSport) {
        case 'Gym': 
       
        if( gender == 'm') {
          cardPrice = 42;
        } else  {
           cardPrice = 35;
        }

        if(age <= 19) {
            cardPrice *= 0.80;
         }
            break;
        case 'Boxing':
            if(gender == 'm') {
                cardPrice = 41;
              } else {
                 cardPrice = 37;
              }
      
              if(age <= 19) {
                  cardPrice *= 0.80;
               }
            break;
        case 'Yoga':
            if(gender == 'm') {
                cardPrice = 45;
              } else {
                 cardPrice = 42;
              }
      
              if(age <= 19) {
                  cardPrice *= 0.80;
               }
            break;
        case 'Zumba':
            if(gender == 'm') {
                cardPrice = 34;
              } else {
                 cardPrice = 31;
              }
      
              if(age <= 19) {
                  cardPrice *= 0.80;
               }
            break;
        case 'Dances':
            if(gender == 'm') {
                cardPrice = 51;
              } else {
                 cardPrice = 53;
              }
      
              if(age <= 19) {
                  cardPrice *= 0.80;
               }
            break;
        case 'Pilates':
            if(gender == 'm') {
                cardPrice = 39;
              } else {
                 cardPrice = 37;
              }
      
              if(age <= 19) {
                  cardPrice *= 0.80;
               }
            break;
    }
    if(budget >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${typeSport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(cardPrice - budget).toFixed(2)} more.`);
    }
    
}

fitnessCard([20, 'f', 15, 'Yoga']);