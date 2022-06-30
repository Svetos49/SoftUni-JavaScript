function solve(input) {
    let health = 100;
    let coins = 0;
    let roomsCount = 0;
    let arr = input[0].split('|');
    
    let isLived = true;
    
    for (let i = 0; i < arr.length; i++) {
        let room = arr[i].split(' ');
        let  number = Number(room[1]);
        
        if (room[0] == 'potion') {
            roomsCount++;
          let current = health
            health += number;
            if (health > 100) {
                health = 100;
                number = 100 - current;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (room[0] == 'chest') {
            roomsCount++;
            console.log(`You found ${number} coins.`);
            coins += number;
        }  else {
            roomsCount++;
            health -= number;
            let currentMonster = room[0];
            if (health > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${roomsCount}`);
                isLived = false;
                break;
            }
        }

    
    }

    if(isLived) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
 

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-----------------------------------------------------');
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);