function trekkingMania(input) {
   let countGroups = Number([input[0]]);
   let peopleInGroup = 0;
   let allPeople = 0
   let n1 = 0;
   let n2 = 0;
   let n3 = 0;
   let n4 = 0;
   let n5 = 0;

     for(let i = 1; i <= countGroups; i++) {
         allPeople += Number(input[i]);
         peopleInGroup = Number(input[i]);
         if(peopleInGroup <= 5) {
            n1 += peopleInGroup;

            
         } else if(peopleInGroup > 5 && peopleInGroup <=12) {
            n2 += peopleInGroup;
            
         } else if(peopleInGroup > 12  && peopleInGroup <= 25) {
            n3 += peopleInGroup;
            
         } else if(peopleInGroup > 25 && peopleInGroup <= 40) {
            n4 += peopleInGroup;
            
         } else if(peopleInGroup > 40) {
            n5 += peopleInGroup;
            
         }
     }
     console.log((n1 / allPeople * 100).toFixed(2)+'%');
     console.log((n2 / allPeople * 100).toFixed(2)+'%');
     console.log((n3 / allPeople * 100).toFixed(2)+'%');
     console.log((n4 / allPeople * 100).toFixed(2)+'%');
     console.log((n5 / allPeople * 100).toFixed(2)+'%');
}

trekkingMania([
    '10', '10',  '5',
    '1',  '100', '12',
    '26', '17',  '37',
    '40', '78'
  ]);