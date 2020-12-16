
let data = [
    {
        text: 'Кроссовки Nike Dunk Low Ceramic Nike, 9.5 US',
        data: 'вчера в 22:00'
      },
      {
        text: 'Другое Nike SB Dunk Low Elephant Постер Eyes Box, one size',
        data: '9 дек в 15:11'
      },
      {
        text: 'Кроссовки 1 Mid Dia de los Muertos Familia Nike x Jordan Brand, 11 US',
        data: '9 дек в 1:00'
      },
      {
        text: 'Кроссовки Air Jordan 1 Mid Patent Black White Gold Nike, 10 US',
        data: '7 дек в 18:44'
      },
      {
        text: 'Кроссовки 270 react winter Nike, 10 US',
        data: '6 дек в 19:21'
      },
      { text: 'Nike Jordan Maxin 200', data: 'вчера в 21:11' },
      { text: 'Nike air max react 270 winter ', data: 'вчера в 21:09' },
      { text: '1) Nike Shox TL ', data: 'вчера в 21:08' },
      { text: 'Nike Air Force 1 Mid 07', data: 'вчера в 21:08' }
]

// console.log(data);

let obj = JSON.parse(JSON.stringify(data));
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