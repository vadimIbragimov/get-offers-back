"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stremObzorStore = void 0;
const stremObzorStore = (elements) => {
    const data = [];
    for (const el of elements) {
        const texthtml = el.querySelector('.wall_post_text').innerHTML;
        let newtext = '';
        const br = /<br>/gi;
        const newStr = texthtml.replace(br, ' ');
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
        for (const character of texthtml) {
            if (character === '/') {
                data.push({
                    text: newStr,
                    data: el.querySelector('.rel_date').innerText,
                    price: lookforprice(texthtml),
                    customer: 'https://vk.com' + el.querySelector('.wall_signed_by').getAttribute("href"),
                    post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('.author').getAttribute('data-post-id')
                });
                break;
            }
            newtext += character;
        }
    }
    return data;
};
exports.stremObzorStore = stremObzorStore;
//# sourceMappingURL=stremobzorstore.js.map