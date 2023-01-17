const {sum} = require('./myModule');
const {expect, assert} = require('chai');

describe('sumFunction', () => {
    
    it('works', () => {
        assert.equal(sum(1, 2), 3);
        // expect(sum(1, 2)).to.equal(3);
   })
   it('return NAN with invalid values', () => {
    // expect(sum('a', 'a')).to.be.NaN;
    assert.isNaN(sum('a', 'a'));
})   
})