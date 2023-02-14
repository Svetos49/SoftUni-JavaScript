let { expect } = require('chai');
let { bookSelection } = require("./bookSelection.js");


describe("bookSelection", () => {
   
   
    describe("isGenreSuitable testing", () => {
        let catalog = ["Thriller", "Horror", "Adventure" ];
        let genre = '';
        let age = 0;
        it("should age is bigger than 12", () => {
            genre = catalog[0];
            age = 12;
            let actual = () => {bookSelection.isGenreSuitable("Thriller", 12)};
            expect(actual).to.throw(Error, `Books with ${genre} genre are not suitable for kids at ${age} age`)
        });
        it("should genre is rong", () => {
            genre = catalog[0];
            age = 10;
            let actual = () => {bookSelection.isGenreSuitable("Thriller", 10)};
            expect(actual).to.throw(Error, `Books with ${genre} genre are not suitable for kids at ${age} age`)
        });
        it("should genre is rong", () => {
            genre = catalog[1];
            age = 10;
            let actual = () => {bookSelection.isGenreSuitable("Horror", 10)};
            expect(actual).to.throw(Error, `Books with ${genre} genre are not suitable for kids at ${age} age`)
        });
        it('the genre is suitable', () => {
             let actual = bookSelection.isGenreSuitable('Adventure', 23);
             genre = catalog[2];
             age = 23;
             expect(actual).to.be.equal(`Those books are suitable`);
        });
     });

     describe("isItAffordable testing", () => {

        it("shoud less money", () => {
            let expected = "You don't have enough money";
            expect(bookSelection.isItAffordable(22,10)).to.be.equal(expected)

        });
        it("shoud more money", () => {
            let expected = "You don't have enough money";
            expect(bookSelection.isItAffordable(22,10)).to.be.equal(expected)

        });

        it("shoud enough money", () => {
            let price = 22
            let budget = 80
            let result = budget - price;
            let expected = `Book bought. You have ${result}$ left`

            expect(bookSelection.isItAffordable(22, 80)).to.be.equal(expected)

        });

        it('not number', () => {
            let actual = () => {bookSelection.isItAffordable('b', 4)};
            expect(actual).to.throw(Error, "Invalid input");
        });

        it('not number', () => {
            let actual = () => {bookSelection.isItAffordable('4', 'da')};
            expect(actual).to.throw(Error, "Invalid input");
        })
     });

     describe("suitableTitles testing", () => {

        it("TODO …", () => {
            // TODO: …
        });
     });
     // TODO: …
});