import data from './data.json'
console.log(data);



function f1() {
    document.querySelector('.out').innerHTML = data;
}

document.querySelector('.btn').onclick = f1;