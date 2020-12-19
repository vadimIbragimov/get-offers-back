type groupType = {
    href: string,
}

export type groupNameType = 'theMarket' |  'stremObzorStore';

const groupsList: Record<groupNameType, groupType> = {
    theMarket : {
        href: 'tmrkt',
    },
    stremObzorStore: {
        href: 'stremobzorstore',
    }
}

export default groupsList;
