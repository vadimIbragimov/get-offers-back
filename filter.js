const dataTheMarket = require('./dataTheMarket.json');
const dataStremObzorStore = require('./dataStremObzorStore.json');
let concatArr = dataTheMarket.concat(dataStremObzorStore);

let user = concatArr.filter(item => item.text.indexOf('Nike') >= 0);

console.log(user); 

// let newArr = [];
// for (let i = 0; i < dataJson.length; i++){
//     if ((dataJson[i].text.indexOf('Off') >= 0) && (dataJson[i].text.indexOf('Nike') >= 0)){
//         console.log(dataJson[i].text);
//         console.log(dataJson[i].data);
//         newArr.push(dataJson[i].text);
//     }
// }
// console.log(newArr);