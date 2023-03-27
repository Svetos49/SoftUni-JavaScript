const library = require('./library.js');
const expect = require('chai').expect;

describe('Library tests', () => {
     it('test 1', () => {

     });
    describe('calcPriceOfBook tests', () => {
        it('invalid input - name of the book', () => {
              expect(() =>library.calcPriceOfBook(1, 1234)).to.throw("Invalid input");
        }); 
        
        it('invalid input - name year', () => {
            expect(() =>library.calcPriceOfBook('1', '123')).to.throw("Invalid input");
      });
       
      it('valid data and year before 1980', () => {
        expect(library.calcPriceOfBook('Littel Prince', 1943)).to.equal('Price of Littel Prince is 10.00}');
  });
    }); 
    
    describe('findBook tests', () => {
          
    });

    describe('arrangeTheBooks tests', () => {
          
    });
})