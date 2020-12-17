async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 130;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    
                if(totalHeight*1.013 >= scrollHeight){ //1.013(примерно 10 дней)
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

module.exports =  {
    autoScroll
}