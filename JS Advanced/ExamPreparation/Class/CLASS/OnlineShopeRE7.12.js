class OnlineShop {
    constructor(warehouse) {
        this.warehouseSpace = warehouse;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if(spaceRequired > this.warehouseSpace) {
           throw new Error("Not enough space in the warehouse."); 
        } 
       this.warehouseSpace -= spaceRequired;
       this.products.push({product, quantity});
    
       return `The ${product} has been successfully delivered in the warehouse.`;
    }



    quantityCheck(product, minimalQuantity) {
        let productQuantity = this.products.find(p => p.product).quantity;
        let difference = minimalQuantity - productQuantity;

          if(this.products.some(p => p.product == product) == false) {
            throw new Error(`There is no ${product} in the warehouse.`)
          }

          if(minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative."); 
          } else if(minimalQuantity <= productQuantity) {
            return `You have enough from product ${product}.`;
          } else {

          }
         
          
          return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
      
           if(this.sales.some(p => p.product == product)  == false) {
            throw new Error(`There is no ${product} in the warehouse.`); 
           }
          
           this.sales.push({product: 1});
           this.products.find(p => p.product).quantity -= 1;
           return `The {product} has been successfully sold.`;
    }

    revision() {
            if(this.sales.length == 0) {
              return "There are no sales today!";

            }

    }
}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.sellProduct('keyboard'));



// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());

 


