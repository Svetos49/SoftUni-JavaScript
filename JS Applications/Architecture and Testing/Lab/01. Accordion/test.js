

const { chromium } = require('playwright-chromium');

const { expect } = require('chai');

let browser, page; // Declare reusable variables


describe('E2E tests', async function() {
    this.timeout(5000);

before(async () => { browser = await chromium.launch(); });

after(async () => { await browser.close(); });

beforeEach(async () => { page = await browser.newPage(); });

afterEach(async () => { await page.close(); });

it('initial load', async () => {
  await  page.goto('http://127.0.0.1:5500/Lab/01.%20Accordion/');

//   await page.screenshot({path: 'page.png'});
//   expect(true).to.be.true;
    await page.waitForSelector('.accordion');

 const content = await page.textContent('#main');
 
 expect(content).to.contains('Scalable Vector Graphics');
 expect(content).to.contains('Open standard');
 expect(content).to.contains('ALGOL');
 expect(content).to.contains('Unix');
});

// it('works', async () => {
//     await new Promise(r => setTimeout(r, 2000));
//     expect(1).to.equal(1);
// })

it('More button works', async () => {
  await  page.goto('http://localhost:5500');
  await page.waitForSelector('.accordion');

  await page.click('text = "More"');

  await page.waitForResponse(/articles\/details/i);

  
  const visible = await page.isVisible('.accordion p');

  expect(visible).to.be.true;
});


it.only('Less button works', async () => {
  await  page.goto('http://127.0.0.1:5500/Lab/01.%20Accordion/');
  await page.waitForSelector('.accordion');

  await page.click('text = "More"');
  await page.waitForResponse(/articles\/details/i);
  await page.waitForSelector('.accordion p', {state: 'visible'});

  await page.click('text = Less');

  const visible = await page.isVisible('.accordion p');

  expect(visible).to.be.false;
});

});