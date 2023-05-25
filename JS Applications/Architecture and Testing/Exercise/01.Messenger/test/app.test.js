const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

let clientURL = 'http://127.0.0.1:5500/Exercise/01.Messenger/';

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data),
    }
}

let testMessages = {
    1: {
        author: 'Ivan',
        content: 'My message'
    },
    2: {
        author: 'Peter',
        content: 'My new message'
    }
}

let testCreateMessages = {
    3: {
        author: 'Gosho',
        content: 'Gosho new message',
        _id: 3
    },
}


describe('E2E tests', function () {

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
        //browser = await chromium.launch(); 
    });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });


    describe('load messages', () => {
        it('shoud call server', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });


            await page.goto(clientURL);
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                await page.click('#refresh')
            ]);
            let result = await response.json();
            expect(result).to.eql(testMessages);
        });

        it('shoud show data in text area', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages))
            });


            await page.goto(clientURL);
            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                await page.click('#refresh')
            ]);
            let textAreaTest = await page.$eval('#messages', (textArea) => textArea.value);
            let text = Object.values(testMessages)
                .map(x => `${x.author}: ${x.content}`)
                .join('\n')

            expect(textAreaTest).to.eql(text);
        });
    });

    describe('create messages', () => {

        it('shoud call server with correct data', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Gosho',
                content: 'Goshos message'
            }
            await page.route('**/jsonstore/messenger', (route,  request) => {
                if(request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(testCreateMessages));
                }
               
            });


            await page.goto(clientURL);
            await page.fill('#author', expected.author);
            await page.fill('#content', expected.content);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                await page.click('#submit')
            ]);

           
            let result = JSON.parse(requestData);

            expect(result).to.eql(expected);
        });

        it('shoud clear inputs', async () => {
            let requestData = undefined;
            let expected = {
                author: 'Gosho',
                content: 'Goshos message'
            }
            await page.route('**/jsonstore/messenger', (route,  request) => {
                if(request.method().toLowerCase() === 'post') {
                    requestData = request.postData();
                    route.fulfill(fakeResponse(testCreateMessages));
                }
               
            });


            await page.goto(clientURL);
            await page.fill('#author', expected.author);
            await page.fill('#content', expected.content);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                await page.click('#submit')
            ]);

            let authorValue = await page.$eval('#author', a => a.value);
            let contentValue = await page.$eval('#content', a => a.value);

            expect(authorValue).to.equal('');
            expect(contentValue).to.equal('');
        });
    });


});