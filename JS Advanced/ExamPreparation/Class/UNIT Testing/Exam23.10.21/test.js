const library = require('./library.js');
//const {calcPriceOfBook} = require('./library.js');
const expect = require('chai').expect;
//let { expect } = require('chai');

describe('Library object testing:', () => {

    it('Should have 3 funtion in it', () => {
        let actual = library;

        expect(actual).to.haveOwnProperty('calcPriceOfBook').to.be.a('function');
        expect(actual).to.haveOwnProperty('findBook').to.be.a('function');
        expect(actual).to.haveOwnProperty('arrangeTheBooks').to.be.a('function');
    });

    it('calcPriceOfBook should throw exception when 1st parameter is number', () => {
        let actual = () => {library.calcPriceOfBook(15, 1980)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 1st parameter is array', () => {
        let actual = () => {library.calcPriceOfBook([15], 1980)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 1st parameter is object', () => {
        let actual = () => {library.calcPriceOfBook({}, 1980)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 2nd parameter is real number', () => {
        let actual = () => {library.calcPriceOfBook("test", 1980.5)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 2nd parameter is string', () => {
        let actual = () => {library.calcPriceOfBook("test", '1980')};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 2nd parameter is object', () => {
        let actual = () => {library.calcPriceOfBook("test", {})};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should throw exception when 2nd parameter is array', () => {
        let actual = () => {library.calcPriceOfBook("test", ['1980'])};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('calcPriceOfBook should return mesage with price 50% less than default, when year is 1980', () => {
        let expected = `Price of TestBook is 10.00`;
        let actual = library.calcPriceOfBook('TestBook', 1980)
        expect(actual).to.be.equal(expected);
    });

    it('calcPriceOfBook should return mesage with price 50% less than default, when year is under 1980', () => {
        let expected = `Price of TestBook is 10.00`;
        let actual = library.calcPriceOfBook('TestBook', 1970)
        expect(actual).to.be.equal(expected);
    });

    it('calcPriceOfBook should return mesage with default given price when year is over 1980', () => {
        let expected = `Price of TestBook is 20.00`;
        let actual = library.calcPriceOfBook('TestBook', 1990)
        expect(actual).to.be.equal(expected);
    });

    it('findBook should throw exception when the array of books parameter is empty array', () => {
        let actual = () => {library.findBook([], 'anyBook')};

        expect(actual).to.throw(Error, "No books currently available");
    });

    it('findBook should throw exception when the array of books parameter is empty string', () => {
        let actual = () => {library.findBook('', 'anyBook')};

        expect(actual).to.throw(Error, "No books currently available");
    });

    it('findBook should return message that book were found when the book name is presended in the given array parameter', () => {
        let expected = "We found the book you want.";
        let actual = library.findBook(['TestBook', 'AnotherBook'], 'TestBook');

        expect(actual).to.be.equal(expected);
    });

    it('findBook should return message that book weren\'t found when the book name is not presended in the given array parameter', () => {
        let expected = "The book you are looking for is not here!";
        let actual = library.findBook(['TestBook', 'AnotherBook'], 'UnexistingBook');

        expect(actual).to.be.equal(expected);
    });

    it('findBook should return message that book were found even when we use real number array', () => {
        let expected = "We found the book you want.";
        let actual = library.findBook([1.5, 2], 1.5);

        expect(actual).to.be.equal(expected);
    });

    it('findBook should return message that book were found even when we use integer number array', () => {
        let expected = "We found the book you want.";
        let actual = library.findBook([1, 2], 1);

        expect(actual).to.be.equal(expected);
    });

    it('arrangeTheBooks should throw exception when given parameter is real number', () => {
        let actual = () => {library.arrangeTheBooks(1.5)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('arrangeTheBooks should throw exception when given parameter is negative number', () => {
        let actual = () => {library.arrangeTheBooks(-10)};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('arrangeTheBooks should throw exception when given parameter is string', () => {
        let actual = () => {library.arrangeTheBooks('test')};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('arrangeTheBooks should throw exception when given parameter is number in string format', () => {
        let actual = () => {library.arrangeTheBooks('10')};

        expect(actual).to.throw(Error, "Invalid input");
    });

    it('arrangeTheBooks should return correct message when it has available space', () => {
        let expected = "Great job, the books are arranged.";
        let actual = library.arrangeTheBooks(10);

        expect(actual).to.be.equal(expected);
    });

    it('arrangeTheBooks should return correct message when it is the last available space', () => {
        let expected = "Great job, the books are arranged.";
        let actual = library.arrangeTheBooks(40);

        expect(actual).to.be.equal(expected);
    });

    it('arrangeTheBooks should return correct message when there is no more available space', () => {
        let expected = "Insufficient space, more shelves need to be purchased.";
        let actual = library.arrangeTheBooks(41);

        expect(actual).to.be.equal(expected);
    });
})