const { assert } = require("chai");
const expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
    }
    if (string.length <= index || index < 0) {
    return 'Incorrect index';
    }
    return string.charAt(index);
    }

    describe('charLookup', () => {
        it('', () => {
            assert.isUndefined(lookupChar(1, 0));
            assert.isUndefined(lookupChar('abc', 1.1));
            assert.isUndefined(lookupChar('fds', 'kl'));
        })

        it('', () => {
            assert.equal(lookupChar('tre', -1), 'Incorrect index');
            assert.equal(lookupChar('tre', 4), 'Incorrect index');
          
        })

        it('', () => {
            assert.equal(lookupChar('tre', -0), 't');
            assert.equal(lookupChar('tre', 2), 'e');
          
        })
    })