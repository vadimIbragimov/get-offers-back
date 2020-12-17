const puppeteer = require('puppeteer');
const config = require('./config.json');
const fs = require('fs');
const scroll = require('./scroll');
const findPrice = require('./lookforprice');

const sleep = (ms) => new Promise( (res) => {
    setTimeout (res, ms);
});

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Program Files (x86)/Chromium/Application/chrome.exe',
        userDataDir: "/Users/user/AppData/Local/Chromium/User Data/Profile 1",
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://vk.com/stremobzorstore')
    // await page.goto('https://vk.com');
    await page.setViewport({
        width: 1370,
        height: 900
    });
    page.on('console', (msg) => {
        console.log('PAGE.LOG', msg.text());
    })

    // await page.$eval('#index_email', (elem, login) => {
    //     elem.value = login;
    // }, config.login);
    // await page.$eval('#index_pass', (elem, password) => {
    //     elem.value = password;
    // }, config.password);

    // await page.click('#index_login_button');
    // await page.waitForNavigation();
    
        let pageURL = 'https://vk.com/stremobzorstore';
        try{
            // await page.goto(pageURL);
            console.log(`Открываю страницу: ${pageURL}`);
        }
        catch (error) {
            console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
        }

        await scroll.autoScroll(page); 
        await sleep(500);

        const result = await page.$$eval('.post', (elements) =>{
            const data2 = [];
            for (const el of elements){
                let texthtml = el.querySelector('.wall_post_text').innerHTML;
                let newtext = '';
                function lookforprice(){
                    var numEl = '';
                
                    if(parseInt(texthtml.match(/\d{4}/)) ){
                        numEl = parseInt(texthtml.match(/\d{4}/));
                    }
                    else if(parseInt(texthtml.match(/\d{3}/)) ) {
                        numEl = parseInt(texthtml.match(/\d{3}/));
                    }
                    else{
                        numEl = '-';
                    }
                    return numEl
                }

                for (let i = 0; i < texthtml.length; i++){
                    if (texthtml[i] === '/'  ){
                        data2.push({
                            text: newtext,
                            data: el.querySelector('.rel_date').innerText,
                            price: lookforprice()
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
        
    fs.writeFile("dataStremObzorStore.json", JSON.stringify(result), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The data has been scraped and saved successfully! View it at './dataStremObzorStore.json'");
    });

    await browser.close();
                                                           
})();