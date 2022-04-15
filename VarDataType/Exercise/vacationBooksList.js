function vacationBooksList(input) {
  pageNums = Number(input[0]);
  pageHour = Number(input[1]);
  numOfDay = Number(input[2]);
  allTime = pageNums / pageHour;
   hourForDay = allTime / numOfDay;
   
   console.log(hourForDay);
}

vacationBooksList(['212', '20', '2']);