function adAstra(input) {
    input = input[0]
  let pattern = /([#|])(?<product>[A-Za-z ]+)\1(?<expiration>\d+\/[0-9]+\/[0-9]+)\1(?<calories>\d+)\1/g;
  let matches = pattern.exec(input);
  let result = '';
  let calories = 0;
  let sumCalories = 0;
  while(matches !== null) {
     calories = Number(matches.groups.calories);
     sumCalories += calories;
     result += `Item: ${matches.groups.product}, Best before: ${matches.groups.expiration}, Nutrition: ${calories}` + '\n';
     matches = pattern.exec(input)
  }
  let days = Math.floor(sumCalories / 2000);
  
  console.log(`You have food to last you for: ${days} days!`);
  console.log(result);
}


// adAstra([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
//     ]
//     );

 adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
 );   