// function previousDay(year, month, day) {
//       const date = new Date(year, month - 1, day);
//       const resultDate = new Date;
//       const millisecs = 1000 * 60 * 60 * 24;
//        resultDate.setTime(date.getTime() - millisecs);
//       console.log(resultDate);
// }

function solve(year, month, day) {
    let dateStr = year + '-' + month + '-' + day;
    let event = new Date(dateStr);
    event.setDate(day - 1);
    console.log(event.getFullYear() + '-' + (Number(event.getMonth()) + 1) + '-' + event.getDate());
}

// previousDay(2016, 9, 30);
// previousDay(2016, 10, 1);

solve(2016, 9, 30);
solve(2016, 10, 1);