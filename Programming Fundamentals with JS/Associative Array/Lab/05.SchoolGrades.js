function schoolGrades(input) {
   let map = new Map;
   for(line of input) {
    let token = line.split(' ');
    let name = token.shift();
    let grades = token.map(Number);
    if(!map.has(name)) {
       map.set(name, []);
       map.set(name, map.get(name).concat(grades));
    } else {
        map.set(name, map.get(name).concat(grades));
    }
    
  }
   
    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    
    for(let [name, grades] of sorted) {
        let sum = 0;
        sum = grades.reduce((a, b) => a + b);
        let avg = sum / grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}



schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);

