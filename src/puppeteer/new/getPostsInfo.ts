import { Browser } from "puppeteer";
import groupsList, { groupNameType } from "./resources/groups";

// const config = require('./resources/config.json');

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const getPostsInfo = async (groups: groupNameType[], keyWords: string[], browser: Browser) => {
    const result = [];
    for (const groupName of groups) {
        const parserFuncName = groupsList[groupName]; // это объект группы, выглядит примерно так: {href: ...}
        let parserFunc; // сюда ляжет функция, которая должна будет запускаться на контенте
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
