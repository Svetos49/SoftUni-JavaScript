let { expect } = require('chai');
let { flowerShop} = require("./flowerShop.js");

describe('flowerShorp', () => {
    describe('calcPriceOfFlowers', () => {
      it('Shoud be validated thri parameters', () => {
          expect(flowerShop.calcPriceOfFlowers('flower', 3, 5)).to.equal(`You need $(15.00) to buy flower!`)
      })
    });

    describe('checkFlowersAvailable', () => {

    });

    describe('sellFlowers', () => {

    });


})