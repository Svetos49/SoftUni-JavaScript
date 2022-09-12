function destinationMapper(input) {
   let pattern = /(=|\/)[A-z][A-Za-z]{2,}\1/g;
   let match = input.match(pattern);
   let travelPoints = 0;
   let allDestination = '';
   if(match) {
    for(let line of match) {
        line = line.substring(1, line.length - 1);
        travelPoints += line.length;
        allDestination += `${line}, `;
     }
     allDestination = allDestination.split(', ').join(', ').trim().substring(0, allDestination.length - 2);
     console.log(`Destinations: ${allDestination}`);
     console.log(`Travel Points: ${travelPoints}`);
    }
    if(match == null) {
        console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
    }
    
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");