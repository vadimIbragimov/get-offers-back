import {filterObjectType} from "../tools/filter";

export const stremObzorStore = (elements: Element[]) => {
    const data = [];
    for (const el of elements){
        const texthtml: string = (el.querySelector('.wall_post_text') as HTMLElement).innerText;

        let spantext: string = '';
        if(el.querySelector('.wall_post_more') as HTMLElement){
            spantext = (el.querySelector('.wall_post_text>span') as HTMLElement).innerText;
        }

        // let newtext: string = '';
        // const br = /<br>/gi;
        // const newStr = texthtml.replace(br, ' ');
        const lookforprice = (text: any) => {
            let numEl: number | string = '';
            if(parseInt(text.match(/\d{5}/)) ){
                numEl = parseInt(text.match(/\d{5}/));
            }
            else if(parseInt(text.match(/\d{4}/)) ) {
                numEl = parseInt(text.match(/\d{4}/));
            }
            else if(parseInt(text.match(/\d{3}/)) ) {
                numEl = parseInt(text.match(/\d{3}/));
            }
            else{
                numEl = '-';
            }
            return numEl;
        }

        for (const character of texthtml){
            if (character){
                data.push({
                    text: texthtml + spantext,
                    data: (el.querySelector('.rel_date') as HTMLElement).innerText,
                    price: lookforprice(texthtml),
                    customer: 'https://vk.com' + el.querySelector('.wall_signed_by').getAttribute("href"),
                    post: 'https://vk.com' + el.querySelector('.post_image').getAttribute("href") + '?w=wall' + el.querySelector('.author').getAttribute('data-post-id')
                });
                break;
            }
            // newtext += character;
        }
    }
    return data;
}
