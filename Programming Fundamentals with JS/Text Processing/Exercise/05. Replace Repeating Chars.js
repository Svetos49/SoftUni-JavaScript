// function replaceRepeatingChars(str) {

//    let arr = str.split('');
//    let result = [];
//    for(let i = 0; i < str.length; i++) {
//       if(arr[i] != arr[i+1]) {
//        result.push(arr[i]);
//       }
//    }
//    console.log(result.join(''));
// }


function replaceRepeatingChars(str) {
    result = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i +1]) {
             result += str[i];
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');