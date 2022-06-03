function oscarsCeremony(input) {
  let hallRent = Number(input[0]);
  let statuettes = hallRent * 0.70;
  let catering = statuettes * 0.85;
  let soundSystems = catering * 0.50;

  console.log((hallRent + statuettes + catering + soundSystems).toFixed(2))
}

oscarsCeremony(['3500'])