import { Browser } from "puppeteer";
import groupsList, { groupNameType } from "./resources/groups";
import { parsePage } from "./tools/parsePage";

// const config = require('./resources/config.json');

const getPostsInfo = async (groups: groupNameType[], keyWords: string[], browser: Browser) => {

    const result = [];
    for (const groupName of groups) {
        const groupHref = groupsList[groupName]?.href; // это объект группы, выглядит примерно так: {href: ...}
        let parserFunc; // сюда ляжет функция, которая должна будет запускаться на контенте
        if (groupHref) {
            try {
                parserFunc = (await import(`./groupParsers/${groupName}`))?.[groupName];
                if (parserFunc) {
                    // console.log(parserFunc(), parserFuncName);
                    // тут открываем нужное окно и запускаем в нём парсер (лучше вынести в отдельную функцию) и записываем результаты парсинга в массив result
                    const page = await browser.newPage();
                    parsePage(page, `https://vk.com/${groupHref}`, parserFunc);
                    result.push('qwe')
                } else {
                    throw new Error(`can not find parser function ${groupName} in ${groupName}.ts`)
                }
            } catch (e) {
                throw new Error(`can not find file ${groupName}.ts`)
            }
        } else {
            throw new Error(`can not find file ${groupName}.ts`)
        }
    }

    return result;
};

export default getPostsInfo;
