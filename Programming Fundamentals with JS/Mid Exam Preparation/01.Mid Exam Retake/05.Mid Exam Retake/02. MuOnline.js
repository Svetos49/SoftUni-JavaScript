// function muOnline(input) {
//   let health = 100;
//   let bitcoins = 0;
//   let count = 0;

//   let arr = input.split('|');
//   for (command of arr) {
//     let [room, num] = command.split(' ');
//     num = Number(num);
//     count++;

//     if (room == 'potion') {
//       if (num + health > 100) {
//         console.log(`You healed for ${100 - health} hp.`);
//         health = 100;
//         console.log(`Current health: ${health} hp.`);
//       } else {
//         console.log(`You healed for ${num} hp.`);
//         health += num;
//         console.log(`Current health: ${health} hp.`);
//       }
//     } else if (room == 'chest') {
//       bitcoins += num;
//       console.log(`You found ${num} bitcoins.`);
//     } else if (room == 'rat') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     } else if (room == 'bat') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     } else if (room == 'orc') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     } else if (room == 'boss') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     } else if (room == 'snake') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     } else if (room == 'cat') {
//       health -= num;
//       if (health > 0) {
//         console.log(`You slayed ${room}.`);
//       } else {
//         console.log(`You died! Killed by ${room}.`);
//         console.log(`"Best room: ${count}`);
//         break;
//       }
//     }
//   }

//    if(health > 0) {
//     console.log("You've made it!");
//     console.log(`Bitcoins: ${bitcoins}`);
//     console.log(`Health: ${health}`);
//    }
// }


function muOnline(input) {
  // input
  let dungeons = input.split('|');
  let isAlive = true;
  let currentDungeon = 0;
  let health = 100;
  let coins = 0;
  //    calculate
  for (const dungeon of dungeons) {
    let dungeonSplit = dungeon.split(' ');
    let command = dungeonSplit[0];
    let value = Number(dungeonSplit[1]);
    currentDungeon++;
    if (command == 'potion') {
      let healedWith = value;
      //    health = Math.min(100, health + value);

      if (health + value > 100) {
        healedWith = 100 - health;
        health = 100;

      } else {
        health += value;
      }
      console.log(`You healed for ${healedWith} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == 'chest') {
      coins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      health -= value;

      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${currentDungeon}`);
        isAlive = false;
        break;
      }
      console.log(`You slayed ${command}.`);
    }
  }
  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
  }

}


muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");