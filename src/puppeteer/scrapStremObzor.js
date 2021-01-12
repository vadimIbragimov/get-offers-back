function stremObzorStoreScrap() {
    await page.$$eval('.post', (elements) =>{
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
} 

export default stremObzorStoreScrap;