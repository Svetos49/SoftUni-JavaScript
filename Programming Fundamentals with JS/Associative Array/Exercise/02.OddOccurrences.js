function oddOccurrences(input) {
    let obj = {};
    input = input.toLowerCase();
    let arr = input.split(' ');
    for (line of arr) {
        if (!obj.hasOwnProperty(line)) {
            obj[line] = 0;
        }
        obj[line]++;
    }
   let odd = '';
   let entries = Object.entries(obj);
   entries.forEach(el => {
       el[1] = Number(el[1]);
       if(el[1] % 2 == 1) {
        odd += el[0] + ' ';
       }
   });
   console.log(odd);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');