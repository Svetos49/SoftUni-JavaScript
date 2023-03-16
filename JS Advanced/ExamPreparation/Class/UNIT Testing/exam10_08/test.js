const movieTheater = require('./movieTheater.js');
let { expect } = require('chai');


describe(" MovieTheater Tests …", () => {
    describe("ageRestrictions…", () => {

        it("value parameter is G", () => {
           expect(movieTheater.ageRestrictions('G')).to.be.equal("All ages admitted to watch the movie");
        });

        it("value parameter is PG", () => {
            expect(movieTheater.ageRestrictions('PG')).to.be.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
         });

         it("value parameter is R", () => {
            expect(movieTheater.ageRestrictions('R')).to.be.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
         });

         it("value parameter is NC-17", () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.be.equal("No one under 17 admitted to watch the movie");
         });

         it("conditions are not met", () => {
            expect(movieTheater.ageRestrictions('av')).to.be.equal("There are no age restrictions for this movie");
         });
     });

     describe("moneySpent", () => {
       let food = ["Nachos", "Popcorn"];
       let bill = 0;
       
       
       let drinks = ['Soda', 'Water'];
        it('not valid number', () => {
            expect(() => movieTheater.moneySpent('13', food, drinks)).to.throw("Invalid input");
        });

        it('not valid food array', () => {
            expect(() => movieTheater.moneySpent('13', 'ne', drinks)).to.throw("Invalid input");
        });

        it('not valid drinks array', () => {
            expect(() => movieTheater.moneySpent('13', food, 'da')).to.throw("Invalid input");
        });

        it('bill < 50', () => {
            let bill = 45;
            expect(movieTheater.moneySpent(2, food, drinks)).to.be.equal(`The total cost for the purchase is ${bill.toFixed(2)}`);
        });
     });

     describe("reservation", () => {

        it("TODO …", () => {
            // TODO: …
        });
     });

});
