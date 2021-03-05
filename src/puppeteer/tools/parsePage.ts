import autoScroll from "./autoScroll/scroll";
import { Page } from "puppeteer";
import parseFuncLastPostDate from "./autoScroll/lastPostDate";
import convertData from "./autoScroll/convertDate";
import { parserPosts } from './parserPosts';
import { ParsedDataType } from "../types";

export const parsePage: (page: Page) => Promise<ParsedDataType[]> = async (page: Page) => {

	/*---------------------НОВЫЙ СКРОЛЛ, НУЖНО ТЕСТИТЬ---------------------- */
	let counter = 0;
	const todayDate: Date = new Date();
	const todayMinusOneMonth = new Date(todayDate.setDate(todayDate.getDate() - 10 )); // вычисляем дату, которая была 30 дней назад, до нее и будем скролить
	const oneMonthPeriod = new Date(todayMinusOneMonth); // переводим из милисекунд в обычный формат
	console.log(`${oneMonthPeriod} --- дата, дальше которой парситься не будет`);

	while (counter < 5000) {
		await autoScroll(page);
		const date: string = await page.$$eval('#page_wall_posts>.page_block', parseFuncLastPostDate); // возвращается след формат: "17 янв", наш последний пост каждого скролла
		// console.log(date);
		counter += 1;
		// смотрим на дату последнего поста, если больше определённой, то завершаем скрипт
		console.log(`${convertData(date)} --- дата последнего поста за ${counter} скролл`);
		
		if (convertData(date) < oneMonthPeriod) { // сравнивается при каждом цикле дата последнего поста при скролле и заданая дата, в нашем случае сегодня вычесть 30 дней (переменная todayMinusOneMonth)
			break
		}
	}

	// console.log('скролим');
	// await autoScroll(page);
	// console.log('Пауза');
	// await sleep(500);

	// собираем посты
	console.log('получаем данные');
	const result = await page.$$eval('#page_wall_posts>.page_block', parserPosts);
	console.log('Данные:', result);

	return result;
}