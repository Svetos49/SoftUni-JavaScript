const {expect} = require('chai');

const isSymmetric = require('./checkForSymmetry');

describe('isSimmetric', () => {
    //Take an array as argument
   // Return false for any input that isn’t of the correct type
    //Return true if the input array is symmetric
   // Otherwise, return false

    it('return true for valid symmetric input', () => {
       expect(isSymmetric([1, 1])).to.be.true;
    });

    it('return false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
     });

     it('return false for type-coerced elements', () => {
         expect(isSymmetric(['1', 1])).to.be.false;
     });

     // test overloading
     it('returns true for valid symmetric odd element array', () => {
         expect(isSymmetric([1, 1, 1])).to.be.true;
     });

     it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });

    it('returns false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });
});