import { Browser } from "puppeteer";
import { groupsList } from "./resources/groups";
import { parsePage } from "./tools/parsePage";

const getPostsInfo = async (browser: Browser) => {
	const result = [];
	const page = await browser.newPage();
	await page.setViewport({ width: 1366, height: 768});
	for (const group of groupsList) {
		await page.goto(`https://vk.com/${group.href}`);
		const data = await parsePage(page);
		result.push({ name: group.name, data })
	}
	page.close();
	return result;
};

export default getPostsInfo;
