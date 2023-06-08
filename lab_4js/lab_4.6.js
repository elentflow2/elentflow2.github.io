let flag = prompt('Хотите узнать сколько прошло секунд с начала дня? (Да, Нет)')

function getSecondsToday(){
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

if (flag == 'Да' || flag == 'да' || flag == '+'){
  alert(getSecondsToday());
}
else if (flag == 'Нет' || flag == 'нет' || flag == '-'){
  alert('А что вы тут забыли?');
}
else{
  alert('Писать не умеете?');
}
