<<<<<<< HEAD
const dataJson = require('./data.json');

// console.log(dataJson.length);

// let b = dataJson[1];
//  console.log(b);
for (let i = 0; i <= dataJson.length; i++){
    for (const [key, value] of Object.entries(dataJson[i])) {
            if (value.indexOf('Off')> -1){
                console.log(value);
            }
        

        // console.log(`${key}: ${value}`);
      }
    // console.log(Object.entries(dataJson[i]));
    
//     for (let text in dataJson[i]){
//         if (text === 'Air' && 'air'){
//             console.log(dataJson[i]);
//         }

//     }
}
=======
const data = require('./data.json');
console.log(data.length);
>>>>>>> 014bef592d4bba64cc8ea4ab867f228c4d823dd3


