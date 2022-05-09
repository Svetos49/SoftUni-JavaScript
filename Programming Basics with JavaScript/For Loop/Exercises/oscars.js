function oscars(input) {
    let actorName = input[0];
    let firstGrades = Number(input[1]);
    let ratersNum = Number(input[2]);
    let raterName = '';
    let raterGrades = 0;
    let neededGrade = 1250.5;
    let leng = 0;
    
    let gradeSum = 0;
    

    for (let i = 3; i < (ratersNum * 2) + 3; i++) {
        if (i % 2 != 0) {
            raterName = input[i];
            leng = raterName.length;


        } else if (i % 2 == 0) {
            let grade = Number(input[i]);
            raterGrades = ((leng * grade) / 2);
            gradeSum += raterGrades;

        }
    
    if ((gradeSum + firstGrades) > neededGrade) {
        let sum = gradeSum + firstGrades;
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${sum.toFixed(1)}!`);
        break;
    }
  }
     if(neededGrade > gradeSum + firstGrades) {
        let diff = neededGrade - gradeSum - firstGrades;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
     }

}

oscars([
    'Sandra Bullock', '340',
    '5',              'Robert De Niro',
    '50',             'Julia Roberts',
    '40.5',           'Daniel Day-Lewis',
    '39.4',           'Nicolas Cage',
    '29.9',           'Stoyanka Mutafova',
    '33'
  ]);