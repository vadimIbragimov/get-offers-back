// const dataTheMarket = require('./dataTheMarket.json');
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

let obj = JSON.parse(JSON.stringify(user));
for (key in obj) {
	let ul = document.createElement("ul");
  for (key2 in obj[key]){
			let li = document.createElement("li");
      li.innerHTML = obj[key][key2];
  		ul.appendChild(li);
    }
    document.body.appendChild(ul);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}