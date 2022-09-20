function roadRadar(speed, area) {
    let limit = 0;
    let difference = speed - limit;
    let status = '';
    switch(area) {
       
        case 'motorway': limit = 130; difference = speed - limit;
            if(difference <= 0){
               console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
            }  else if(difference > 20 && difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
            }  else if(difference > 40) {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
            }
            break; 
        case 'interstate': limit = 90; difference = speed - limit;
        if(difference <= 0){
           console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }  else if(difference <= 20 ) {
            status = 'speeding'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else if(difference > 20 && difference <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }  else if(difference > 40) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }
            break;
        case 'city': limit = 50; difference = speed - limit;
        if(difference <= 0){
           console.log(`Driving ${speed} km/h in a ${limit} zone`);
            break;
        } else if(difference <= 20) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }  else if(difference > 20 && difference <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }  else if(difference > 40) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }
         case 'residential': limit = 20; difference = speed - limit;
         if(difference <= 0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
         } else if(difference <= 20) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }  else if(difference > 20 && difference <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }  else if(difference > 40) {
            status = 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`); 
        }
             break;           
        }
            
    }


 roadRadar(40, 'city');
 roadRadar(120, 'interstate');