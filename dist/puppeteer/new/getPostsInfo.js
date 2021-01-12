"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groups_1 = __importDefault(require("./resources/groups"));
const parsePage_1 = require("./tools/parsePage");
// const config = require('./resources/config.json');
const getPostsInfo = (groups, keyWords, browser) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const result = [];
    for (const groupName of groups) {
        const groupHref = (_a = groups_1.default[groupName]) === null || _a === void 0 ? void 0 : _a.href; // это объект группы, выглядит примерно так: {href: ...}
        let parserFunc; // сюда ляжет функция, которая должна будет запускаться на контенте
        if (groupHref) {
            try {
                parserFunc = (_b = (yield Promise.resolve().then(() => __importStar(require(`./groupParsers/${groupName}`))))) === null || _b === void 0 ? void 0 : _b[groupName];
                if (parserFunc) {
                    // console.log(parserFunc(), parserFuncName);
                    // тут открываем нужное окно и запускаем в нём парсер (лучше вынести в отдельную функцию) и записываем результаты парсинга в массив result
                    const page = yield browser.newPage();
                    parsePage_1.parsePage(page, `https://vk.com/${groupHref}`, parserFunc);
                    result.push('qwe');
                }
                else {
                    throw new Error(`can not find parser function ${groupName} in ${groupName}.ts`);
                }
            }
            catch (e) {
                throw new Error(`can not find file ${groupName}.ts`);
            }
        }
        else {
            throw new Error(`can not find file ${groupName}.ts`);
        }
    }
    return result;
});
exports.default = getPostsInfo;
//# sourceMappingURL=getPostsInfo.js.map