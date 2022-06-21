// function solve(group, type, day) {
//     let totalPrice = 0;
//     let price = 0;
//   if(day == 'Friday') {
//       if(type == 'Students') {
//           price = 8.45;
//          if(group >=30) {
//           totalPrice = (group * price) * 0.85;
//          } else {
//              totalPrice = group * price;
//          }
//       } else if(type == 'Business') {
//           price = 10.90;
//           if(group >=100) {
//             totalPrice = (group * price) * 0.9;
//           } else {
//               totalPrice = group * price;
//           }

//       } else if(type == 'Regular') {
//           price = 15;
//           if(group >=10 && group <= 20) {
//             totalPrice = (group * price) * 0.95;
//           } else {
//               totalPrice = group * price;
//           }
//       }
//   }

//   if(day == 'Saturday') {
//     if(type == 'Students') {
//         price = 9.80;
//        if(group >=30) {
//         totalPrice = (group * price) * 0.85;
//        } else {
//            totalPrice = group * price;
//        }
//     } else if(type == 'Business') {
//         price = 15.60;
//         if(group >=100) {
//           totalPrice = (group * price) * 0.9;
//         } else {
//             totalPrice = group * price;
//         }

//     } else if(type == 'Regular') {
//         price = 20;
//         if(group >=10 && group <= 20) {
//           totalPrice = (group * price) * 0.95;
//         } else {
//             totalPrice = group * price;
//         }
//     }
// }

// if(day == 'Sunday') {
//     if(type == 'Students') {
//         price = 10.46;
//        if(group >=30) {
//         totalPrice = (group * price) * 0.85;
//        } else {
//            totalPrice = group * price;
//        }
//     } else if(type == 'Business') {
//         price = 16;
//         if(group >=100) {
//           totalPrice = (group * price) * 0.9;
//         } else {
//             totalPrice = group * price;
//         }

//     } else if(type == 'Regular') {
//         price = 22.50;
//         if(group >=10 && group <= 20) {
//           totalPrice = (group * price) * 0.95;
//         } else {
//             totalPrice = group * price;
//         }
//     }
// }
//    console.log(`Total price: ${totalPrice.toFixed(2)}`);

// }

function solve(numOfGroop, typeOfGroop, day) {
    let price;
    let sum = 0;
    let totalSum = 0;
    if (typeOfGroop == 'Students') {
        switch (day) {
            case 'Friday': price = 8.45;
            sum = numOfGroop * price;
                break;
            case 'Saturday': price = 9.80;
            sum = numOfGroop * price;
                break;
            case 'Sunday': price = 10.46;
            sum = numOfGroop * price;
                break;
        }
       if(numOfGroop >= 30) {
           totalSum = sum * 0.85;
       } else {
           totalSum = sum;
       }
    } else if (typeOfGroop == 'Business') {
        switch (day) {
            case 'Friday': price = 10.90;
            sum = numOfGroop * price;
                break;
            case 'Saturday': price = 15.60;
            sum = numOfGroop * price;
                break;
            case 'Sunday': price = 16;
            sum = numOfGroop * price;
                break;
        }
       if(numOfGroop >= 100) {
           totalSum = (numOfGroop -10) * price;
       } else {
           totalSum = sum;
       } 
    }  else if (typeOfGroop == 'Regular') {
        switch (day) {
            case 'Friday': price = 15;
            sum = numOfGroop * price;
                break;
            case 'Saturday': price = 20;
            sum = numOfGroop * price;
                break;
            case 'Sunday': price = 22.50;
            sum = numOfGroop * price;
                break;
        }
        if(numOfGroop >= 10 && numOfGroop <=20) {
            totalSum = sum * 0.95;
        } else {
            totalSum = sum;
        }
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

solve(30, "Students", "Sunday");