import {filterObjectType} from "../tools/filter";

export const stremObzorStore = (elements: Element[]) => {
    const data = [];
    for (const el of elements){
        const texthtml: string = el.querySelector('.wall_post_text').innerHTML;
        let newtext = '';
        const br = /<br>/gi;
        const newStr = texthtml.replace(br, ' ');
        function lookforprice(texthtml: any){
            let numEl: number | string = '';
            if(parseInt(texthtml.match(/\d{5}/)) ){
                numEl = parseInt(texthtml.match(/\d{5}/));
            }
            else if(parseInt(texthtml.match(/\d{4}/)) ) {
                numEl = parseInt(texthtml.match(/\d{4}/));
            }
            else if(parseInt(texthtml.match(/\d{3}/)) ) {
                numEl = parseInt(texthtml.match(/\d{3}/));
            }
            else{
                numEl = '-';
            }
            return numEl;
        }

        for (let i = 0; i < texthtml.length; i++){
            if (texthtml[i] === '/'  ){
                data.push({
                    text: newStr,
                    data: (el.querySelector('.rel_date') as HTMLElement).innerText,
                    price: lookforprice(texthtml),
                    customer: 'https://vk.com' + el.querySelector('.wall_signed_by').getAttribute("href"),
                    post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('.author').getAttribute('data-post-id')
                });
                break;
            }
            newtext += texthtml[i];
        }
    }
    return data;
}
