/* eslint-disable no-useless-escape */
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import getPostsInfo from "./puppeteer/getPostsInfo";
import puppeteer from 'puppeteer';
import { classificator } from "./puppeteer/resources/classificator";
import { groupsList } from "./puppeteer/resources/groups";
import { ParsedGroupType } from "./puppeteer/types";

const SCAN_PERIOD_HOURS = 12;
const app = express();
const PORT = 808;
let parsedData: ParsedGroupType[] = [];

app.use(cors());
app.use(bodyParser.json());

const mainFunc = async () => {
	const browser = await puppeteer.launch({
		headless: false,
	});

	//Функция для периодического сканирования групп
	const parsePages = () => {
		getPostsInfo(browser, parsedData)
			.then(data => {
				console.log('[parsePages] : data parsed');
				console.log(new Date());
				parsedData = data;
			})
			.catch(e => console.error(e))
			.finally(() => setTimeout(() => parsePages(), 1000 * 60 * 5))
	};

	//Запускаем сканирование 
	parsePages();

	app.get('/api/classificator', (req, res) => {
		res.send(classificator.map((item) => ({
			id: item.id,
			name: item.name,
			series: item.series?.map((seriesItem) => ({
				name: seriesItem.name,
				modesl: seriesItem.models?.map((modelsItem) => ({
					name: modelsItem.name
				}))
			}))
		})));
	});

	app.get('/api/groups', (req, res) => res.send(groupsList));

	app.get('/api/get_data', (req, res) => {
		if (req.body) {
			if (
				req.body.groups?.length > 0 &&
				req.body.items?.length > 0
			) {
				console.log('validation ok')

				//Тут мы должны из parsedData выдернуть нужные данные, сгенерить excel и вернуть в ответ на запрос
				res.send(parsedData);

			} else console.log('Error: validation failed');
		} else console.log('Error: blank body')

		console.log('Запрос: ', JSON.stringify(req.body));
	});

	app.listen(PORT, () => {
		console.log(`server started at http://localhost:${PORT}`);
	})
};

mainFunc();
