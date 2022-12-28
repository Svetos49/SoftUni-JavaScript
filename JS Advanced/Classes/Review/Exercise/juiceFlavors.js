function juiceFlavors(arr) {
   let juiceAmount = new Map();
   let juicesBottles = new Map();

   for(let i = 0; i < arr.length; i++) {
       let [juiceName, amount] = arr[i].split(' => ');
       amount = Number(amount);
       if(!juiceAmount.has(juiceName)) {
           juiceAmount.set(juiceName, 0);
       }
     
       let totalAmount = juiceAmount.get(juiceName) + amount;

       if(totalAmount >= 1000) {
        if(!juicesBottles.has(juiceName)) {
            juicesBottles.set(juiceName, 0); 
        }
        let newBottles = Math.trunc(totalAmount / 1000);
        let totalBottles = juicesBottles.get(juiceName) + newBottles;
        juicesBottles.set(juiceName, totalBottles);
       }

         juiceAmount.set(juiceName, totalAmount % 1000);
   }
     for(const [key, value] of juicesBottles.entries()) {
         console.log(`${key} => ${value}`);
     }

//    return [...juicesBottles]
//    .map(([key, value]) => `${key} => ${value}`)
//    .join('\n');
}


// console.log(juiceFlavors(['Orange => 2000',
//                           'Peach => 1432',
//                           'Banana => 450',
//                           'Peach => 600',
//                           'Strawberry => 549']));

  juiceFlavors(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']);                        

['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']