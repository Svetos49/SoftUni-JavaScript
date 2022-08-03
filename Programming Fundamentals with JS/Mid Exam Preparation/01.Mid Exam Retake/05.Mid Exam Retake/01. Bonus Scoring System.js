// function bonusScoringSystem(input) {
//   let students = Number(input.shift());
//   let lectures = Number(input.shift());
//   let additionalBonus = Number(input.shift());

//   input = input.map(Number);
//   let maxAttendances = Math.max(...input);
  
//   let totalBonus = maxAttendances / lectures * (5 + additionalBonus)

//   console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
//   console.log(`The student has attended ${maxAttendances} lectures.`);
// }

function bonusScoringSystem(input) {
    // 1. input
   let studentsCount = Number(input.shift());
   let lecturesCount = Number(input.shift());
   let initialBonus = Number(input.shift());

   let students = input.map(Number);
//    let maxAttendance = Number.MIN_SAFE_INTEGER;
    let maxAttendance = 0;
//    2. calculate
   for(let i = 0; i < studentsCount; i++) {
    
       if(students[i] > maxAttendance) {
           maxAttendance = students[i];
       }
   }
     let maxBonus = 0;
     if(lecturesCount > 0) {
         maxBonus = maxAttendance / lecturesCount * (5 + initialBonus);
     } 
    
   
//    3. print
   console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
   console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem(['5',  '25', '30', '12', '19', '24', '16', '20']);