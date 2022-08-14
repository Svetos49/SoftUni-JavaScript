function storeProvision(stockArr, orderedArr) {
     let result = {};
     for(let i = 0; i < stockArr.length; i++) {
          if(i % 2 == 0) {
            result[stockArr[i]] = Number(stockArr[i + 1]);
          }
     }
       
     for(let i = 0; i < orderedArr.length; i+=2) {
           if(result.hasOwnProperty(orderedArr[i])) {
             result[orderedArr[i]] += Number(orderedArr[i + 1]);
           } else {
            result[orderedArr[i]] = Number(orderedArr[i + 1]);
           }
     }
     Object.entries(result).forEach((el) => {
        console.log(`${el[0]} -> ${el[1]}`);

    });

    // let arr = Object.entries(result);
    //  for(let [name, sum] of arr) {
    //     console.log(`${name} -> ${sum}`);
    //  }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);