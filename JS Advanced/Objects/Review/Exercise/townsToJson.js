function townsToJson(arr) {
    const result = [];
    const splited = arr[0].split('|');
    const town = splited[1].trim();
    const latitude = splited[2].trim();
    const longitude = splited[3].trim();
    for (let i = 1; i < arr.length; i++) {
        const obj = {};
        const splitedEntry = arr[i].split('|');
        obj[town] = splitedEntry[1].trim();
        obj[latitude] = Number(Number(splitedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splitedEntry[3].trim()).toFixed(2));

        result.push(obj)
    }
    return JSON.stringify(result);
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));