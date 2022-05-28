function examPreparation(input) {
  let index = 0;
  let lowGrade = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let isNeedBreak = false;
  let sumGrades = 0;
  let counter = 0;
  let lastTask = '';
  let countLowGrade = 0;
  while(command != 'Enough') {
      let currentTask = command;
      let currentGrade = Number(input[index]);

      if(currentGrade <= 4) {
          countLowGrade++;
      }
      if(countLowGrade == lowGrade) {
          isNeedBreak = true;
          console.log(`You need a break, ${lowGrade} poor grades.`);
          break;
      }

      sumGrades += currentGrade;
      counter++;
      lastTask = currentTask;
      index++;
      command = input[index];
      index++
  }
  let avgGrade = sumGrades / counter;
  if(/*countLowGrade !== lowGrade*/ isNeedBreak == false) {
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastTask}`);
  } 

 
}

examPreparation([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''
  ]);

  examPreparation([ '2', 'Income', '3', 'Game Info', '6', 'Best Player', '4', '' ]);