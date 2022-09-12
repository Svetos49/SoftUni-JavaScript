function worldTour(data) {
  let initialString = data.shift();
  let line = data.shift();
  let startIndex;
  let endIndex;

  while(line != 'Travel') {
      let [action, firstParam, secondParam] = line.split(':');

      switch(action) {
          case 'Add Stop':
             startIndex = Number(firstParam);
            if(startIndex < 0 || startIndex > initialString.length) {
              console.log(initialString);
              break;
            }
            let value = secondParam;
            let firstPart = initialString.slice(0, startIndex);
            let secondPart = initialString.slice(startIndex);
            initialString = firstPart + value + secondPart;
            console.log(initialString);    
          break;
          case 'Remove Stop':
             startIndex = Number(firstParam);
             endIndex = Number(secondParam);
             if(!initialString[startIndex] || !initialString[endIndex]) {
                   console.log(initialString);
                   break;
             }
             let subStr = initialString.substring(startIndex, endIndex + 1);
             initialString = initialString.replace(subStr, '');
             console.log(initialString);
          break;
          case 'Switch':
              let oldValue = firstParam;
              let newValue = secondParam;
              let pattern = new RegExp(oldValue, 'g');
              initialString = initialString.replace(pattern, newValue);
              console.log(initialString);  
          break;
      }

    line = data.shift();
  }
   console.log(`Ready for world tour! Planned stops: ${initialString}`);
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
