"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmail = void 0;
const getEmail = () => {
    const newArrEmail = [];
    newArrEmail.push(document.getElementById('email').value);
    console.log(newArrEmail);
    return newArrEmail;
};
exports.getEmail = getEmail;
//# sourceMappingURL=getEmail.js.map