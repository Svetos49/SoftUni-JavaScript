const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const url = 'http://localhost:5500';



describe('Test', async function () {
    this.timeout(6000)

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        page.close();
    })

    it('should load all messages when the refresh button is clicked', async () => {

        //navigate to page
        await page.goto(url);

        //find and click refresh button
        await page.click('text=Refresh');

        //check initial messages
        const content = await page.inputValue('#messages');
        expect(content).to.equal(`Spami: Hello, are you there?\nGarry: Yep, whats up :?\nSpami: How are you? Long time no see? :)\nGeorge: Hello, guys! :))\nSpami: Hello, George nice to see you! :)))`)
    });

    it('should send a message when the send button is clicked', async () => {

        //navigate to page
        await page.goto(url);

        //find and click refresh button
        await page.click('text=Send');

        //fill form

        await page.fill('#author', 'Author');
        await page.fill('#content', 'Msg content');

        //click on the send button
        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=send')
        ]);

        const data = JSON.parse(request.postData())
        expect(data.author).to.equal('Author');
        expect(data.content).to.equal('Msg content');
    });




})