
const puppeteer = require('puppeteer');
let link = "Hello";

let scrape = async () => {
	
	console.log(link);
	const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
	page.count=0;

    await page.goto('hxxx');
	await page.waitFor(1000);
	//let link = page.document.querySelector('#m-terms > div > div > div > div.clearfix.action > a');
	//console.log(link);
	page.click('#m-terms > div > div > div > div.clearfix.action > a');
	await page.waitFor(2000);


	


	
    const result = await page.evaluate(() => {
		console.log(page.count);
		let x = 0;
		//let firstLink = document.querySelector('#main_list > div:nth-child(3) > div.lst.clearfix > a:nth-child(2)');
		//page.goto(firstLink.href);
		//await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
		//page.waitFor(1000);
		//let nextLink = document.querySelector('#item > div.info > div:nth-child(3) > div.value');
		//console.log(nextLink).href;
		//console.log(link);
        return {
           x
        }

    });

    //browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
	console.log(link);
});





//https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921
