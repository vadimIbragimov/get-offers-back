const parseFuncLastPostDate = (elements: any) => {
    let lastDatePost:string = '';
    for (const el of elements){
        lastDatePost = el.querySelector('.rel_date').innerText;
    }
    return lastDatePost;
}

export default parseFuncLastPostDate;