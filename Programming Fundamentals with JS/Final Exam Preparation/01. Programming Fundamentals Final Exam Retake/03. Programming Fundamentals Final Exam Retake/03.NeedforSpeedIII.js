// function needForSpeed(input) {
//     let numbersCar = Number(input.shift());
//     let cars = {};
//     while (numbersCar > 0) {
//         let [car, mileage, fuel] = input.shift().split('|');
//         mileage = Number(mileage);
//         fuel = Number(fuel);
//         cars[car] = [mileage, fuel];
//         numbersCar--;
//     }

//     while (input[0] != 'Stop') {
//         let tokens = input[0].split(' : ');
//         let command = tokens[0];
//         let car = '';
//         let fuel = 0;
//         let distance = 0;
//         let currentFuel = 0;
//         let currentDistance = 0;
//         switch (command) {
//             case 'Drive':
//                 car = tokens[1];
//                 distance = Number(tokens[2]);
//                 fuel = Number(tokens[3]);
//                 currentFuel = cars[car][1];
//                 currentDistance = cars[car][0];
//                 if (currentFuel < fuel) {
//                     console.log("Not enough fuel to make that ride");
//                     break;
//                 } else {
//                     currentDistance += distance;
//                     cars[car][0] = currentDistance;
//                     currentFuel -= fuel;
//                     cars[car][1] = currentFuel;
//                 }
//                 if (currentDistance >= 100000) {
//                     console.log(`Time to sell the ${car}!`);
//                     delete cars[car];
                    
//                 }
//                 console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
//                 break;
//             case 'Refuel':
//                 car = tokens[1];
//                 fuel = Number(tokens[2]);
//                 currentFuel = cars[car][1];
//                 let neededFuel = 75 - currentFuel;
//               let refuel = cars[car][1] + fuel > 75 ? 75 - cars[car][1] : fuel;
//                cars[car][1] += refuel;
 
//                 // if ((currentFuel + fuel) > 75) {
//                 //     currentFuel = 75;
//                 //     cars[car][1] += neededFuel;
//                 //     //fuel = neededFuel;
//                 // } else {
//                 //     currentFuel += fuel;
//                 //     cars[car][1] = currentFuel;
//                 // }

//                 console.log(`${car} refueled with ${fuel} liters`);
//                 break;
//             case 'Revert':
//                 car = tokens[1];
//                 currentDistance = cars[car][0];
//                 let km = Number(tokens[2]);
//                 currentDistance -= km;
//                 if (currentDistance < 10000) {
//                     cars[car][0] = 10000;
//                 } else {
//                     cars[car][0] = currentDistance;
//                     console.log(`${car} mileage decreased by ${km} kilometers`);
//                 }
//                 break;
//         }

//         input.shift();
//      }
      
//       for(let car in cars) {
//         console.log(`${car} -> Mileage: ${cars[car][0]} kms, Fuel in the tank: ${cars[car][1]} lt.`);
//       }
     
// }


function needForSpeed(arr) {
    let n = Number(arr.shift());
    let fuelObj = {};
    let mileageObj = {};
 
    for(let i = 0; i < n; i++) {
        let[car, mileage, fuel] = arr.shift().split('|');
        fuelObj[car] = Number(fuel);
        mileageObj[car] = Number(mileage);
    }
    for(const line of arr) {
        let[com, car, distance, fuel] = line.split(' : ');
        distance = Number(distance);
        fuel = Number(fuel);
 
      if(com === 'Drive') {
        if(fuelObj[car] < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            mileageObj[car] += distance;
            fuelObj[car] -= fuel;
 
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if(mileageObj[car] >= 100000) {
                delete fuelObj[car];
                delete mileageObj[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
     } else if(com == 'Refuel') {
         fuel = distance;
         let refuel = fuelObj[car] + fuel > 75 ? 75 - fuelObj[car] : fuel;
         fuelObj[car] += refuel; 
         console.log(`${car} refueled with ${refuel} liters`);
      } else if(com == 'Revert') {
          mileageObj[car] -= distance;
          
          if(mileageObj[car] < 10000) {
            mileageObj[car] = 10000;
          } else {
             console.log(`${car} mileage decreased by ${distance} kilometers`); 
          }
      }
    }
    Object.keys(fuelObj)
    //.sort((a, b) => mileageObj[b] - mileageObj[a] || a.localeCompare(b))
    .forEach(car => {
      console.log(`${car} -> Mileage: ${mileageObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`);
    })
 }


needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);











