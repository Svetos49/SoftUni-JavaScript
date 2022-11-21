// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);


//    function onClick () {
//     // 1. Select elements for input
//        let textAreaElement = document.querySelector('#inputs textarea');
//     // 2. Extract/Parse input data
//        let text = textAreaElement.value;
//        let inputArr = JSON.parse(text);

//     // 3. Add object to keep restaurants and workers data
//        let restaurants = {};
//     // 4. Fill restaurant object whith input data

//        for (let index = 0; index < inputArr.length; index++) {
//           let [restaurantName, workersString] = inputArr[index].split(' - ');
//           let inputWorkers = workersString.split(', ').map(w => {
//              let [name, salary] = w.split(' ');
//              return {name, salary: Number(salary)};
//           });

//           if(!restaurants[restaurantName]) {
//              restaurants[restaurantName] = {
//                 workers: [],
//                 getAverageSalary: function() {
//                    return this.workers.reduce((acc, el) => acc + el, 0) / this.workers.length;
//                   }
//              }
//           }

//        }
//       restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);

//     // 5. Calculate best restaurant 
//       let sortedRestaurants = Object.entries(restaurantName)
//       .sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
//       let bestRestaurant = sortedRestaurants[0];
//       let sortedWokers = bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary);
//       let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);
//       let bestSalary = sortedWokers[0].salary.toFixed(2);
//       let topRestaurantString = `Name: ${bestRestaurant[0]} Average Salary: ${averageSalary}`;
//       let workersString = sortedWokers
//       .map(x => `Name: ${x.name} with Salary: ${x.salary}`)
//       .join(' ');
//     // 6. Insert best restaurant and workers data into DOM
//       let bestRestaurantElement = document.querySelector('#bestRestaurant p');
//       let workersElement = document.querySelector('#workers p');

//       bestRestaurantElement.textContent = topRestaurantString;
//       workersElement.textContent = workersString;
// }

// }

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }
      let entries = Object.entries(output);
      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;
         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
          let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
          let print = '';

          result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
          document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)} `;
          document.querySelector('#workers p').textContent = print;
   }
}


["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]