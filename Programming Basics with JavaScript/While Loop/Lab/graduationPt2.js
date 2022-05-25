function graduationPt2(input) {
    let studentsName = input[0];
    let grades = 1;
    let index = 0;
    let count = 0;
    let sumGrades = 0;
    
    while(grades <= 12 ) {
        
        index++;
        let grade = Number(input[index]);

        if(grade < 4.00) {
            count++;
            if(count > 1) {
               
               break;
            }   
           continue;     
       }
        sumGrades += grade;
       grades++;
       
    }
    let averageGrade = sumGrades / 12;
    if(grades < 12) {
        console.log(`${studentsName} has been excluded at ${grades} grade`);
     } else  {
        console.log(`${studentsName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
     
}

graduationPt2([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ]);

  graduationPt2([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]);