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

    await autoScroll(page);
    await sleep(500);

    // собираем посты
    const result = await page.$$eval('.post', parseFunc);

    return result;
}