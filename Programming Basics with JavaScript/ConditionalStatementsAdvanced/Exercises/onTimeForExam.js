function onTimeForExam(input) {
   let hourExam = Number(input[0]);
   let minuteExam = Number(input[1]);
   let hourArival = Number(input[2]);
   let minuteArival = Number(input[3]);

   let allMinutesExam = (hourExam * 60) + minuteExam;
   let allMinuteArival = (hourArival * 60) + minuteArival;

   if(allMinuteArival > allMinutesExam) {
       console.log('Late');
       let difference = allMinuteArival - allMinutesExam;
       if(difference >= 60) {
           let h = Math.floor(difference / 60);
           let min = difference % 60;
            if(min < 10) {
                console.log(`${h}:0${min} hors after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
       } else {
           let min = difference % 60;
           console.log(`${min} minutes after the start`);
       }                                                                                          
   } else if((allMinutesExam - allMinuteArival) <= 30) {
       console.log('On time');
       let diff = allMinutesExam - allMinuteArival;
       if(diff != 0) {
           let min = diff % 60;
           console.log(`${min} minutes before the start`);
       }
   } else {
       console.log('Early');
       let diff = allMinutesExam - allMinuteArival;
       let hour = Math.floor(diff / 60);
       let min = diff % 60;
        if(diff >= 60) {
            if(min < 10) {
                console.log(`${hour}:0${min} hours before the start`);
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
       
   }
}

onTimeForExam(['14', '00', '13', '55']);