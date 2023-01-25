const describe = require('mocha').describe;
const assert = require('chai').assert;


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
    return undefined;
    }
    if (string.length % 2 === 0) {
    return 'even';
    }
    return 'odd';
    }

    describe('check isOddOrEven', () => {
      
       it('isEven', () => {
         assert.equal(isOddOrEven('aa'), 'even');
       });
       it('isOdd', () => {
           assert.equal(isOddOrEven('a'), 'odd')
       })
       it('shoud return undefined if parameter is number', () => {
         assert.equal(isOddOrEven(1), undefined)
       })
    });