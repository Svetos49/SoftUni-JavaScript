function sinema(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let incom = 0;
  let places = rows * columns;

  if(type == 'Premiere') {
      incom = places * 12.00;
  } else if(type == 'Normal') {
      incom = places * 7.50;
  } else if(type == 'Discount') {
      incom = places * 5.00
  }

  console.log(`${incom.toFixed(2)} leva`);
}

sinema(['Premiere', '10', '12']);