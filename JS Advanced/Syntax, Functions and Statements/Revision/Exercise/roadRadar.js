function roadRadar(speed, place) {
    let limit = 0;
    let speeding;
    switch (place) {
        case 'motorway': limit = 130;  speeding = Math.abs(speed - limit);
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                if (speeding <= 20) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`);
                } else if (speeding > 20 && speeding <= 40) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving`);
                }
            }
            break;

        case 'interstate': limit = 90;  speeding = Math.abs(speed - limit);
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                if (speeding <= 20) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`);
                } else if (speeding > 20 && speeding <= 40) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving`);
                }
            }
            break;

        case 'city': limit = 50;  speeding = Math.abs(speed - limit);
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                if (speeding <= 20) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`);
                } else if (speeding > 20 && speeding <= 40) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving`);
                }
            }
            break;

        case 'residential': limit = 20;  speeding = Math.abs(speed - limit);
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                if (speeding <= 20) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - speeding`);
                } else if (speeding > 20 && speeding <= 40) {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - reckless driving`);
                }
            }
            break;


    }
}

roadRadar(40, 'city')