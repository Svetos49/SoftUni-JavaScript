
const { expect } = require('chai');
const { showMovies, swapSeatsInHall } = require('./cinema.js');
const cinema = require('./cinema.js');

describe('Test', () => {
    describe('showMovies tests', () => {
        it('empty array', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

        it('array of movies', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker');
        });

        it('array of single movie', () => {
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });

    });

    describe('ticketPrice tests', () => {
        it('Premiere price', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });

        it('Normal price', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });

        it('Discount price', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('invalid input', () => {
            expect(() => cinema.ticketPrice('tarala')).to.throw('Invalid projection type.');
        });

    });


    describe('swapSeatsInHall tests', () => {
        it('one of the two numbers do not exist', () => {
            expect(cinema.swapSeatsInHall(2)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('numbers are not integers', () => {
            expect(cinema.swapSeatsInHall('2', 4.5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('numbers is greater than the capacity', () => {
            expect(cinema.swapSeatsInHall(2, 22)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('Seats are less or equal of 0', () => {
            expect(cinema.swapSeatsInHall(-2, 6)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('number is equal of 0', () => {
            expect(cinema.swapSeatsInHall(-2, 6)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('numbers are equal', () => {
            expect(cinema.swapSeatsInHall(6, 6)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('both numbers are out of range', () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('normal numbers for seats', () => {
            expect(cinema.swapSeatsInHall(2, 13)).to.be.equal("Successful change of seats in the hall.");
        });

        it('ends numbers', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        });
    });
});