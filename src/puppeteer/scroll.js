async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 130;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    
                if(totalHeight*1.1 >= scrollHeight){ //1.013(примерно 10 дней)
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

// async function autoScroll(page) {
//     const distance = 10; // should be less than or equal to window.innerHeight
//     const delay = 100;
//     while (await page.evaluate(() => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight)) {
//       await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, distance);
//       await page.waitFor(delay);
//     }
// }


module.exports =  {
    autoScroll
}
// const puppeteer = require('puppeteer');
// var puppeteerAutoscrollDown = require("puppeteer-autoscroll-down");
// const config = require('./config.json');
// const fs = require('fs');
// (async() => {
//     const browser = await puppeteer.launch({ headless: true })
//     const page = await browser.newPage()
//     await page.setViewport({ width: 1366, height: 768 })
    
//     await page.goto('https://en.wikipedia.org/wiki/Main_Page')
//     const lastPosition = await scrollPageToBottom(page)
//     await page.screenshot({ path: path.normalize(`${__dirname}/example.png`) })
    
//     console.log(`lastPosition: ${lastPosition}`)
    
//     await browser.close()
// })
