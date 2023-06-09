"use strict";
let age = prompt("Введите свой возраст"), gender = prompt("Введите свой пол (мужчина/женщина)");
if (age <= 17) alert ("Вам работать ещё рано — учитесь");
else if (gender == "мужчина") {
  if (age <= 59) alert ("Вам ещё работать и работать");
  else if (age <= 64) alert ("Скоро пенсия!");
  else if ( age >= 65) alert ("Вам пора на пенсию");
}
else if (gender == "женщина") {
  if (age <= 54) alert ("Вам ещё работать и работать");
  else if (age <= 59) alert ("Скоро пенсия!");
  else if ( age >= 60) alert ("Вам пора на пенсию");
}
else alert ("Да кто ты такой?");
