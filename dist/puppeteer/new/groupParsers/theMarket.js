"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theMarket = void 0;
const theMarket = (elements) => {
    const data = [];
    for (const el of elements) {
        const texthtml = el.querySelector('.wall_post_text').innerText;
        let spantext = '';
        if (el.querySelector('.wall_post_more')) {
            spantext = el.querySelector('.wall_post_text>span').innerText;
        }
        // let newtext: string = '';
        const lookforprice = (text) => {
            let numEl = '';
            if (parseInt(text.match(/\d{5}/))) {
                numEl = parseInt(text.match(/\d{5}/));
            }
            else if (parseInt(text.match(/\d{4}/))) {
                numEl = parseInt(text.match(/\d{4}/));
            }
            else if (parseInt(text.match(/\d{3}/))) {
                numEl = parseInt(text.match(/\d{3}/));
            }
            else {
                numEl = '-';
            }
            return numEl;
        };
        for (const i of texthtml) {
            if (i) {
                data.push({
                    text: texthtml + spantext,
                    data: el.querySelector('.rel_date').innerText,
                    price: lookforprice(texthtml),
                    customer: '-',
                    post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('.author').getAttribute('data-post-id')
                });
                break;
            }
            // newtext += i;
        }
    }
    return data;
};
exports.theMarket = theMarket;
//# sourceMappingURL=theMarket.js.map