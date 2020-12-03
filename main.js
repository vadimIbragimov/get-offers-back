let out = document.querySelector('.out');
let inp = document.querySelector('.inp');
function addd() {
    const puppeteer = require('puppeteer');
    const config = require('./config.json');
    const fs = require('fs');
    const sleep = (ms) => new Promise( (res) => {
        setTimeout (res, ms);
    });

    (async () => {
    const browser = await puppeteer.launch({headless: false,});
    const page = await browser.newPage();
    await page.goto('https://vk.com');
    await page.setViewport({
        width: 1200,
        height: 900
    });
    await page.$eval('#index_email', (elem, login) => {
        elem.value = login;
    }, config.login);
    await page.$eval('#index_pass', (elem, password) => {
        elem.value = password;
    }, config.password);
    await page.click('#index_login_button');
    await page.waitForNavigation();
    await page.goto('https://vk.com/tmrkt');

    await autoScroll(page); 
    
    await sleep(1500);
    const result = await page.$$eval('.post', (elements) =>{
        const data = [];
        for (const el of elements){
            let texthtml = el.querySelector('.wall_post_text').innerHTML;
            let newtext = '';
            for (let i = 0; i < texthtml.length; i++){
                
                if (texthtml[i] == '<'){
                    data.push({
                        text: newtext,
                        data: el.querySelector('.rel_date').innerText,
                        // price: showPrice(el.querySelector('.wall_post_text').innerHTML),
                    });
                    break;
                }
                newtext += texthtml[i];
            }
            // data.push({
            //     text: el.querySelector('.wall_post_text').innerHTML,
            //     date: el.querySelector('.rel_date').innerText,
            // });
        }
        return data;
    });
    console.log(result);
    console.log(result.length);
    
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();
}

document.querySelector('.btn').onclick = addd;

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 30);
        });
    });
}