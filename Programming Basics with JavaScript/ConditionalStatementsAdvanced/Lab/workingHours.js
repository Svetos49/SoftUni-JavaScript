function workingHours(input) {
  let hour = Number(input[0]);
  let weeksDay =  input[1];

  if(hour >= 10 && hour <= 18) {
      if(weeksDay == 'Monday' || weeksDay == 'Tuesday' || weeksDay == 'Wednesday' ||
       weeksDay == 'Thursday' || weeksDay == 'Friday' || weeksDay == 'Saturday') {
          console.log('open');
      } else if(weeksDay == 'Sunday') {
          console.log('closed');
      }
  } 
  if(hour < 10 || hour > 18) {
      console.log('closed');
  }
}

workingHours(['11', 'Sunday']);