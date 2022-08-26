function travelTime(input) {
   let travel = {};
   for (line of input) {
      let [country, town, travelCost] = line.split(' > ');
      travelCost = Number(travelCost);
      if (travel.hasOwnProperty(country) == false) {
         travel[country] = [];
         travel[country].push(town, travelCost);
      } else {
         let index = travel[country].indexOf(town);
         if(index != -1) {
            if(travelCost < travel[country][index + 1]) {
               travel[country][index + 1] = travelCost;
            }
         } else {
            if(travelCost < travel[country][1]) {
               travel[country].unshift(town, travelCost);
           } else {
               travel[country].push(town, travelCost);
           }
         }
      }
     

   }
   let sorted = Object.entries(travel).sort((a, b) => a[0].localeCompare(b[0]));
   
   for (let line of sorted) {
      let arr = line[1];
      let innerLine = '';
      for (let i = 0; i < arr.length; i += 2) {
           innerLine += `${arr[i]} -> ${arr[i + 1]} `; 
      }
       console.log(`${line[0]} -> ${innerLine}`);
   }

}


// function travelTime(arr) {
//    let obj = {};
//  arr.forEach(line => {
//     let[country, town, cost] = line.split(' > ');
//     cost = Number(cost);
//     if(!obj.hasOwnProperty(country)) {
//         obj[country] = [];
//         obj[country].push(town, cost);
//     } else {
//         let index = obj[country].indexOf(town);
//         if(index !== -1) {
//             if(cost < obj[country][index + 1]) {
//                 obj[country][index + 1] = cost;
//             }
//         } else {
//             if(cost < obj[country][1]) {
//                 obj[country].unshift(town, cost);
//             } else {
//                 obj[country].push(town, cost);
//             }
//         }
//     }
//    });
//   let result = Object.keys(obj).sort((a, b) => a.localeCompare(b));
//   let j = 0;
//   result.forEach(array => {
//       let innerLine = '';
//       for(let i = 0; i < obj[array].length; i+= 2) {
//           innerLine += obj[array][i] + ' -> ' + obj[array][i + 1] + ' ';
//       }
//       let outerLine = result[j++] + ' -> ';
//       console.log(outerLine + innerLine);
//   });
// }


travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000",
   "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);



