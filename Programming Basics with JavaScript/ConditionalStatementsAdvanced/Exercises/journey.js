function journey(input) {
  let buget = Number(input[0]);
  let season = input[1];
  let accommodation = '';
  let spend = 0;
  let distance = '';
  if(buget <= 100) {
      distance = 'Bulgaria';
      if(season == 'summer') {
          accommodation = 'Camp';
          spend = buget * 0.30;
      } else if(season = 'winter') {
          accommodation = 'Hotel';
          spend = buget * 0.70;
      }
      console.log(`Somewhere in ${distance}`);
      console.log(`${accommodation} - ${spend.toFixed(2)}`);
  }  else if(buget > 100 && buget <= 1000) {
    distance = 'Balkans';
    if(season == 'summer') {
        accommodation = 'Camp';
        spend = buget * 0.40;
    } else if(season = 'winter') {
        accommodation = 'Hotel';
        spend = buget * 0.80;
    }
    console.log(`Somewhere in ${distance}`);
    console.log(`${accommodation} - ${spend.toFixed(2)}`);
  } else if(buget > 1000) {
    distance = 'Europe';
    if(season == 'summer') {
        accommodation = 'Hotel';
        spend = buget * 0.90;
    } else if(season = 'winter') {
        accommodation = 'Hotel';
        spend = buget * 0.90;
    }
    console.log(`Somewhere in ${distance}`);
    console.log(`${accommodation} - ${spend.toFixed(2)}`);
  }
}

journey(['50', 'summer'])