// import {filterObjectType} from "../tools/filter";

import convertData from "./autoScroll/convertDate";
import parseFuncLastPostDate from "./autoScroll/lastPostDate";

export const parserPosts = (elements: Element[]) => {

    const data = [];

    for (const el of elements){

        if((el.querySelector('.wall_post_text') as HTMLElement) && (el.querySelector('.post_link>.rel_date') as HTMLElement)){
            let date = convertData((el.querySelector('.rel_date').textContent));
            const html: string = (el.querySelector('.wall_post_text') as HTMLElement).innerText;
            const texthtml: string = html.replace(/\n/gi, ' ');

            let spantext = '';
            if(el.querySelector('.wall_post_more') as HTMLElement){
                const str = (el.querySelector('.wall_post_text>span') as HTMLElement).innerHTML;
                spantext = str.replace(/<br>/gi, ' ');

            }




            for (const character of texthtml){

                if (character){
                    
                    data.push({
                        text: texthtml + spantext,
                        date: (el.querySelector('.post_link>.rel_date') as HTMLElement).innerText,
                        dateForBack: date,
                        post: `https://vk.com/${el.querySelector('.post_header_info>.post_author>.author').getAttribute("href")}?w=wall${el.querySelector('._post_content>.post_header>.post_image>img').getAttribute("data-post-id")}`
                    });
                    break;
                }
                }
            }
    }
    return data;
}
