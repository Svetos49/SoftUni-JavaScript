function salary(input) {
  let openTab = Number(input[0]);
  let salary = Number(input[1]);
  let fine = 0;
  
  let webSait = '';
  for(let i = 2; i <= input.length - 1; i++) {
      webSait = input[i];
      if(webSait == 'Facebook') {
         fine += 150;
         
      } else if(webSait == 'Instagram') {
         fine += 100;
      } else if(webSait == 'Reddit') {
         fine += 50;
      }
      if((salary - fine) <= 0) {
          console.log('You have lost your salary.');
          break;
      } 
    }
     if(salary > fine) {
        console.log(salary - fine);
     }
}

salary([
    '10',        '750',
    'Facebook',  'Dev.bg',
    'Instagram', 'Facebook',
    'Reddit',    'Facebook',
    'Facebook']);