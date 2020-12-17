const puppeteer = require('puppeteer');
const config = require('./config.json');
const fs = require('fs');
const scroll = require('./scroll');
import groups from "./groups";

console.log(groups);
const sleep = (ms) => new Promise( (res) => {
    setTimeout (res, ms);
});

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto('https://vk.com');
    await page.setViewport({
        width: 1370,
        height: 900
    });

    page.on('console', (msg) => {
        console.log('PAGE.LOG', msg.text());
    })

    await page.$eval('#index_email', (elem, login) => {
        elem.value = login;
    }, config.login);
    await page.$eval('#index_pass', (elem, password) => {
        elem.value = password;
    }, config.password);

    await page.click('#index_login_button');
    await page.waitForNavigation();
    
    try{
        let pageURL = `https://vk.com/${groups.theMarket.href}`;
        await page.goto(pageURL);
        console.log(`Открываю страницу: ${pageURL}`);
    }
    catch (error) {
        console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
    }

    await scroll.autoScroll(page); 
    await sleep(500);

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
                    });
                    break;
                }
                newtext += texthtml[i];
            }
        }
        return data;
    });

        console.log(result);
        console.log(result.length);

        fs.writeFile("dataTheMarket.json", JSON.stringify(result), 'utf8', function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The data has been scraped and saved successfully! View it at './dataTheMarket.json'");
        });
        
        await browser.close();


})();





