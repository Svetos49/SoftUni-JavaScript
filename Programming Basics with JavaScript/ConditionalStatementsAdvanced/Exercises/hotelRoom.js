function hotelRoom(input) {
  let month = input[0];
  let countNight = Number(input[1]);

  let sumStudio = 0;
  let sumApartment = 0;

  if (month == 'May' || month == 'October') {
    if (countNight > 7 && countNight <= 14) {
      sumStudio = (50 * 0.95) * countNight;;
    } else if (countNight > 14) {
      sumStudio = (50 * 0.70) * countNight;
      sumApartment = (65 * 0.90) * countNight;
    } else {
      sumApartment = 65 * countNight;
      sumStudio = 50 * countNight;
    }
  } else if (month == 'June' || month == 'September') {
    if (countNight > 14) {
      sumStudio = (75.20 * 0.80) * countNight;
      sumApartment = (68.70 * 0.90) * countNight;;
    } else {
      sumApartment = 68.70 * countNight;
      sumStudio = 75.20 * countNight;
    }
  } else if(month == 'July' || month == 'August') {
    if(countNight > 14) {
      sumApartment = (77 * 0.90) * countNight;
      sumStudio = 76 * countNight;
    } else {
      sumStudio = 76 * countNight;
      sumApartment = 77 * countNight;
    }
  }

   console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
   console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);