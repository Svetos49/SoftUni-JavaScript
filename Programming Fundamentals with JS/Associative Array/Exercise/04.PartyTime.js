function partyTime(arr) {
   let listGest = {
     'VIP': [],
     'regular': []
   };


   while(arr[0] != 'PARTY') {
      let gest = arr.shift();
      let char = gest[0];
      if(isNaN(char)) {
        listGest['regular'].push(gest);
      } else {
        listGest['VIP'].push(gest);
      }
   }
    for(line of arr) {
        let index = 0;
        if(listGest['VIP'].includes(line)) {
           index = listGest['VIP'].indexOf(line);
           listGest['VIP'].splice(index, 1); 
        } else if(listGest['regular'].includes(line)) {
            index = listGest['regular'].indexOf(line);
            listGest['regular'].splice(index, 1);
        }
    }
    let count = listGest['VIP'].length + listGest['regular'].length;
  console.log(count);
  console.log(listGest['VIP'].join('\n'));
  console.log(listGest['regular'].join('\n'));
}

partyTime(['7IK9Yo0h', '9NoBUajQ','Ce8vwPmE', 'SVQXQCbc',
'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);