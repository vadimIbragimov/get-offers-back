import {filterObjectType} from "../tools/filter";

export const theMarket = (elements: Element[]) => {
    const data = [];
    data.push('qwe')
    // for (const el of elements) {
    //     const texthtml = el.querySelector('.wall_post_text').innerHTML;
    //     let newtext = '';
    //     for (let i = 0; i < texthtml.length; i++) {
    //         if (texthtml[i] === '<') {
    //             data.push({
    //                 text: newtext,
    //                 date: (el.querySelector('.rel_date') as HTMLElement).innerText,
    //             } as filterObjectType);
    //             break;
    //         }
    //         newtext += texthtml[i];
    //     }
    // }
    return data;
}