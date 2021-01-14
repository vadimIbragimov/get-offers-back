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
exports.getPage = void 0;
function getPage(puppeteer) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = puppeteer.launch({
                // executablePath: '/Programs/chrome-win/chrome.exe',
                // userDataDir: "/Users/grish/AppData/Local/Chromium/User Data/Profile 1",
                // рабочий Chromium Grisha
                // executablePath: '/Program Files (x86)/Chromium/Application/chrome.exe',
                // userDataDir: "/Users/user/AppData/Local/Chromium/User Data/Profile 1",
                headless: false,
            });
            return browser;
        }
        catch (error) {
            console.log(`Не удалось открыть browser, из-за ошибки: ${error.message}`);
        }
    });
}
exports.getPage = getPage;
//# sourceMappingURL=getBrowser.js.map