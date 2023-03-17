const dealership = require('./dealerShip');
const expect = require('chai').expect;

describe('test', () => {
    describe('newCarCost', () => {
         // model is not supported -> no discount
        it('return original price when model unsupported', () => {
          expect(dealership.newCarCost('a', 1)).to.equal(1);
        })
      // model is supported -> price reduce by model value
      it('return discount price', () => {
        expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
      })
 
    })

    describe('carEquipment', () => {
        // single element, single pick
        it('single element, single pick', () => {
         expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        })

        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b,', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
           })

           it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
           })
        // test overloading - multiple elements, multiple picks
    })

    describe('euroCategory', () => {
      // category is bellow threshold
        it('category is bellow threshold', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        })
      //category is above threshold
       it('category is above threshold', () => {
        expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
    })
      // category is at threshold(edge case)

      it('category is above threshold', () => {
        expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
    })
    })
})