const convertData = (e: string) => {
    const newStrDate = e.split(" ");
    let today = new Date();
    if(newStrDate[0] === 'сегодня'){
        
        let hoursArr = newStrDate[2].split(':');
        let hours = Number(hoursArr[0]);
        let minutes = Number(hoursArr[1]);
        let date = today.getDate();
        let month = today.getMonth() + 1; //January is 0!
        let year = today.getFullYear();
        let newDate: Date = new Date(year, month, date, hours, minutes);
        console.log(newDate.toString());
        return newDate;
    }
    else if(newStrDate[0] === 'вчера'){
        let hoursArr = newStrDate[2].split(':');
        let hours = Number(hoursArr[0]);
        let minutes = Number(hoursArr[1]);
        let date = today.getDate();
        let month = today.getMonth() + 1; //January is 0!
        let year = today.getFullYear();
        let currentDate: Date = new Date(year, month, date, hours, minutes);
        let newDate = currentDate.setDate(currentDate.getDate() - 1);
        let yesterdayDate = new Date(newDate);
        let yesterday = yesterdayDate.toString();
        console.log(yesterday);
        return yesterday;
    }

    else if(Number(newStrDate[0])){
        const day: number = Number(newStrDate[0]);
        let month: any = newStrDate[1];
        const arrMonth: any = {
            "янв" : 0,
            "фев" : 1,
            "мар" : 2,
            "апр" : 3,
            "май" : 4,
            "июн" : 5,
            "июл" : 6,
            "авг" : 7,
            "сен" : 8,
            "окт" :  9,
            "ноя" :  10,
            "дек" :  11
        };
        let i : any
        for (i  in arrMonth){
            if (month === i){
                month = arrMonth[i];
            }
        }

        let hoursArr = newStrDate[3].split(':');
        let hours = Number(hoursArr[0]);
        let minutes = Number(hoursArr[1]);
        let date = today.getDate();
        let year = today.getFullYear();
        let newDate: Date = new Date(year, month, date, hours);
        if (today.getMonth() - newDate.getMonth() < 0){
            year = year - 1;
            newDate = new Date(year, month, date, hours, minutes);
        }
        // console.log(newDate);
        console.log(newDate.toString());
        return newDate;
        
    }
        

}

export default convertData;