function dateFormat(datetime, formatNum = 1){
    let dt = new Date(datetime);

    switch(formatNum){
        case 1:
            return ((dt.getMonth()+1) + '/' + dt.getDate() + '/' + dt.getFullYear()); // mm/dd/yyyy
        case 2:
            return (dt.getDate() + '/' + (dt.getMonth()+1) + '/' + dt.getFullYear()); // dd/mm/yyyy
        case 3:
            return (dt.getFullYear() + '/' + (dt.getMonth()+1) + '/' + dt.getDate()); // yyyy/mm/dd
        default:
            return '';
    }
}

function timeFormat(datetime){
    let date = new Date(datetime);
    let hours = date.getHours(),
        minutes = date.getMinutes();

    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let m = minutes < 10 ? '0'+minutes : minutes;
    
    let timeFormatted = hours + ':' + m + ' ' + amOrPm;
    return timeFormatted;
}

function datetimeFormat(dateTime, formatNum = 1){
    return dateFormat(dateTime, formatNum) + " " + timeFormat(dateTime);
}

export {
    dateFormat,
    timeFormat,
    datetimeFormat
}