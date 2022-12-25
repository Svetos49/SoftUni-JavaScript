class CarDealership {
    constructor(name) {
       this.name = name;
       this.availableCars = [];
       this.soldCars = [];
       this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
       if(model = '' || horsepower <= 0 || price <= 0 || mileage <= 0 || !Number.isInteger(horsepower)) {
           throw new Error("Invalid input!")
       }
       let car = {
           model,
           horsepower,
           price,
           mileage
       }
       this.availableCars.push(car);
       return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
       
    }

    sellCar (model, desiredMileage) {
         if(!this.availableCars.car[model]) {
             throw new Error(`${model} was not found!`)
         }

         if(this.availableCars.car[mileage] <= desiredMileage) {
             return this.availableCars.car[price];
         }
         if((this.availableCars.car[mileage] - desiredMileage) <= 40000) {
             price = this.availableCars.car[price] * 0.95;
             return price;
         }
    }

    currentCar () {

    }

    salesReport (criteria) {

    }
}


let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));