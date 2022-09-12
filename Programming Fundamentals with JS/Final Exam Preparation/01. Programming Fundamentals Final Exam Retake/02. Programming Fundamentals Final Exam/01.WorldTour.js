function worldTour(input) {
 let stops = input.shift();
 

 for(let line of input) {
    let tokens = line.split(':');
    let command = tokens[0];
    if(command == 'Add Stop') {
     let index = Number(tokens[1]);
     let str = tokens[2];  
       if(index < 0 || index > stops.length) {
           console.log(stops);
           break;
       } else {
        let part1 = stops.slice(0, index);
         let part2 = stops.slice(index);
         stops = part1 + str + part2;
         console.log(stops);
       }
    } else if(command == 'Remove Stop') {
        let startI = Number(tokens[1]);
        let endI = Number(tokens[2]);
        if(!stops[startI] || !stops[endI]) {
           console.log(stops);
           break;
        } else {
          let part1 = stops.slice(0, startI);
          let part2 = stops.slice(endI + 1);
          stops = part1 + part2;
          console.log(stops);
        }

    } else if(command == 'Switch') {
        let oldStr = tokens[1];
        let newStr = tokens[2];
        let match = new RegExp(oldStr, 'g');
         stops = stops.replace(match, newStr);
        console.log(stops);
    } 
    
 }
 console.log(`Ready for world tour! Planned stops: ${stops}`);
}


// worldTour(["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"]);
console.log('-----------------------------------------------');
worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel',
    ''
  ]);



