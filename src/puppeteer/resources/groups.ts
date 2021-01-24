type groupType = {
    href: string,
}

export type groupNameType = 'tmrkt' |
    'stremobzorstore' |
    'shmotki' |
    'getsneakers' |
    'stocksaintpetersburg' |
    'stockmsk' |
    'krossovkee' |
    'hype35' |
    'fa_sales' |
    'sneakersale' |
    'baraholkacasualnaya' |
    'marktplc' |
    'brahand' |
    'resellpoint';

const groupsList: Record<groupNameType, groupType> = {
    tmrkt: {
        href: 'tmrkt',
    },
    stremobzorstore: {
        href: 'stremobzorstore',
    },
    shmotki: {
        href: 'shmotki_shmotochki',
    },
    getsneakers: {
        href: 'getsneakers',
    },
    krossovkee: {
        href: 'krossovkee',
    },
    stockmsk: {
        href: 'stockmsk',
    },
    stocksaintpetersburg: {
        href: 'stocksaintpetersburg',
    },
    hype35: {
        href: 'hype35',
    },
    fa_sales: {
        href: 'fa_sales',
    },
    sneakersale: {
        href: 'sneakersale',
    },
    baraholkacasualnaya: {
        href: 'baraholkacasualnaya',
    },
    marktplc: {
        href: 'marktplc',
    },
    brahand: {
        href: 'brahand',
    },
    resellpoint: {
        href: 'resellpoint',
    },
}

export default groupsList;
