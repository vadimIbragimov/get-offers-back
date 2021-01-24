import '@babel/polyfill';
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import getPostsInfo from "./puppeteer/getPostsInfo";
import { groupNameType } from "./puppeteer/resources/groups";
import nodemailer from 'nodemailer';
import mailCredentials from  './mailCredentials';
import puppeteer from 'puppeteer';
import fs from 'fs';



const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

console.log(mailCredentials);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: mailCredentials
});



const app = express();
const PORT = 808;

app.use(cors());
app.use(bodyParser.json());

const mainFunc = async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    app.post('/api/parse', (req, res) => {
        res.send();
        if (req.body) {
            if (
                req.body.email?.length > 0 && validateEmail(req.body.email) &&
                req.body.groups.length > 0
            ) {
                console.log('validation ok')
                getPostsInfo((req.body.groups as groupNameType[]), ['qwe'], browser)
                    .then(response => {
                        return transporter.sendMail({
                            from: 'vkgroupparser@gmail.com',
                            to: req.body.email,
                            subject: "Результат парсинга",
                            text: JSON.stringify(response),
                            // html: "This <i>message</i> was sent from <strong>Node js</strong> server."
                        })
                    })
                    .then(result => {
                        console.log(result)
                    })
                    .catch(e => console.log(e))
            } else console.log('Error: validation failed');
        } else console.log('Error: blank body')

        console.log('Запрос: ', JSON.stringify(req.body));
    });

    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}`);
    })
};

mainFunc();
