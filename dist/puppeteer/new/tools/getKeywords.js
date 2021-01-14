"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickFunction = void 0;
const clickFunction = () => {
    const elements = document.querySelectorAll('ul>li');
    const keyWords = [];
    for (const elem of elements) {
        if (elem.className === 'brand-product__li active__li') {
            keyWords.push(elem.id);
        }
    }
    return keyWords;
};
exports.clickFunction = clickFunction;
//# sourceMappingURL=getKeywords.js.map