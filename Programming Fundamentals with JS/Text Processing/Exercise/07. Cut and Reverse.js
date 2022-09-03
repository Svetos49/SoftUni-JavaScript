// function cutAndReverse(input) {
//   // let array = input.split('');
//    let half = input.length / 2;
  
//    let firstHalf = input.substring(0, half).split('').reverse();
//    let second = input.substring(half, input.length).split('').reverse();
//    console.log(firstHalf.join(''));
//    console.log(second.join(''));
// }

function cutAndReverse(str) {
    let firstHalf = str.substring(0, str.length/2);
    let secondHalf = str.substring(str.length/2);
    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));
  
  }

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');