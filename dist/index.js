"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const getPostsInfo_1 = __importDefault(require("./puppeteer/new/getPostsInfo"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailCredentials_1 = __importDefault(require("./mailCredentials"));
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
console.log(mailCredentials_1.default);
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: mailCredentials_1.default
});
const app = express_1.default();
const PORT = 808;
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.post('/api/parse', (req, res) => {
    var _a;
    res.send();
    if (req.body) {
        if (((_a = req.body.email) === null || _a === void 0 ? void 0 : _a.length) > 0 && validateEmail(req.body.email) &&
            req.body.groups.length > 0) {
            console.log('validation ok');
            getPostsInfo_1.default(req.body.groups, ['qwe'])
                .then(response => {
                return transporter.sendMail({
                    from: 'vkgroupparser@gmail.com',
                    to: req.body.email,
                    subject: "Результат парсинга",
                    text: JSON.stringify(response),
                });
            })
                .then(result => {
                console.log(result);
            })
                .catch(e => console.log(e));
        }
        else
            console.log('Error: validation failed');
    }
    else
        console.log('Error: blank body');
    console.log('Запрос: ', JSON.stringify(req.body));
});
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map