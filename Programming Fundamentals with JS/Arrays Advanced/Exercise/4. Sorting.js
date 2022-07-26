function sorting(input) {
    arr = input.slice();
    arr = arr.sort((a, b) => b-a);
    let sorted = [];
    for(let i = 0; i < input.length; i++) {
       if(i % 2 == 0) {
           sorted.push(arr.shift());
       } else {
           sorted.push(arr.pop())
       }
    }
    console.log(sorted.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);