"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stremObzorStore = void 0;
var stremObzorStore = function (elements) {
    var data = [];
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var el = elements_1[_i];
        var texthtml = el.querySelector('.wall_post_text').innerHTML;
        var newtext = '';
        var br = /<br>/gi;
        var newStr = texthtml.replace(br, ' ');
        var lookforprice = function (text) {
            var numEl = '';
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
        for (var _a = 0, texthtml_1 = texthtml; _a < texthtml_1.length; _a++) {
            var character = texthtml_1[_a];
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