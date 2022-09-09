// function race(input) {
//  let rasers = {};
//  let names = input.shift().split(', ');
//  let patternNames = /[A-Za-z]+/g;
//  let patternKm = /\d/g;
//  let racerName = '';
//  let sumKm = 0;
//  for(let line of input){
//     if(line != 'end of race') {
//          racerName = line.match(patternNames).join('');
//         let distance = line.match(patternKm);
//         sumKm = distance.reduce((a, b) => Number(a) + Number(b));
//         if(names.includes(racerName)) {
//             if(!rasers.hasOwnProperty(racerName)) {
//                 rasers[racerName] = 0;
//             } 
//              rasers[racerName] += sumKm;;
//          }
//     }
    
//  }
//    let sorted = Object.keys(rasers).sort((a, b) => rasers[b] - rasers[a]);
   
//    let result = `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`;
//    console.log(result);
// }


function race(arr) {
    let names = arr.shift().split(', ');
    let racers = {};
 
    names.forEach(name => {
      racers[name] = 0;
    });
    
    for(let line of arr) {
     let pattern = /[A-Za-z]/g;
     let match1 = line.match(pattern);
     let pat = match1.join('')
     if(racers.hasOwnProperty(pat)) {
       let regex = /[0-9]/g;
       let digit = line.match(regex)
        .map(Number)
        .reduce((a, b) => a + b);
 
        racers[pat] += digit;
     }
    
    }
   let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);
   
   console.log(`1st place: ${sorted[0][0]}`);
   console.log(`2nd place: ${sorted[1][0]}`);
   console.log(`3rd place: ${sorted[2][0]}`);
 }

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll',

'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);