function plantDiscover(input) {
  let count = Number(input.shift());
  let plants = {};
  let plant = '';
  let rating = 0;
 
  let rarity = 0;
  while(count > 0) {
    let [plant, rarity] = input.shift().split('<->');
    rarity = Number(rarity);
    plants[plant] = [rarity];
     count--;
  }
  while(input[0] !== "Exhibition") {
    let [command, str] = input[0].split(':');
    
    if(command == 'Rate') {
        arr = str.split(' - ');
        plant = arr[0].trim();
        rating = Number(arr[1]);
      if(!plants.hasOwnProperty(plant)) {
      console.log('error');
      } else  {
       if(plants[plant].length == 1) {
          plants[plant][1] = '';
       }
      
       plants[plant][1] += ' ' + rating;
      }
    } else if(command == 'Update') {
        arr = str.split(' - ');
        plant = arr[0].trim();
        let newRarity = Number(arr[1]);
        plants[plant][0] = newRarity;
    } else if(command == 'Reset') {
        plant = str.trim();
        plants[plant].splice(1,1, '')

    }
    
    input.shift();
  }
  console.log("Plants for the exhibition:");

   for(plant in plants) {
    let sumRate = 0;
    let avg = 0;
     rating = plants[plant][1];
     if(rating.length > 0) {
    rating = rating.split(' ');
    rating = rating.slice(1).map(Number);
     if(rating.length > 1) {
         for(let el of rating) {
           sumRate += el;
         }
         avg = sumRate / rating.length;
     } else {
         avg = rating[0];
     } 
     } else {
      avg = 0;
     }
     

     console.log(`- ${plant}; Rarity: ${plants[plant][0]}; Rating: ${avg.toFixed(2)}`);
   }
  
}

plantDiscover(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);