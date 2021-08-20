exports.dateFormat = function(datetime, formatNum = 1){
    switch(formatNum){
        case 1:
            return ((datetime.getMonth()+1) + '/' + datetime.getDate() + '/' + datetime.getFullYear()); // mm/dd/yyyy
        case 2:
            return (datetime.getDate() + '/' + (datetime.getMonth()+1) + '/' + datetime.getFullYear()); // dd/mm/yyyy
        case 3:
            return (datetime.getFullYear() + '/' + (datetime.getMonth()+1) + '/' + datetime.getDate()); // yyyy/mm/dd
    }
}