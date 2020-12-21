"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter = function (input, keyWord) {
    return input.filter(function (item) { return item.text.includes('keyWord'); });
};
exports.default = filter;
//# sourceMappingURL=filter.js.map