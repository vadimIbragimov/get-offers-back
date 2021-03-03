import { Browser } from "puppeteer";
import { groupsList } from "./resources/groups";
import { parsePage } from "./tools/parsePage";

const getPostsInfo = async (browser: Browser) => {
	const result = [];
	for (const group of groupsList) {
		const page = await browser.newPage();
		const data = await parsePage(page, `https://vk.com/${group.href}`);
		result.push({ name: group.name, data })
	}
	return result;
};

export default getPostsInfo;
