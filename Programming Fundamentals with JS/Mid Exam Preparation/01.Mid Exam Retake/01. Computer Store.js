function computerStore(input) {
    let sum = 0;
    let tax = 0;
    let finalSum = 0;
    
    
    while(input[0] !== 'special' && input[0] !== 'regular') {
        let price = Number(input.shift());
        if(price < 0) {
            console.log("Invalid price!" );
        } else {
          sum += price;
        }
        
    }
    tax = sum * 0.2;
    finalSum = sum + tax;
    if(finalSum == 0) {
        console.log("Invalid order!" );
    } else {
      if(input[0] == 'special') {
            finalSum = finalSum * 0.9;
        } 
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalSum.toFixed(2)}$`);
          
    }
    
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);

computerStore(['regular'])