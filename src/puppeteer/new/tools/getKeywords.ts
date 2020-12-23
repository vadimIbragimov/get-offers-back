export const clickFunction = () => {
    let elements : any = document.querySelectorAll('ul>li');
    let keyWords : Array<string> = [];
    
    for (let elem of elements ) {
        if(elem.className == 'brand-product__li active__li'){
            keyWords.push(elem.id);
        }
    }
    return keyWords;
}