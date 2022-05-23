function thraineTheThrainers(input) {
    let index = 0;
   let numMember = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   let sumGrade = 0;
   let finalGrade = 0;
   let counter = 0;
   while(command != 'Finish') {
       let namePresentation = command;
       sumGrade = 0;
       for(let i = 0; i < numMember; i++) {
           let grade = Number(input[index]);
           index++;
           sumGrade += grade;
           counter++;
       }
       console.log(`${namePresentation} - ${(sumGrade / numMember).toFixed(2)}.`);
      finalGrade += sumGrade;
      command = input[index];
      index++;
   }
     console.log(`Student's final assessment is ${(finalGrade / counter).toFixed(2)}.`);
}

thraineTheThrainers([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish',
    ''
  ]);