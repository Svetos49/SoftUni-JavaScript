function smallShop(input) {
   let product = input[0];
   let sity = input[1];
   let quantity = Number(input[2]);
   let sum = 0;

   if(sity == 'Sofia') {
       if(product == 'coffee') {
           product = 0.50;
         sum = product * quantity;
       } else if(product == 'water') {
           product = 0.80;
        sum = product * quantity;
       } else if(product == 'beer') {
           product = 1.20;
        sum = product * quantity;
       } else if(product == 'sweets') {
           product = 1.45;
        sum = product * quantity;
       } else if(product == 'peanuts') {
           product = 1.60;
        sum = product * quantity;
       }
   }

   if(sity == 'Plovdiv') {
    
    if(product == 'coffee') {
        product = 0.40;
      sum = product * quantity;
    } else if(product == 'water') {
        product = 0.70;
     sum = product * quantity;
    } else if(product == 'beer') {
        product = 1.15;
     sum = product * quantity;
    } else if(product == 'sweets') {
        product = 1.30;
     sum = product * quantity;
    } else if(product == 'peanuts') {
        product = 1.50;
     sum = product * quantity;
    }
}

if(sity == 'Varna') {
    if(product == 'coffee') {
        product = 0.45;
      sum = product * quantity;
    } else if(product == 'water') {
        product = 0.70;
     sum = product * quantity;
    } else if(product == 'beer') {
        product = 1.10;
     sum = product * quantity;
    } else if(product == 'sweets') {
        product = 1.35;
     sum = product * quantity;
    } else if(product == 'peanuts') {
        product = 1.55;
     sum = product * quantity;
    }
}

    console.log(sum);
}

smallShop(['coffee', 'Varna', '2']);