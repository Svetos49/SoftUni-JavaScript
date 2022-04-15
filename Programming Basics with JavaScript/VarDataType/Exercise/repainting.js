function repainting(input) {
 let nylonQuantity = Number(input[0]);
 let paintQuantity = Number(input[1]);
 let thinerQuantity = Number(input[2]);
 let hoursForWork = Number(input[3]);

 let priceOfNylon = 1.50;
 let priceOfPaint = 14.50;
 let priceOfThiner = 5.00;
 let pricePerBag = 0.40;

let sumOfNylon = (nylonQuantity + 2) * priceOfNylon;
let sumOfPaint = (paintQuantity * 1.1) * priceOfPaint;
let sumOfThiner = priceOfThiner * thinerQuantity;
let allAmountFormaterials = sumOfNylon + sumOfPaint + sumOfThiner + pricePerBag;

 let payForHour = allAmountFormaterials * 0.3; 
 let allPayment = payForHour * hoursForWork;
 let allSum = allAmountFormaterials + allPayment;

 console.log(allSum);
}

repainting(['10', '11', '4', '8']);