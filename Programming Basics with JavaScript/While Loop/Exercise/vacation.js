function vacation(input) {
    // let neededMoney = Number(input[0]);
    // let availableM = Number(input[1]);
    // let index = 2;
    // let command = input[index];
    // index++
    
    // let counterSpend = 0;
    // let counterDays = 0;
    // while(command == 'spend' || command == 'save') {
    //     let money = Number(input[index]);
    //     counterDays++;
    //     index++
    //     if(command == 'spend') {
    //         availableM -= money;
    //         if(availableM < 0) {
    //             availableM = 0;
    //         }
    //          counterSpend++;
    //          if(counterSpend == 5) {
    //              console.log("You can't save the money.");
    //              console.log(counterDays);
    //              break;
    //          }
    //     } else {
    //         availableM += money;
    //         if(availableM >= neededMoney) {
    //         console.log(`You saved the money for ${counterDays} days.`);
    //         break;
    //         }
    //     }
    //     command = input[index];
    //     index++;

    // }

    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let daysCounter = 0;
    let counter = 0;
    let isCantSaveMoney = false;

    while(money < needMoney) {
        daysCounter++;
        let action = input[index];
        index++;
        let realMoney = Number(input[index]);
        index++;
        if(action === 'spend') {
            money -= realMoney;
            if(money < 0) {
                money = 0;
            }
            counter++;
        } else {
            money += realMoney;
            counter = 0;
        }

        if(counter == 5) {
            isCantSaveMoney = true;
            console.log("You can't save the money.");
            console.log(daysCounter);
              break;
        }
    }
      if(/*money >= needMoney*/ !isCantSaveMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

 vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);
vacation(['110', '60', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10']);