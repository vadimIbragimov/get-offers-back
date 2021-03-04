import { Browser } from "puppeteer";
import { groupsList } from "./resources/groups";
import { parsePage } from "./tools/parsePage";

const getPostsInfo = async (browser: Browser) => {
	const result = [];
	for (const group of groupsList) {
		const page = await browser.newPage();
		await page.setViewport({ width: 1366, height: 768});
		const data = await parsePage(page, `https://vk.com/${group.href}`);
		result.push({ name: group.name, data });
		page.close();
	}
	return result;
};

export default getPostsInfo;
