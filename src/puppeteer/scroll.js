// async function autoScroll(page){
//     await page.evaluate(async () => {
//         await new Promise((resolve, reject) => {
//             var totalHeight = 0;
//             var distance = 130;
//             var timer = setInterval(() => {
//                 var scrollHeight = document.body.scrollHeight;
//                     window.scrollBy(0, distance);
//                     totalHeight += distance;
                    
//                 if(totalHeight*1.1 >= scrollHeight){ //1.013(примерно 10 дней)
//                     clearInterval(timer);
//                     resolve();
//                 }
//             }, 100);
//         });
//     });
// }

// async function autoScroll(page) {
//     const distance = 10; // should be less than or equal to window.innerHeight
//     const delay = 100;
//     while (await page.evaluate(() => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight)) {
//       await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, distance);
//       await page.waitFor(delay);
//     }
// }



async function scrollPageToBottom(page, scrollStep = 250, scrollDelay = 50) {
    const lastPosition = await page.evaluate(
      async (step, delay) => {
        const getScrollHeight = (element) => {
          if (!element) return 0
  
          const { scrollHeight, offsetHeight, clientHeight } = element
          return Math.max(scrollHeight, offsetHeight, clientHeight)
        }
  
        const position = await new Promise((resolve) => {
          let count = 0
          const intervalId = setInterval(() => {
            const { body } = document
            const availableScrollHeight = getScrollHeight(body)
  
            window.scrollBy(0, step)
            count += 1
  
            if (count >= 10) {
              clearInterval(intervalId)
              resolve(count)
            }
          }, delay)
        })
  
        return position
      },
      scrollStep,
      scrollDelay
    )
    return lastPosition
  }
  
  // module.exports = {scrollPageToBottom}

// module.exports =  {
//     autoScroll
// }
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

async function scrollToBottomSmoothPromise(container, quantity, iterationTimeout, doc) {
  return new Promise(resolve => {
      setTimeout(() => scrollToBottomSmooth(container, () => resolve(container), null, quantity, iterationTimeout, doc), 1000);
  });
}

 function scrollToBottomSmooth(container, callback, tempBlock, quantity, iterationTimeout, doc ) {
    if (quantity === 0) {
        callback();
        return;
    }
    if (!tempBlock) {
      tempBlock = doc;
      container.append(tempBlock);
  }

    const scrollHeight = container.scrollHeight;
    tempBlock.scrollIntoView({behavior: 'smooth', block: 'center'});
    setTimeout(() => {
        tempBlock.remove();
        if (container.scrollHeight > scrollHeight && (quantity > 1 || quantity < 0)) {
            container.append(tempBlock);
            scrollToBottomSmooth(container, callback, tempBlock, --quantity, iterationTimeout);
        } else {
            callback();
        }
    }, iterationTimeout);
}

module.exports = {scrollPageToBottom}