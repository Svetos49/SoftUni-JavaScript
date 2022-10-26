function townPopulation(arr) {
    let towns = {};
    for(let town of arr) {
        let [city, population] = town.split('<->');
        population = Number(population);
        if(towns[city] == undefined) {
            towns[city] = 0
        }
        towns[city] += population;
    }
     let cities = Object.keys(towns);
     for(let town of cities) {
        console.log(`${town}: ${towns[town]}`);
     }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])