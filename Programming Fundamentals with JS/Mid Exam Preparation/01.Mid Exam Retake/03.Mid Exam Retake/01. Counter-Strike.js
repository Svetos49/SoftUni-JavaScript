function counterStrike(input) {
    let energy = Number(input.shift());
    let distance = input.shift();
    let wins = 0
    while (distance !== 'End of battle' && input.length !== 0 ) {
        distance = Number(distance);
        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy.`);
            break;
        }
        wins++;
        if (wins % 3 == 0) {
            energy -= distance;
            energy += wins
        } else {
            energy -= distance;
        }

       
        
        if (energy <= 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy.`);
            break;
        }
        distance = input.shift();
    }
   
    if (input[0] == 'End of battle') {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    } else if(input.length == 0) {
        if(distance != 'End of battle') {
            wins = 1;
            energy -= distance;
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
        } else {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
        }
        
    }
    
}

 counterStrike((["100", "10", "10", "10", "1", "2", "3", "73", "10"]));
 counterStrike((["200", "54", "14", "28", "13", "End of battle"]));

counterStrike(['1', '1']);
console.log('-----------------');
counterStrike(['1', 'End of battle']);