function sity(obj) {
  for(key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

sity({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" });