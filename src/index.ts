import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import getPostsInfo from "./puppeteer/new/getPostsInfo";
import { groupNameType } from "./puppeteer/new/resources/groups";

const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const app = express();
const PORT = 808;

app.use(cors());
app.use(bodyParser.json());

app.post( '/api/parse', ( req, res ) => {
    res.send();
    if(req.body){
        if (
            req.body.email?.length > 0 && validateEmail(req.body.email) &&
            req.body.groups.length > 0
        ){
            console.log('validation ok')
            getPostsInfo((req.body.groups as groupNameType[]), ['qwe']);
        } else console.log('Error: validation failed');
    } else console.log('Error: blank body')

    console.log('Запрос: ', JSON.stringify(req.body));
} );

app.listen(PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
})
