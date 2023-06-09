let num = +prompt("Количество ворон");
if (num == 1){ 
  alert(`На ветке сидит ${num} ворона`);
}
else if (num >= 2 && num <= 4){
  alert(`На ветке сидит ${num} вороны`);
}
else if (num >= 5 && num < 20){
  alert(`На ветке сидит ${num} ворон`);
}
else if (num >= 20){
  let ost = num % 10;
  if (ost == 1){ 
  alert(`На ветке сидит ${num} ворона`);
}
else if (ost >= 2 && ost <= 4){
  alert(`На ветке сидит ${num} вороны`);
}
else if (ost >= 5 && ost < 20){
  alert(`На ветке сидит ${num} ворон`);
}
}
