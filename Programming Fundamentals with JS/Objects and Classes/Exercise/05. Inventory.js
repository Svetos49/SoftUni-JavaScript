function inventory(input) {
  let result = [];
  for(line of input) {
    
    let [name, level, items] = line.split(' / ');
    level = Number(level);
    //items = items.split(', ')
    let hero = {
        name,
        level,
        items
    }
    result.push(hero);
    
  }
   
   result.sort((a, b) => a.level - b.level)
         .forEach((el) => {
            console.log(`Hero: ${el.name}`);
            console.log(`level => ${el.level}`);
            console.log(`items => ${el.items}`);
         })
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);