const motorcycleRider = require('./Motorcycle Rider.js');

const expect = require('chai').expect;


describe("Test motorcycleRider", () => {
    describe("licenseRestriction", () => {
        it("type is different", () => {
            expect(() => motorcycleRider.licenseRestriction('c')).to.throw("Invalid Information!");
        });
        it("type is number", () => {
            expect(() => motorcycleRider.licenseRestriction(3)).to.throw("Invalid Information!");
        });
        it("type is array", () => {
            expect(() => motorcycleRider.licenseRestriction(['AM', 'A'])).to.throw("Invalid Information!");
        });

        it('type is AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('type is A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('type is A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('type is A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
    });

    describe("motorcycleShowroom", () => {
        it("first parametar is not array", () => {
            expect(() => motorcycleRider.motorcycleShowroom('c', 12)).to.throw("Invalid Information!");
        });
        it("first parametar is number", () => {
            expect(() => motorcycleRider.motorcycleShowroom(5, 12)).to.throw("Invalid Information!");
        });
        it("first parametar is object", () => {
            expect(() => motorcycleRider.motorcycleShowroom({a:3, b:1}, 12)).to.throw("Invalid Information!");
        });
        it("second parametar is not number", () => {
            expect(() => motorcycleRider.motorcycleShowroom(['125', '250', '600'], '34')).to.throw("Invalid Information!");
        });
        it("second parametar is array", () => {
            expect(() => motorcycleRider.motorcycleShowroom(['125', '250', '600'], ['34'])).to.throw("Invalid Information!");
        });
    });

    describe("otherSpendings", () => {
        it("TODO …", () => {
            // TODO: …
        });
    });

});
