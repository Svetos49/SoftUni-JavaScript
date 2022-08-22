function piccolo(input) {
   let cars = {}
   for(line of input) {
     let [drection, number] = line.split(', ');
     if(drection == 'IN') {
        cars[number] = 1;
     } else {
       delete cars[number];
     }
   }
   
   let sorted = Object.keys(cars).sort((a, b) => a.localeCompare(b));
   if(sorted.length == 0) {
     console.log("Parking Lot is Empty");
    }
    console.log(sorted.join('\n'));          
  
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI',
 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI','IN, CA9876HH', 'IN, CA2822UU']);

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']); 