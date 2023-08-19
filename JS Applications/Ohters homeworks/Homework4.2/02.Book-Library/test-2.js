const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const url = 'http://localhost:5500';

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
};

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

    it('should load all books', async () => {

        await page.route('**/jsonstore/collections/books', (route, request) => {
            route.fulfill({
                body: JSON.stringify(mockData),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                status: 200
            })
        })
        //navigate to page
        await page.goto(url);

        //find and click load button
        await page.click('text="LOAD ALL BOOKS"');

        //check table content
        await page.waitForSelector('text=Harry Potter');
        const rowData = await page.$$eval('tbody tr', row => row.map(r => r.textContent));

        expect(rowData[0]).to.contains('Harry Potter and the Philosopher\'s Stone');
        expect(rowData[0]).to.contains('J.K.Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Svetlin Nakov');

    });

    it('should add a new book', async () => {
        //navigate to page
        page.goto(url)
        //fill form
        await page.fill('input[name=title]', 'Title');
        await page.fill('input[name=author]', 'Author Name');

        //click on the submit button
        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);

        const data = JSON.parse(request.postData())
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author Name');


    });

    it('should not add a new book when the title input field is empty', async () => {
        //navigate to page
        page.goto(url)
        //fill form
        await page.fill('input[name=title]', '');
        await page.fill('input[name=author]', 'Author Name');

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('All fields are required!');
            await dialog.dismiss();
        });
    });

    it('should not add a new book when the author input field is empty', async () => {
        //navigate to page
        page.goto(url)
        //fill form
        await page.fill('input[name=title]', 'Title');
        await page.fill('input[name=author]', '');

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('All fields are required!');
            await dialog.dismiss();
        });
    });

    it('should not add a new book when all input fields are empty', async () => {
        //navigate to page
        page.goto(url)
        //fill form
        await page.fill('input[name=title]', '');
        await page.fill('input[name=author]', '');

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('All fields are required!');
            await dialog.dismiss();
        });
    });

    it('should show edit form when edid button is clicked', async () => {
        //navigate to page
        page.goto(url)
        //find and click load button
        await page.click('text="LOAD ALL BOOKS"');
        // click edit button
        await page.locator('button >> nth=1').click();


        // find edit form
        await page.waitForSelector('text=Edit FORM');
        it('check if the input fields are correctly filled before editting', async() => {

            //check if the input fields are correctly filled
            const titleValue = await page.$eval('input:below(:text("Edit FORM")) >> nth=0', (el) => el.value);
            expect(titleValue).to.equal('Harry Potter and the Philosopher\'s Stone');
    
            const authorValue = await page.$eval('input:below(:text("Edit FORM")) >> nth=0', (el) => el.value);
            expect(authorValue).to.equal('J.K.Rowling');
        })
        //fill form

        await page.locator('input:below(:text("Edit FORM")) >> nth=0').fill('Title Editted');
        await page.locator('input:below(:text("Edit FORM")) >> nth=1').fill('Author Name Editted');


        //click on the submit button
        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'PUT'),
            page.click('text=save')
        ]);

        const data = JSON.parse(request.postData())
        expect(data.title).to.equal('Title Editted');
        expect(data.author).to.equal('Author Name Editted');
    });

    it.only('should delete a book when the delete button is clicked', async () => {
        //navigate to page
        page.goto(url)

        //find and click load button
        await page.click('text="LOAD ALL BOOKS"');

        //find and click the first delete button
        const initialRows = await page.$$('tbody tr');

        page.on('dialog', dialog => dialog.accept());

        await page.click('.deleteBtn >> nth=0')

        //find and click the load button AGAIN
        await page.click('text="LOAD ALL BOOKS"');

        const finalRows = await page.$$('tbody tr');
        //check if the rows are reduced
        expect(initialRows.length).to.equal(finalRows.length + 1)



    });


})