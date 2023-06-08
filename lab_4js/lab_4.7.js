let date = new Date();
function formatDate(date){
  return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() % 100;
}
alert(formatDate(date));
