"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickFunctionCheckbox = void 0;
const clickFunctionCheckbox = () => {
    const checks = document.querySelectorAll('.content-box__filter>label>input:checked');
    const arrCheckbox = [];
    for (const el of checks) {
        arrCheckbox.push(el.id);
    }
    return arrCheckbox;
};
exports.clickFunctionCheckbox = clickFunctionCheckbox;
//# sourceMappingURL=getCheckbox.js.map