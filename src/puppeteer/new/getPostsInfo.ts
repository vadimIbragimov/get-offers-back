// import puppeteer from 'puppeteer';
// import fs from 'fs';
// import autoScroll from './tools/scroll'

import groupsList, { groupNameType } from "./resources/groups";
// import filter, {filterObjectType} from "./tools/filter";

// const config = require('./resources/config.json');

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const getPostsInfo = async (groups: groupNameType[], keyWords: string[]) => {
    const result = [];
    // тут делаем подготовительные работы

    for (const groupName of groups) {
        const parserFuncName = groupsList[groupName];
        let parserFunc;
        try {
            parserFunc = (await import(`./groupParsers/${groupName}`))?.[groupName];
            if (parserFunc) {
                // console.log(parserFunc(), parserFuncName);
                // тут открываем нужное окно и запускаем в нём парсер (лучше вынести в отдельную функцию) и записываем результаты парсинга в массив result

                result.push('qwe')
            } else {
                console.log(`can not fond find function ${groupName} in ${groupName}.ts`)
            }
        } catch (e) {
            console.log(`can not fond file ${groupName}.ts`)
        }
    }

    return result;
};

export default getPostsInfo;
