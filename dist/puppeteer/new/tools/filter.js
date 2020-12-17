"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter = (input, keyWord) => {
    return input.filter(item => item.text.includes('keyWord'));
};
exports.default = filter;
//# sourceMappingURL=filter.js.map