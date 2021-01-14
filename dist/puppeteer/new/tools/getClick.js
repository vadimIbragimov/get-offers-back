"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCheckbox_1 = require("./getCheckbox");
const getEmail_1 = require("./getEmail");
const getKeywords_1 = require("./getKeywords");
document.querySelector('.btn').onclick = getDataFromFront;
function getDataFromFront() {
    getKeywords_1.clickFunction();
    getCheckbox_1.clickFunctionCheckbox();
    getEmail_1.getEmail();
}
//# sourceMappingURL=getClick.js.map