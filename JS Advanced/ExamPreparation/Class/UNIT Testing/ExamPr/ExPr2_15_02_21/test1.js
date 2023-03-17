const dealerShip = require('./dealerShip');
const expect = require('chai').expect;


describe('test', () => {
    

describe('newCarCost', () => {
        it('return when model not  suported', () => {
            expect(dealerShip.newCarCost('s', 2)).to.equal(2);
        });
    
        it('returns discounted price', () => {
            expect(dealerShip.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        }); 
    });

    describe('carEquipment', () => {
        it('single element, single pick', () => {
            expect(dealerShip.carEquipment(['d'], [0])).to.deep.equal(['d']);
        });
    
        it('single element, single pick', () => {
            expect(dealerShip.carEquipment(['d', 'c', 'f'], [0, 2])).to.deep.equal(['d', 'f']);
        });
    
        it('single element, single pick', () => {
            expect(dealerShip.carEquipment(['d', 'c'], [0])).to.deep.equal(['d']);
        }); 
    });

    describe('euroCategory', () => {
        it('category is bellow threshold', () => {
            expect(dealerShip.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    
        it('category is above threshold', () => {
            expect(dealerShip.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    
        it('category is above threashold', () => {
            expect(dealerShip.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        }); 
    });


});


