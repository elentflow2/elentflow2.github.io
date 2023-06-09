let flag = prompt('Хотите узнать сколько прошло секунд с начала дня? (Да, Нет)')

function getSecondsToday(){
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
console.log(getSecondsToday());
