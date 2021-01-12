import autoScroll from "./scroll";
import { sleep } from "./sleep";
import { groupNameType } from "../resources/groups";
import { Page } from "puppeteer";

export async function parsePage(page: Page, pageURL: string, parseFunc: () => object){
    try{
        await page.goto(pageURL);
        console.log(`Открываю страницу: ${pageURL}`);
    }
    catch (error) {
        console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
    }

    // console.log('скролим');
    // await autoScroll(page);
    // console.log('Пауза');
    // await sleep(500);

    // собираем посты
    console.log('получаем данные');
    const result = await page.$$eval('.post', parseFunc);
    console.log('Данные:', result);

    return result;
}