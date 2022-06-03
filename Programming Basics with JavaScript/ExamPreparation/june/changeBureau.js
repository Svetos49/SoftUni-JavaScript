function changeBureau(input) {
   let bitcoinCount = Number(input[0]);
   let yuanCount = Number(input[1]);
   let commission = Number(input[2]);

   let bitcoinInLeva = 1168;
   let yuanInDollar = 0.15;
   let dollarInLeva = 1.76;
   let euroInLeva = 1.95;

   let sumLeva = bitcoinCount * bitcoinInLeva;
   let sumDollarInleva = yuanCount * yuanInDollar * dollarInLeva;
   let allSumInEuro= (sumDollarInleva + sumLeva)  /  euroInLeva;
   let totalSum = allSumInEuro * (1 - commission / 100);

   console.log(totalSum.toFixed(2));
  

}

changeBureau(['1', '5', '5']);