function sortArray(arr, str) {
//     let result = 0;
//    if(str =='asc') {
//     result = arr.sort((a, b) => a - b);
     
//    } else{
//    result = arr.sort((a, b) => b - a);
//    }
//    return result;

 const map = {
     'asc': (a,b) => a - b,
     'desc': (a,b) => b - a,
 }
 return arr.sort(map[str]);
}

sortArray([14, 7, 17, 6, 8], 'asc')
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));