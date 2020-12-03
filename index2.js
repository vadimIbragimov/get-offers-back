const puppeteer = require('puppeteer');
const config = require('./config.json');
const urls = require('./urls.json');
const fs = require('fs');

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
    
    console.log(urls.url[1]);
    console.log(urls.url.length);
    
        let pageURL = 'https://vk.com/stremobzorstore';
        try{
            
            await page.goto(pageURL);
            console.log(`Открываю страницу: ${pageURL}`);
        }
        catch (error) {
            console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
        }

        await autoScroll(page); 
        await sleep(1500);

        const result = await page.$$eval('.post', (elements) =>{
            const data2 = [];
            for (const el of elements){
                let texthtml = el.querySelector('.wall_post_text').innerHTML;
                let newtext = '';
                for (let i = 0; i < texthtml.length; i++){
                    
                    if (texthtml[i] == '<'){
                        data2.push({
                            text: newtext,
                            data: el.querySelector('.rel_date').innerText,
                        });
                        break;
                    }
                    newtext += texthtml[i];
                }
            }
            return data2;
        }); 
        console.log(result);
        console.log(result.length);

    await page.screenshot({path: 'example.png'});
        
    fs.writeFile("data2.json", JSON.stringify(result), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The data has been scraped and saved successfully! View it at './data2.json'");
    });

    await browser.close();
                                                           
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 130;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;


                if(totalHeight*1.1 >= scrollHeight){ //1.013
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}