let date = new Date();
function formatDate(date){
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear() % 100;
    let res = ' ';
    if (day < 10){
        day = '0' + day;
    }
    if (month < 10){
        month = '0' + month;
    }
    res = day + '.' + month + '.' + year;
    return res;
}
console.log(formatDate(date));
