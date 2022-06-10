function solve(day, age) {
    
  if(day == 'Weekday') {
    
     if(age >= 0 && age <=18) {
        console.log('12$');;
     } else if(age > 18 && age <= 64) {
        console.log('18$');
     } else if(age > 64 && age <=122) {
        console.log('12$');
     } else{
        console.log('Error!');
     }
  }

  if(day == 'Weekend') {
    
    if(age >= 0 && age <=18) {
       console.log('15$');
    } else if(age > 18 && age <= 64) {
        console.log('20$');
    } else if(age > 64 && age <=122) {
        console.log('15$');
    } else {
        console.log('Error!');
    }
 }

 if(day == 'Holiday') {
    
    if(age >= 0 && age <=18) {
       console.log('5$');
    } else if(age > 18 && age <= 64) {
        console.log('12$');
    } else if(age > 64 && age <=122) {
        console.log('10$');
    } else {
        console.log('Error!');
    }
 }
  
}

// function theatreProm(day, age) {
//     if (age >= 0 && age <= 18) {
//         switch (day) {
//             case 'Weekday':
//                 console.log('12$');
//                 break;
//             case 'Weekend': console.log('15$');
//                 break;
//             case 'Holiday': console.log('5$');
//                 break;
//         }
//     } else if (age > 18 && age <= 64) {
//         switch (day) {
//             case 'Weekday':
//                 console.log('18$');
//                 break;
//             case 'Weekend': console.log('20$');
//                 break;
//             case 'Holiday': console.log('12$');
//                 break;
//         }
//     } else if (age > 64 && age <= 122) {
//         switch (day) {
//             case 'Weekday':
//                 console.log('12$');
//                 break;
//             case 'Weekend': console.log('15$');
//                 break;
//             case 'Holiday': console.log('10$');
//                 break;
//         }
//     } else {
//        console.log('Error!')
//     }
// }

solve('Weekday', 222)