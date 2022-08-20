function meetings(input) {
    let obj = {};
   for(line of input) {
    let [weekday, name] = line.split(' ');
    if(obj.hasOwnProperty(weekday)) {
        console.log(`Conflict on ${weekday}!`);
        continue;
    }
    console.log(`Scheduled for ${weekday}`);
    obj[weekday] = name;

   }
    for(weekday in obj) {
        console.log(`${weekday} -> ${obj[weekday]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);


