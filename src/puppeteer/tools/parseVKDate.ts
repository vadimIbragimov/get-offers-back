const arrMonths = {
  "янв": 0,
  "фев": 1,
  "мар": 2,
  "апр": 3,
  "май": 4,
  "июн": 5,
  "июл": 6,
  "авг": 7,
  "сен": 8,
  "окт": 9,
  "ноя": 10,
  "дек": 11
};

const hours24Regex = '\\d{1,2}:\\d{2}';

const minutesRegex = '\\d{1,2} минуту?ы? назад';
const hourRegex = 'час назад';
const twoHoursRegex = 'два часа назад';
const threeHoursRegex = 'три часа назад';
const fourHoursRegex = 'четыре часа назад';
const todayAtRegex = `сегодня в ${hours24Regex}`;
const yesterdayAtRegex = `вчера в ${hours24Regex}`;
const factDateRegex = `\\d{1,2} (${Object.keys(arrMonths).join('|')}) в ${hours24Regex}`;

const parsers = [
  {
    regex: minutesRegex,
    func: (stringDate: string) => Date.now() - parseInt(stringDate.split(' ')[0]) * 1000 * 60,
  },
  {
    regex: hourRegex,
    func: (stringDate: string) => Date.now() - 1 * 1000 * 60 * 60,
  }
  ,
  {
    regex: twoHoursRegex,
    func: (stringDate: string) => Date.now() - 2 * 1000 * 60 * 60,
  }
  ,
  {
    regex: threeHoursRegex,
    func: (stringDate: string) => Date.now() - 3 * 1000 * 60 * 60,
  },
  {
    regex: fourHoursRegex,
    func: (stringDate: string) => Date.now() - 4 * 1000 * 60 * 60,
  },
  {
    regex: todayAtRegex,
    func: (stringDate: string) => {
      const dateNow = new Date();
      const time = stringDate.split(' ')[2].split(':');
      const startDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()).getTime();
      return startDay + parseInt(time[0]) * 1000 * 60 * 60 + parseInt(time[1]) * 1000 * 60;
    },
  },
  {
    regex: yesterdayAtRegex,
    func: (stringDate: string) => {
      const dateNow = new Date();
      const time = stringDate.split(' ')[2].split(':');
      const startDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()).getTime();
      return startDay - 1000 * 60 * 60 * 24 + parseInt(time[0]) * 1000 * 60 * 60 + parseInt(time[1]) * 1000 * 60;
    },
  },
  {
    regex: factDateRegex,
    func: (stringDate: string) => {
      const newStrDate = stringDate.split(" ")
      const timeArr = newStrDate[3].split(':');
      const day = Number(newStrDate[0]);
      const month = arrMonths[newStrDate[1] as keyof typeof arrMonths];
      const today: Date = new Date();
      const year = today.getFullYear();
      return new Date(year, month, day, parseInt(timeArr[0]), parseInt(timeArr[1])).getTime();
    }
  }

];

export const parseVKDate: (stringDate: string) => number = (stringDate) => {
  let date: number;

  for (const parser of parsers){
    if(stringDate.search(parser.regex) === 0){
      date = parser.func(stringDate);
      break;
    }
  }

  if(!date) throw new Error(`
    Can not find regex for "${stringDate}"
  `);

  return date;
};