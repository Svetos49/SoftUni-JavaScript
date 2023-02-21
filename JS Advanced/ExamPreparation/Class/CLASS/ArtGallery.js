class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInArr = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        for (let el of this.listOfArticles) {
            if (el.articleName == articleName && el.articleModel == articleModel) {
                el.quantity += Number(quantity);
                isInArr = true;
            }
        }

        if (!isInArr) {
            this.listOfArticles.push({ articleModel, articleName, quantity });

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        for (let guest of this.guests) {
            if (guest.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }
        let obj = { guestName, points: 0, purchaseArticle: 0 };

        switch (personality) {
            case "Vip": obj.points = 500;
                break;
            case "Middle": obj.points = 250;
                break;
            default: obj.points = 50;
                break;
        }

        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article;
        let guest;
        let isArticleInArr = false;

        for (let el of this.listOfArticles) {
            if (el.articleName != articleName || el.articleModel != articleModel) {
                isArticleInArr = false;

            } else {
                article = el;
                isArticleInArr = true;
                break;
            }
        }
        if (!isArticleInArr) {
            throw new Error("This article is not found.");
        }

        if (article.quantity == 0) {
            throw new Error(`The ${articleName} is not available.`);
        }

        let isGestInArr = false;

        for (let el of this.guests) {
            if (el.guestName != guestName) {
                isGestInArr = false;
            } else {
                isGestInArr = true;
                guest = el;
                break;
            }
        }
        if (!isGestInArr) {
            return "This guest is not invited.";
        }
        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push("Articles information:");
            //console.log("Articles information:");
            for (let el of this.listOfArticles) {
                let [article, name, quantity] = Object.values(el);
                result.push(`${article} - ${name} - ${quantity}`)
              //console.log(`${article} - ${name} - ${quantity}`);
            }
            
        } else if (criteria == 'guest') {
            result.push("Guests information:");
           // console.log("Guests information:");
            for (let el of this.guests) {
                let [guestName, points, purchaseArticle] = Object.values(el);
                result.push(`${guestName} - ${purchaseArticle}`);
                //console.log(`${guestName} - ${purchaseArticle}`);
            }
        }
        return result.join('\n');
    }
}


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log('--------------------------------------------------');
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

//const artGallery = new ArtGallery('Curtis Mayfield');

// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));










