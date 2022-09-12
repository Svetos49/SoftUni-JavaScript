function destinationMapper(input) {
    let pattern = /([=\/])[A-z][A-Za-z]{2,}\1/g;
    let match = input.match(pattern);
    let travelPoints = 0;
    let allDestination = [];
    
    
    if(match) {
        match.forEach((el, i) => {
            el = el.substring(1, el.length - 1);
            travelPoints += el.length;
            allDestination.push(el);
        });
        
        console.log(`Destinations: ${allDestination.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    }
     
        
    if(match == null) {
        console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
    }
    
 }
 
 destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
 destinationMapper("ThisIs some InvalidInput");