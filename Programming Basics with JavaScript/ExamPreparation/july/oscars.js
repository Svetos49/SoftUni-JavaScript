function oscars(input) {
  let index = 0;
  let actorsName = input[index];
  index++;
  let academyPoints = Number(input[index]);
  index++;
  let numsJury = Number(input[index]);
  index++;
  let sumPoints = academyPoints;
   for(let i = 0; i < numsJury; i++) {
       let memberOfJury = input[index];
       index++;
       let leng = memberOfJury.length;
       let pointsOfMember = Number(input[index]);
       index++;
       sumPoints += pointsOfMember * leng / 2;
       if(sumPoints > 1250.5) {
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${sumPoints.toFixed(1)}!`);
        break;
       }
   }
  
   if(sumPoints < 1250.5) {
    diff = 1250.5 - sumPoints;
    console.log(`Sorry, ${actorsName} you need ${diff.toFixed(1)} more!`);
   } 
}

// oscars([
//     'Zahari Baharov',
//     '205',
//     '4',
//     'Johnny Depp',
//     '45',
//     'Will Smith',
//     '29',
//     'Jet Lee',
//     '10',
//     'Matthew Mcconaughey',
//     '39'
//   ]);


  oscars([
    'Sandra Bullock', '340',
    '5',              'Robert De Niro',
    '50',             'Julia Roberts',
    '40.5',           'Daniel Day-Lewis',
    '39.4',           'Nicolas Cage',
    '29.9',           'Stoyanka Mutafova',
    '33'
  ]);