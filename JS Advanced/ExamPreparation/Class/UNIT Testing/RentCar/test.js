let { expect } = require('chai');
let { Repository, rentCar } = require("./rentCar.js");


describe("rentCar …", () => {
    let catalogue = {
        Volkswagen: 20,
        Audi: 36,
        Toyota: 40,
        BMW: 45,
        Mercedes: 50
    }
    describe("searchCar testing", ()=> {
      

        it('Should have 3 function in it', () => {
            let actual = rentCar;
    
            expect(actual).to.haveOwnProperty('searchCar').to.be.a('function');
            expect(actual).to.haveOwnProperty('calculatePriceOfCar').to.be.a('function');
            expect(actual).to.haveOwnProperty('checkBudget').to.be.a('function');
        });

        it('searchCar shoud throw exeption when first parameter is number', () => {
           let actual = () => {rentCar.searchCar(4, 'BMW')};
           expect(actual).to.throw(Error, "Invalid input");
        });

        it('searchCar shoud throw exeption when first parameter is string', () => {
            let actual = () => {rentCar.searchCar('string', 'BMW')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('searchCar shoud throw exeption when first parameter is object', () => {
            let actual = () => {rentCar.searchCar({}, 'BMW')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('searchCar shoud throw exeption when first parameter is empty array', () => {
            let actual = () => {rentCar.searchCar([], 'BMW')};
            expect(actual).to.throw(Error, "There are no such models in the catalog!");
         });

         it('searchCar shoud throw exeption when model is missed in array', () => {
            let actual = () => {rentCar.searchCar(['Lada'], 'BMW')};
            expect(actual).to.throw(Error, "There are no such models in the catalog!");
         });

         it('searchCar shoud return message when there is matching element in array', () => {
             let shop = ["Volkswagen", "BMW", "Audi"];
            let actual = rentCar.searchCar(shop, 'BMW');
            let expected = `There is 1 car of model BMW in the catalog!`;
            expect(actual).to.be.equal(expected);
         });
        
     });

     describe('calculatePriceOfCar testing', () => {
        it('calculatePriceOfCar shoud throw exeption when first parameter is number', () => {
            let actual = () => {rentCar.searchCar(4, 20)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar shoud throw exeption when first parameter is array', () => {
            let actual = () => {rentCar.calculatePriceOfCar([], 20)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar shoud throw exeption when first parameter is object', () => {
            let actual = () => {rentCar.calculatePriceOfCar({}, 20)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar shoud throw exeption when second parameter is string number', () => {
            let actual = () => {rentCar.calculatePriceOfCar('string', '20')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar shoud throw exeption when second parameter is string', () => {
            let actual = () => {rentCar.calculatePriceOfCar('string', 'string')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar shoud throw exeption when second parameter is number', () => {
            let actual = () => {rentCar.calculatePriceOfCar('string', [])};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('calculatePriceOfCar have missing model in catalog', () => {
            let actual = () => {rentCar.calculatePriceOfCar('Lada', 12)};
            expect(actual).to.throw(Error, "No such model in the catalog!");
         });

         it('two parameters are valid', () => {
             let expected = `You choose BMW and it will cost $90!`;

             expect(rentCar.calculatePriceOfCar('BMW', 2)).to.be.equal(expected);
         })
     })

     describe('checkBudget testing', () => {
        it('checkBudget shoud throw exeption when first parameter is string', () => {
            let actual = () => {rentCar.checkBudget('string', 20, 30)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('checkBudget shoud throw exeption when first parameter is string number', () => {
            let actual = () => {rentCar.checkBudget('2', 20, 30)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('checkBudget shoud throw exeption when second parameter is string', () => {
            let actual = () => {rentCar.checkBudget('55', 'string', 30)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('checkBudget shoud throw exeption when second parameter is string number', () => {
            let actual = () => {rentCar.checkBudget(33, '20', 30)};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('checkBudget shoud throw exeption when thirt parameter is string', () => {
            let actual = () => {rentCar.checkBudget(12, 20, 'string')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('checkBudget shoud throw exeption when thirt parameter is string number', () => {
            let actual = () => {rentCar.checkBudget(12, 20, '22')};
            expect(actual).to.throw(Error, "Invalid input");
         });

         it('the budget is less than cost ', () => {
            let expected = 'You need a bigger budget!';

            expect(rentCar.checkBudget(45, 2, 30 )).to.be.equal(expected);
        });

        it('the budget is bigger then cost ', () => {
            let expected = `You rent a car!`;

            expect(rentCar.checkBudget(45, 2, 100 )).to.be.equal(expected);
        });

        it('the budget is equal to cost ', () => {
            let expected = `You rent a car!`;

            expect(rentCar.checkBudget(45, 2, 90 )).to.be.equal(expected);
        });


     })
     // TODO: …
});
