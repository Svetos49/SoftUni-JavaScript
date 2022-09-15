// function pirates(input) {
//      input.pop();
//      let sailIndex = input.indexOf('Sail');
//      let townsInput = input.slice(0, sailIndex);
//      let actionInput = input.slice(sailIndex + 1);

//      let towns = {};

//      for(let townLine of townsInput) {
//         let [town, population, gold ] = townLine.split('||');
//         population = Number(population);
//         gold = Number(gold);
//         if(!towns[town]) {
//             towns[town] = {
//                 population: 0,
//                 gold: 0,
//             }
//             towns[town].population += population;
//             towns[town].gold += gold;
//         }
        
//     }

//     for(let currentAction of actionInput) {
//          currentAction = currentAction.split('=>');
//         let action = currentAction[0];
//         let town = currentAction[1];

//         if(action == 'Plunder') {
//             population = Number(currentAction[2]);
//             currentGold = Number(currentAction[3]);
//            towns[town].population -= population;
//            towns[town].gold -= currentGold;

//            console.log(`${town} plundered! ${currentGold} gold stolen, ${population} citizens killed.`);

//            if(towns[town].population <= 0 || towns[town].cold <= 0) {
//              delete towns[town];
//              console.log(`${town} has been wiped off the map!`);
//            }
//         } else if(action == 'Prosper') {
//             currentGold = Number(currentAction[2]);
//             if(currentGold < 0) {
//                 console.log("Gold added cannot be a negative number!");
               
//              } else {
//                 towns[town].gold += currentGold;
//                 console.log(`${currentGold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);

//              }
//         }
        
//     }
//     let townsEntries = Object.entries(towns);
//     if(townsEntries.length == 0) {
//     console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
//     } else {
//         console.log(`Ahoy, Captain! There are ${townsEntries.length} wealthy settlements to go to:`);
//         townsEntries.sort((a, b) => {
//             return b[1].gold - a[1].gold || a[0].localeCompare(b[0]);
//        })
//         for(let currentTown of townsEntries) {
//             let townName = currentTown[0];
//             let townPropeties = currentTown[1];
//             console.log(`${townName} -> Population: ${townPropeties.population} citizens, Gold: ${townPropeties.gold} kg`);
//         }
//     }
// }


function pirates(input) {
  
    let actions = {
     Plunder(towns, townName, pop, gold) {
       [pop, gold] = [Number(pop), Number(gold)];
      //subtruct population and gold from town
   
     let town = towns[townName];
     town.pop -= pop;
     town.gold -= gold;
     // print report
     console.log(`${townName} plundered! ${gold} gold stolen, ${pop} citizens killed.`);
     // if either pop or gold reaches 0 -> delet town and print report
     if(town.pop == 0 || town.gold == 0) {
       console.log(`${townName} has been wiped off the map!`);
       delete towns[townName];
     }
   },
   
    Prosper(towns, townName, gold) {
      gold = Number(gold);
      if(gold < 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
         // add gold to treasure
      let town = towns[townName];
     town.gold += gold;
      // print report
      console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`);
      }
    
   }
  }
   
  let towns = {};
     // parse input town information
     let line;
  
     while((line = input.shift()) != 'Sail') {
     let [townName, pop, gold] = line.split('||')
      if(towns.hasOwnProperty(townName) == false) {
         towns[townName] = {pop: 0, gold: 0}
      }
        towns[townName].pop += Number(pop);
        towns[townName].gold += Number(gold);
     }
      
  
     // parse and execute commands
     while((line = input.shift()) != 'End') {
       let [actionName, townName, ...params] = line.split('=>');
      //  let actionName = tokens[0];
      //  let townName = tokens[1];
       let action = actions[actionName];
       action(towns, townName, ...params);
       // -- plunder
  
      //-- prosper
    }
    // sort and print result
  
    let sorted = Object.entries(towns).sort(compareTowns);
    if(sorted.length > 0) {
      console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
       for(let town of sorted) {
  
         console.log(`${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`);
       }
    } else {
      console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
  
    function compareTowns([nameA, townA], [nameB, townB]) {
      return townB.gold - townA.gold || nameA.localeCompare(nameB);
  
      //  a[0] = townNameA
      //  b[0] = townNameB
  
      //  a[1] = {pop: 1000, gold: 10}
      //  b[1] = {pop: 2000,gold: 20}
    }
  }


pirates((["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail",

"Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]));
console.log('-------------------------------------------------------------------');
pirates((["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail",
 "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]))