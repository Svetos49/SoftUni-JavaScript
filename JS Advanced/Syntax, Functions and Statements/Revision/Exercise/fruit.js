function fruit(arr1, arr2, arr3) {
     let kilo = arr2 / 1000;
     let price = kilo * arr3;
     console.log(`I need $${price.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${arr1}.`);
}

fruit('orange', 2500, 1.80)