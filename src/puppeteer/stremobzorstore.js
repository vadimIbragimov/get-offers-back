const puppeteer = require('puppeteer');
// let puppeteerAutoscrollDown = require("puppeteer-autoscroll-down");
const config = require('./config.json');
const fs = require('fs');
const scroll = require('./scroll');
// const findPrice = require('./lookforprice');

const sleep = (ms) => new Promise( (res) => {
    setTimeout (res, ms);
});

(async () => {
    
    const browser = await getPage();
    const page = await browser.newPage();
    // await page.goto('https://vk.com/stremobzorstore')
    await page.goto('https://vk.com');
    await page.setViewport({
        width: 1370,
        height: 900
    });
    page.on('console', (msg) => {
        console.log('PAGE.LOG', msg.text());
    })
    //пока что заходим с авторизацией в VK, на сервере настроим без авторизации, тк везде настройки индивидуальные 
    await page.$eval('#index_email', (elem, login) => {
        elem.value = login;
    }, config.login);
    await page.$eval('#index_pass', (elem, password) => {
        elem.value = password;
    }, config.password);

    await page.click('#index_login_button');
    await page.waitForNavigation();

    const pageURL = 'https://vk.com/stremObzorStore';
    


    let res = await parsePage(page, pageURL);
        
        console.log(res);
        console.log(res.length);
        
    fs.writeFile("dataStremObzorStore.json", JSON.stringify(res), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The data has been scraped and saved successfully! View it at './dataStremObzorStore.json'");
    });

    await browser.close();
                                                           
})();



// запускаем браузер и возвращаем страничку
async function getPage(){
    try{
        const browser = puppeteer.launch({
            // executablePath: '/Programs/chrome-win/chrome.exe',
            // userDataDir: "/Users/grish/AppData/Local/Chromium/User Data/Profile 1",
            //рабочий Chromium
            // executablePath: '/Program Files (x86)/Chromium/Application/chrome.exe',
            // userDataDir: "/Users/user/AppData/Local/Chromium/User Data/Profile 1",
            headless: true,
        });
        return browser
    }
    catch (error){
        console.log(`Не удалось открыть browser, из-за ошибки: ${error}`);
    }
}

//парсим группу 
    async function parsePage(page, pageURL){
        try{
            await page.goto(pageURL);
            console.log(`Открываю страницу: ${pageURL}`);
        }
        catch (error) {
            console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
        }



        // while (counter < 1000) {
            const container = await page.$eval('.post', (el) => {
                return el;
            });
            const doc = await page.evaluate(() => {return document});
            await scroll.scrollToBottomSmoothPromise(container, 30, 3000, doc);
            // const date = await page.$$eval('.post', );
            // //смотрим на дату последнего поста, если больше определённой, то завершаем скрипт
            // if(){
            //     break;
            // }
        // }
         
        // const scrollStep = 250 // default
        // const scrollDelay = 100 // default
        // await scrollPageToBottom(page, scrollStep, scrollDelay)

        // await function autoScroll(page){
        //     const scrollStep = 250 // default
        //     const scrollDelay = 100 // default
        //     puppeteerAutoscrollDown(page, scrollStep, scrollDelay);
        //     scrollStep -= 20;
        // }
        
        // const scrollStep = 250 // default
        // const scrollDelay = 10  // default

        // await puppeteerAutoscrollDown(page, scrollStep, scrollDelay);

        // await sleep(500);

        //собираем посты



        const result = await page.$$eval('.post', parseFunc);


        return result;
    }

//скрипт собирающий посты
const parseFunc = (elements) => {
    const data = [];
    for (const el of elements){
        let texthtml = el.querySelector('.wall_post_text').innerText;
        let spantext = '';

        if(el.querySelector('.wall_post_more')){
            spantext = el.querySelector('.wall_post_text>span').innerText;
        }        
        // let newtext = '';
        // let br = /<br>/gi;
        // let newStr = texthtml.replace(br, ' ');
        const lookforprice = (text) =>{
            var numEl = '';
            if(parseInt(text.match(/\d{5}/)) ){
                numEl = parseInt(text.match(/\d{5}/));
            }
            else if(parseInt(text.match(/\d{4}/)) ) {
                numEl = parseInt(text.match(/\d{4}/));
            }
            else if(parseInt(text.match(/\d{3}/)) ) {
                numEl = parseInt(text.match(/\d{3}/));
            }
            else{
                numEl = '-';
            }
            return numEl;
        }

        for (let i of texthtml){
            if (i){
                data.push({
                    text: texthtml + spantext,
                    // text2: spantext,
                    data: el.querySelector('.rel_date').innerText,
                    price: lookforprice(texthtml),

                    // customer: 'https://vk.com' + el.querySelector('.wall_signed_by').getAttribute("href"),
                    // post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('._post').getAttribute('data-post-id')

                });
                break;
            }
            // newtext += i;
        }
    }
    return data;
}


// const parseFuncLastPostDate = (elements) => {
//     for (const el of elements){
//         let texthtml = el.querySelector('.wall_post_text').innerText;
//         for (let i of texthtml){
//             if (i){
//                 return el.querySelector('.rel_date').innerText;
//             }
//         }
//     }
// }