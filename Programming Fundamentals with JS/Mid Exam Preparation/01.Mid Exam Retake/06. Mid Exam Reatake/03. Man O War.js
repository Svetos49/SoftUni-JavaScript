function manWar(input) {
    let statusPirateShip = input.shift().split('>').map(Number);
    let statusWarship = input.shift().split('>').map(Number);
    let maximumHealth = Number(input.shift());
    let sectionHealth = 0;
    let isShipSink = false;
    let line = input.shift();

    while (line  != 'Retire') {
        let [command, item1, item2, item3] = line.split(' ');
        item2 = Number(item2);
        item3 = Number(item3);
        switch (command) {
            case 'Fire':
                if (item1 < 0 || item1 >= statusWarship.length) {
                    line = input.shift();
                    continue;
                }
                sectionHealth = statusWarship[item1] - item2;
                if (sectionHealth <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    isShipSink = true;
                    break;
                } else {
                    //statusWarship.splice(item1, 1, sectionHealth);
                    statusWarship[item1] -= item2
                }
                break;
            case 'Defend':
                if (item1 < 0 || item1 >= statusPirateShip.length || item2 < 0
                    || item2 >= statusPirateShip.length) {
                    line = input.shift();
                    continue;
                }
                for (let i = item1; i <= item2; i++) {
                    sectionHealth = statusPirateShip[i] - item3;
                    if (sectionHealth <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        isShipSink = true;
                        break;
                    }
                    //statusPirateShip.splice(i, 1, sectionHealth);
                    statusPirateShip[i] -= item3;
                }
                break;
            case 'Repair':
                if(item1 < 0 || item1 >= statusPirateShip.length) {
                    line = input.shift;
                    continue;
                }  
                sectionHealth = statusPirateShip[item1] + item2;
                if(sectionHealth > maximumHealth) {
                    sectionHealth = maximumHealth;
                }  
                statusPirateShip.splice(item1, 1, sectionHealth);
            break;
            case 'Status':
                let needRepair = statusPirateShip.filter(el => el < maximumHealth * 0.2);
                let count = needRepair.length;
                console.log(`${count} sections need repair.`); 
            break;
        }
        if (isShipSink) {
            break;
        }
       
        line = input.shift();
    }
    if(isShipSink == false) {
        let pirateSum = statusPirateShip.reduce((a, b) => a + b);
        let warshipSum = statusWarship.reduce((a, b) => a + b);

        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

manWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

    console.log('-----------------------------');

manWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);    