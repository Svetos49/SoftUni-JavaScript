function changeBureau(input) {
 let bitcoinCount = input[0];
 let yuanCount = input[1];
 let commission = input[2];

 let bitcointSum = bitcoinCount * 1168;
 let dollar = 1.76
 let yuanInLeva = dollar * 0.15;
 let sumYuan = yuanCount * yuanInLeva;
 let sum = sumYuan + bitcointSum;
 let levaIneuro = sum / 1.95;
let finalSum = levaIneuro * ( 1 - commission / 100);

 console.log(finalSum.toFixed(2));

}

changeBureau([20, 5678, 2.4]);