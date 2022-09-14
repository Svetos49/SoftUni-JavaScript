function heroesofCodeanLogic(input) {
    let countHeroes = Number(input.shift());
    let heroes = {};

    while (countHeroes > 0) {
        let [heroName, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);

        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200;
        }
        heroes[heroName] = [hp, mp];

        countHeroes--;
    }
    let [command, hero, amount, name] = input.shift().split(' - ');
    while (command != 'End') {
        switch (command) {
            case 'CastSpell':
                if (heroes.hasOwnProperty(hero)) {
                    let currentHeroArr = heroes[hero];
                    let currentMp = currentHeroArr[1];
                    amount = Number(amount);
                    if (currentMp > amount) {
                        currentMp -= amount;
                        currentHeroArr[1] = currentMp;
                        heroes[hero] = currentHeroArr;
                        console.log(`${hero} has successfully cast ${name} and now has ${currentMp} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${name}!`);
                    }
                }
                break;
            case 'TakeDamage':
              if(heroes.hasOwnProperty(hero)) {
                let currentHeroArr = heroes[hero];
                let currentHp = currentHeroArr[0];
                amount = Number(amount);
                currentHp -= amount;
                if(currentHp > 0) {
                    currentHeroArr[0] = currentHp;
                    heroes[hero] = currentHeroArr;
                    console.log(`${hero} was hit for ${amount} HP by ${name} and now has ${currentHp} HP left!`);
                } else {
                    delete heroes[hero];
                    console.log(`${hero} has been killed by ${name}!`);
                }
              }    
            break;
            case 'Recharge':
             if(heroes.hasOwnProperty(hero)) {
                let currentHeroArr = heroes[hero];
                amount = Number(amount);
                let currentMp = currentHeroArr[1];
                neededMp = 200 - currentMp;
                currentMp += amount;
                if(currentMp > 200) {
                    currentMp = 200;
                    amount = neededMp;
                   
                }
                currentHeroArr[1] = currentMp;
                heroes[hero] = currentHeroArr;
                console.log(`${hero} recharged for ${amount} MP!`);
             }    
            break;
            case 'Heal':
                if(heroes.hasOwnProperty(hero)) {
                    let currentHeroArr = heroes[hero];
                    let currentHp = currentHeroArr[0];
                    amount = Number(amount);
                    neededHp = 100 - currentHp;
                    currentHp += amount;
                    if(currentHp > 100) {
                        currentHp = 100;
                        amount = neededHp;
                        
                    }
                    currentHeroArr[0] = currentHp;
                    heroes[hero] = currentHeroArr;
                    console.log(`${hero} healed for ${amount} HP!`);
                }    
            break;

        }
        [command, hero, amount, name] = input.shift().split(' - ');
    }

    let heroesArr = Object.entries(heroes);
    let sorted = heroesArr.sort(sortedHeroes);
    

    function sortedHeroes(heroA, heroB) {
       let heroNameA = heroA[0];
       let heroNameB = heroB[0];
       let pointsHpheroA = heroA[1][0];
       let pointHpheroB = heroB[1][0];
       //return pointHpheroB - pointsHpheroA || heroNameA.localeCompare(heroNameB);
       if(pointHpheroB == pointsHpheroA) {
        return heroNameA.localeCompare(heroNameB);
       } else {
        return pointHpheroB - pointsHpheroA;
       }
    }
    let sortHeroes = Object.fromEntries(sorted);
    for(let hero in sortHeroes) {
        console.log(hero);
        let points = sortHeroes[hero];
        console.log(`  HP: ${points[0]}`);
        console.log(`  MP: ${points[1]}`);
    }
    
}

// heroesofCodeanLogic(["2", "Solmyr 85 120", "Kyrre 99 50",
//     "Heal - Solmyr - 10", "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
console.log('----------------------------------------------------');


heroesofCodeanLogic(["4", "Adela 90 150", "SirMullich 70 40",

"Ivor 1 111",

"Tyris 94 61",

"Heal - SirMullich - 50",

"Recharge - Adela - 100",

"CastSpell - Tyris - 1000 - Fireball",

"TakeDamage - Tyris - 99 - Fireball",

"TakeDamage - Ivor - 3 - Mosquito",

"End"]);