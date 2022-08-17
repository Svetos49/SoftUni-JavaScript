class Storage{
    constructor(capacity) {
       this.capacity = capacity;
       this.storage = [];
       this.totalCost = 0;
    }

    addProduct(products) {
       this.capacity -= products.quantity;
       this.storage.push(products);
       this.totalCost += products.price * products.quantity;
    }

    getProducts() {
       return this.storage.map((el) => JSON.stringify(el)).join('\n')
    }
}


let productOne = {name: 'Cucamber',
price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato',
price: 0.90, quantity: 25};
let productThree = {name: 'Bread',
price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productTwo);
storage.addProduct(productOne);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);















