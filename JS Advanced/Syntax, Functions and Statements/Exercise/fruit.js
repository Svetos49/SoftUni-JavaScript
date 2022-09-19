function fruit(typeOfFruit, weight, price) {

    weight = weight / 1000;
    money = price * weight;
      
    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`
}

fruit('orange', 2500, 1.80);
console.log(fruit('orange', 2500, 1.80));