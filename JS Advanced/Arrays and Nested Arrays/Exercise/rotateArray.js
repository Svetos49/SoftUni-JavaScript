function rotateArray(arr, num) {
     for(let i = 0; i < num; i++) {
        let rotNum = arr.pop();
        arr.unshift(rotNum);
     }
     return arr.join(' ');
}

rotateArray(['1', '2', '3', '4'], 2)
console.log(rotateArray(['1', '2', '3', '4'], 2));