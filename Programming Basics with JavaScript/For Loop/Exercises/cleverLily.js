function cleverLily(input) {
   let age = Number(input[0]);
   let priceLaundry = Number(input[1]);
   let priceToy = Number(input[2]);
   let sum = 0;
   let count = 0;
   let sumToys = 0;
   let allMoney = 0;

   for(let i = 1; i <= age; i++) {
       if(i % 2 != 0) {
         sumToys += priceToy;
       } else {
        sum += 10;
        allMoney += sum;
        count++;
       }
    }
    allMoney = allMoney - count;
    let allSum = allMoney + sumToys;
    let diff = Math.abs(allSum - priceLaundry);
    if(allSum >= priceLaundry) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else if(priceLaundry > allSum) {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(['10', '170.00', '6' ])