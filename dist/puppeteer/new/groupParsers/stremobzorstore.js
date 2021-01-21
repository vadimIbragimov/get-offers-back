"use strict";
// import {filterObjectType} from "../tools/filter";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stremObzorStore = void 0;
const stremObzorStore = (elements) => {
    const data = [];
    for (const el of elements) {
        if (el.querySelector('.wall_post_text') && el.querySelector('.post_link>.rel_date')) {
            const html = el.querySelector('.wall_post_text').innerText;
            const texthtml = html.replace(/\n/gi, ' ');
            let spantext = '';
            if (el.querySelector('.wall_post_more')) {
                const str = el.querySelector('.wall_post_text>span').innerHTML;
                spantext = str.replace(/<br>/gi, ' ');
            }
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
                if (character) {
                    data.push({
                        text: texthtml + spantext,
                        date: el.querySelector('.post_link>.rel_date').innerText,
                        price: lookforprice(texthtml),
                        post: `https://vk.com/${el.querySelector('.post_header_info>.post_author>.author').getAttribute("href")}?w=wall${el.querySelector('._post_content>.post_header>.post_image>img').getAttribute("data-post-id")}`
                    });
                    break;
                }
            }
        }
    }
    return data;
};
exports.stremObzorStore = stremObzorStore;
//# sourceMappingURL=stremobzorstore.js.map