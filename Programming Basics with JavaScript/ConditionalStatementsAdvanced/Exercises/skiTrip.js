function skiTrip(input) {
     let stayDays = Number(input[0]);
     let typeOfRooms = input[1];
     let evaluation = input[2];

     let price = 0;

     if(stayDays < 10) {
         if(typeOfRooms == 'room for one person') {
            price = (stayDays - 1) * 18.00;
         } else if(typeOfRooms == 'apartment') {
            price = ((stayDays - 1) * 25.00) * 0.70; 
         } else if(typeOfRooms == 'president apartment') {
            price = ((stayDays - 1) * 35.00) * 0.90;
         }

     } else if(stayDays >=10 && stayDays <= 15) {
        if(typeOfRooms == 'room for one person') {
            price = (stayDays - 1) * 18.00;
        } else if(typeOfRooms == 'apartment') {
            price = ((stayDays - 1) * 25.00) * 0.65;
        } else if(typeOfRooms == 'president apartment') {
            price = ((stayDays - 1) * 35.00) * 0.85;
        }
     } else {
        if(typeOfRooms == 'room for one person') {
           price = (stayDays - 1) * 18.00
        } else if(typeOfRooms == 'apartment') {
           price = ((stayDays - 1) * 25.00) * 0.50;
        } else if(typeOfRooms == 'president apartment') {
           price = ((stayDays- 1) * 35.00) * 0.80;
        }
     }

     if(evaluation == 'positive') {
          price = price * 1.25;
     } else {
          price = price * 0.90;
     }
      console.log(price.toFixed(2));
} 

skiTrip(['2', 'apartment', 'positive']);