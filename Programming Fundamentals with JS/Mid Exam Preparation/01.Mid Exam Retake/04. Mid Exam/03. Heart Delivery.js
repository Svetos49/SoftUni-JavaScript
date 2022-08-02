function heartDelivery(input) {
 let arr = input.shift().split('@').map(Number);
 let currIndex = 0;

 while(input[0] !== "Love!") {
    let tokens = input.shift().split(' ');
   
    let jump = Number(tokens[1]);
    currIndex += jump;

    if(currIndex>= arr.length) {
        currIndex = 0;
    } 

    
        if(arr[currIndex] == 0) {
            console.log(`Place ${currIndex} already had Valentine's day.`);
       } else if(arr[currIndex] > 0) {
            arr[currIndex] -= 2;
            if(arr[currIndex] == 0) {
                console.log(`Place ${currIndex} has Valentine's day.`);
            }
        }  
    


    
 }
   console.log(`Cupid's last position was ${currIndex}.`);
   let missed = 0;
   for(house of arr) {
       if(house > 0) {
        missed++;
       } 
    }
 
  if(missed == 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${missed} places.`);
  }
}

// heartDelivery(["10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"]);

heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);