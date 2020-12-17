export type filterObjectType = {
    text: string,
    date: string,
}

const filter = (input: filterObjectType[], keyWord: string) => {
     return input.filter(item => item.text.includes('keyWord'));
}

export default filter;
