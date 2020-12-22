// const puppeteer = require('puppeteer');
// const config = require('./config.json');
// const fs = require('fs');
// const scroll = require('./scroll');
// import groups from "./groups";

// console.log(groups);
// const sleep = (ms) => new Promise( (res) => {
//     setTimeout (res, ms);
// });

// (async () => {

//     const browser = await puppeteer.launch({
//         headless: true,
//     });

//     const page = await browser.newPage();
//     await page.goto('https://vk.com');
//     await page.setViewport({
//         width: 1370,
//         height: 900
//     });

//     page.on('console', (msg) => {
//         console.log('PAGE.LOG', msg.text());
//     })

//     await page.$eval('#index_email', (elem, login) => {
//         elem.value = login;
//     }, config.login);
//     await page.$eval('#index_pass', (elem, password) => {
//         elem.value = password;
//     }, config.password);

//     await page.click('#index_login_button');
//     await page.waitForNavigation();
    
//     try{
//         let pageURL = `https://vk.com/${groups.theMarket.href}`;
//         await page.goto(pageURL);
//         console.log(`Открываю страницу: ${pageURL}`);
//     }
//     catch (error) {
//         console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
//     }

//     await scroll.autoScroll(page); 
//     await sleep(500);

//     const result = await page.$$eval('.post', (elements) =>{
//         const data = [];
//         for (const el of elements){
//             let texthtml = el.querySelector('.wall_post_text').innerHTML;
//             let newtext = '';
//             for (let i = 0; i < texthtml.length; i++){
//                 if (texthtml[i] == '<'){
//                     data.push({
//                         text: newtext,
//                         data: el.querySelector('.rel_date').innerText,
//                     });
//                     break;
//                 }
//                 newtext += texthtml[i];
//             }
//         }
//         return data;
//     });

//         console.log(result);
//         console.log(result.length);

//         fs.writeFile("dataTheMarket.json", JSON.stringify(result), 'utf8', function(err) {
//             if(err) {
//                 return console.log(err);
//             }
//             console.log("The data has been scraped and saved successfully! View it at './dataTheMarket.json'");
//         });
        
//         await browser.close();


// })();




const puppeteer = require('puppeteer');
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

    const pageURL = 'https://vk.com/tmrkt';
    


    let res = await parsePage(page, pageURL);
        
        console.log(res);
        console.log(res.length);
        
    fs.writeFile("dataTheMarket.json", JSON.stringify(res), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The data has been scraped and saved successfully! View it at './dataTheMarket.json'");
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
            headless: false,
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

        await scroll.autoScroll(page); 
        await sleep(500);

        //собираем посты
        const result = await page.$$eval('.post', parseFunc);

        return result;
    }

//скрипт собирающий посты
const parseFunc = (elements) => {
    const data = [];
    for (const el of elements){
        let texthtml = el.querySelector('.wall_post_text').innerHTML;
        let newtext = '';
        // let br = /<br>/gi;
        // let newStr = texthtml.replace(br, ' ');
        function lookforprice(texthtml){
            var numEl = '';
            if(parseInt(texthtml.match(/\d{5}/)) ){
                numEl = parseInt(texthtml.match(/\d{5}/));
            }
            else if(parseInt(texthtml.match(/\d{4}/)) ) {
                numEl = parseInt(texthtml.match(/\d{4}/));
            }
            else if(parseInt(texthtml.match(/\d{3}/)) ) {
                numEl = parseInt(texthtml.match(/\d{3}/));
            }
            else{
                numEl = '-';
            }
            return numEl;
        }

        for (let i = 0; i < texthtml.length; i++){
            if (texthtml[i] === '<' && texthtml[i+1] === 'a'){
                data.push({
                    text: newtext,
                    data: el.querySelector('.rel_date').innerText,
                    price: lookforprice(newtext),
                    customer: '-',
                    post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('.author').getAttribute('data-post-id')
                });
                break;
            }
            newtext += texthtml[i];
        }
    }
    return data;
}
