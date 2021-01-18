const dataStremObzorStore = require('./dataStremObzorStore.json');
let data = dataStremObzorStore;

let datas = [
    {
        text: 'Кроссовки Dunk Low Ceramic Nike, 9.5 US',
        data: 'вчера в 22:00'
      },
      {
        text: 'Другое SB Dunk Low Elephant Постер Eyes Box, one size',
        data: '9 дек в 15:11'
      },
      {
        text: 'bubu 1 Mid Dia de los Muertos Familia Nike x Jordan Brand, 11 US',
        data: '9 дек в 1:00'
      },
      {
        text: 'asap Air Jordan 1 Mid Patent Black White Gold Nike, 10 US',
        data: '7 дек в 18:44'
      },
      {
        text: 'Кроссовки 270 react winter Nike, 10 US',
        data: '6 дек в 19:21'
      },
      { text: 'Nike Jordan Maxin 200', data: 'вчера в 21:11' },
      { text: 'Nike air max react 270 winter ', data: 'вчера в 21:09' },
      { text: '1) Nike Shox TL ', data: 'вчера в 21:08' },
      { text: 'Nike Air Force 1 Mid 07', data: 'вчера в 21:08' },
      { text: 'ASAP', data: 'вчера в 21:08' }
]

let findData = {
  // id: "asap",
  // 2: "bubu",
  3: "nike"
}
// function clu(data){

//   for(let k = 0; k < data.length; k++){
//     console.log(data[k]);
//   }
// }
// console.log(clu(data));

function findInObject(findData, data) {
  let allData = [];
    for(let k in data){
      for (let key in data[k]){
        // data[k][key].toLowerCase()
        for (let klue in findData){
          if (data[k][key].toLowerCase().indexOf(findData[klue]) >= 0){
            allData.push({
              newItem: data[k]
            });
          }
        }
      }
  }
  return allData;
}


// function isNumber(obj) {
//   return obj!== undefined && typeof(obj) === 'string' && !isNaN(obj);
// }


// let arrByID = data.filter(function (item, findData) {
//   console.log(findData.length);
//   if (typeof(item.text) == 'string') {
//     let newText = item.text.toLowerCase();
//     for (let k in findData){
//       if (findData[k].id == newText){
//         return true;
//       }
//     }
      
//   }
//   return false;
// });

// const filter = (data, findData) => {
//   return data.filter(item => item.text.includes();
// }

// console.log(filter);
console.log(findInObject(findData, data));
// console.log('===========================================');
// console.log(arrByID );
// console.log();

// console.log(data);

