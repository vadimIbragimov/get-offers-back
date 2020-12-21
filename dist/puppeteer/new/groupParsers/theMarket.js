"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theMarket = void 0;
var theMarket = function (elements) {
    var data = [];
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var el = elements_1[_i];
        var texthtml = el.querySelector('.wall_post_text').innerHTML;
        var newtext = '';
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
        for (var i = 0; i < texthtml.length; i++) {
            if (texthtml[i] === '<' && texthtml[i + 1] === 'a') {
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
};
exports.theMarket = theMarket;
//# sourceMappingURL=theMarket.js.map