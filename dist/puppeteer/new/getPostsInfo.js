"use strict";
// import puppeteer from 'puppeteer';
// import fs from 'fs';
// import autoScroll from './tools/scroll'
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
// import filter, {filterObjectType} from "./tools/filter";
// const config = require('./resources/config.json');
const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const getPostsInfo = (groups, keyWords) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = [];
    // тут делаем подготовительные работы
    for (const groupName of groups) {
        const parserFuncName = groups_1.default[groupName]; // это объект группы, выглядит примерно так: {href: ...}
        let parserFunc; // сюда ляжет функция, которая должна будет запускаться на контенте
        try {
            parserFunc = (_a = (yield Promise.resolve().then(() => __importStar(require(`./groupParsers/${groupName}`))))) === null || _a === void 0 ? void 0 : _a[groupName];
            if (parserFunc) {
                // console.log(parserFunc(), parserFuncName);
                // тут открываем нужное окно и запускаем в нём парсер (лучше вынести в отдельную функцию) и записываем результаты парсинга в массив result
                result.push('qwe');
            }
            else {
                console.log(`can not fond find function ${groupName} in ${groupName}.ts`);
            }
        }
        catch (e) {
            console.log(`can not fond file ${groupName}.ts`);
        }
    }
    return result;
});
exports.default = getPostsInfo;
//# sourceMappingURL=getPostsInfo.js.map