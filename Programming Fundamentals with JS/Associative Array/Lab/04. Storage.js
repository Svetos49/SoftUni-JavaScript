function storage(input) {
//    let result = {};
//    for(line of input) {
//     let [product, quantity] = line.split(' ');
//     quantity = Number(quantity);
//     if(result.hasOwnProperty(product)) {
//       let oldQuantity = result[product];
//         quantity = oldQuantity + quantity;
//     }
//     result[product] = quantity;
//    }
    
//    for(key in result) {
//     console.log(`${key} -> ${result[key]}`);
//    }


    let map = new Map;
    for(let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if(!map.has(product)) {
           map.set(product, quantity);
        } else {
          let oldQuantity = map.get(product);
          quantity = oldQuantity + quantity;
          map.set(product, quantity);
        }
    }
   
    for(let [product, quantity] of map) {
       console.log(`${product} -> ${quantity}`);
    } 
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);


