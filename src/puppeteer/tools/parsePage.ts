import { autoScroll } from "./autoScroll/scroll";
import { Page } from "puppeteer";
import { getSmallPostsInfo } from "./autoScroll/getSmallPostsInfo";
import { parserPosts } from './parserPosts';
import { ParsedDataType } from "../types";

export const parsePage: (page: Page, currentBase: string[]) => Promise<ParsedDataType[]> = async (page, currentBase) => {

	let counter = 0;
	const todayDate: Date = new Date();
	const todayMinusOneMonth = new Date(todayDate.setDate(todayDate.getDate() - 30)).getTime(); // вычисляем дату, которая была 30 дней назад, до нее и будем скролить

	while (counter < 5000) {
		counter += 1;
		await autoScroll(page);
		const posts = await page.$$eval('.post .post_link>.rel_date', getSmallPostsInfo);

		// Если в базе что-то есть по этой группе, то сравниваем postId, если нет, смотрим на дату поста
		if (currentBase.length > 0) {
			// Если находится пост из тех что уже есть в базе, останавливаем скролл
			if (posts.filter((post) => !!currentBase.find((postid) => postid === post.postId)).length > 0) break;
		} else {
			// Если дата последнего поста раньше чем сегодня минус 30 дней, то останавливаем скролл
			if (posts[posts.length - 1].date <= todayMinusOneMonth) break;
		}
	}

	// собираем посты
	console.log('получаем данные');
	const result = await page.$$eval('.post', parserPosts, currentBase);
	console.log('Данные:', result);

	return result;
}