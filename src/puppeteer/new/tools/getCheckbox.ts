export const clickFunctionCheckbox = () => {
    let checks : any = document.querySelectorAll('.content-box__filter>label>input:checked');
    let arrCheckbox: Array<string> = [];
    
    for (let el of checks) {
        arrCheckbox.push(el.id);
    }
    return arrCheckbox;
}