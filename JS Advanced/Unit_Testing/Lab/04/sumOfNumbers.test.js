const sum = require('./sumOfNumbers');
const {expect} = require('chai');

describe('SumNumbers', () => {
   it('sums single number', () => {
      expect(sum([1])).to.equal(1);
   });

   // test overloading
   it('sums multiple numbers', () => {
    expect(sum([1, 1])).to.equal(2);
 });

 it('sums different numbers', () => {
    expect(sum([2, 3, 4])).to.equal(9);
 });
})