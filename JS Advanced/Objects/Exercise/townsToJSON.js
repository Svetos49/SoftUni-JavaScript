function townsToJson(input) {
    function isEmptyStr(x) {
       return x !== '';
    }
    
    function convertIfNum(x) {
        return isNaN(x) ? x: Number(Number(x).toFixed(2))
    }

    function splitLine(input) {
        return input.split('|').filter(isEmptyStr).map(x => x.trim()).map(convertIfNum);
    }
      
    let [columns, ...table] = input.map(splitLine);
    

    return JSON.stringify(table.map(entry => {
       return columns.reduce((acc, curr, index) =>{
           acc[curr] = entry[index];
           return acc;
       }, {})
    }))

      
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