function plantDiscover(input) {
   let n = Number(input.shift());

   let plants = {};
   for(let i = 0; i < n; i++) {
       let line = input.shift();
       let [plant, rarity] = line.split('<->');
       rarity = Number(rarity);
       plants[plant] = {rarity, rating: []};
       
    }

    while(input[0] != 'Exhibition') {
        let line = input.shift().split(': ');
        let command = line[0];
        let [plant, param] = line[1].split(' - ');
        param = Number(param);
        
        
        switch(command) {
            case 'Rate':
                
               plants[plant].rating.push(param);  
            break;
            case 'Update':
            plants[plant].rarity = param;    
            break;
            case 'Reset':
             plants[plant].rating = 0;    
            break;
        }
        
    }  
    console.log('Plants for the exhibition:');
    for(let plant in plants) {
      let rates = plants[plant].rating;
      let sum = 0;
      let avg = 0;
      if(!rates == 0) {
        for(let rate of rates) {
            sum += rate;
      }
       avg = sum / rates.length;
    }
      let result = `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avg.toFixed(2)}`;
      console.log(result);
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