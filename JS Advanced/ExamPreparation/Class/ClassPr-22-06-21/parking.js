class Parking {
    constructor(capacity) {
      this.capacity =  capacity;
      this.vehicles = [];
    }

    addCar(carModel, carNumber) {
       if(this.vehicles.length > this.capacity) {
          throw new Error('Not enough parking space.');
       }
       let car = {
           carModel,
           carNumber,
           payed: false,
       }

       this.vehicles.push(car);
       return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {

    }

    pay(carNumber) {

    }

    getStatistics(carNumber) {

    }
}

const parking = new Parking(12);

//console.log(parking.addCar('Volvo t600', 'TX3691CA'));
// console.log(parking.getStatistics());

// console.log(parking.pay('TX3691CA'));
// console.log(parking.removeCar('TX3691CA'));

// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA&#39;s driver successfully payed for his stay.
// TX3691CA left the parking lot.