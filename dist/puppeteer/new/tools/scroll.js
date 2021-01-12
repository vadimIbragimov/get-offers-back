"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const autoScroll = (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.evaluate(() => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise((resolve, reject) => {
            let totalHeight = 0;
            const distance = 130;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight * 1.1 >= scrollHeight) { // 1.013(примерно 10 дней)
                    clearInterval(timer);
                    resolve(true);
                }
            }, 100);
        });
    }));
});
exports.default = autoScroll;
//# sourceMappingURL=scroll.js.map