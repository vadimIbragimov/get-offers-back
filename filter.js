
const dataJson = require('./data.json');
// let newArr = [];
// for (let i = 0; i < dataJson.length; i++){
//     if ((dataJson[i].text.indexOf('Off') >= 0) && (dataJson[i].text.indexOf('Nike') >= 0)){
//         console.log(dataJson[i].text);
//         console.log(dataJson[i].data);
//         newArr.push(dataJson[i].text);
//     }
// }
// console.log(newArr);



let user = dataJson.filter(item => item.text.indexOf('Off') >= 0);

console.log(user); // Вася

