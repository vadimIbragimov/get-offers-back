/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { parseVKDate } from "../parseVKDate";

export const getSmallPostsInfo = (elements: Element[]) => {
    const posts = [];

    for (const el of elements) {
        posts.push(
            {
                postId: el.getAttribute('data-post-id'),
                date: parseVKDate((el.querySelector('.post_link>.rel_date') as HTMLElement).innerText)
            }
        );
    }
    return posts;
};
