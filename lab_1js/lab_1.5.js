'use strict';

let num = +prompt("Введите число");
let num1 = ("dog dog dog cat cat dog");
let num2 = ("dog dog cat cat dog dog");
let num3 = ("dog cat cat dog dog dog");
let num4 = ("cat cat dog dog dog cat");
let num5 = ("cat dog dog dog cat cat");
let num0 = 1;
do {
  if (num0 % 5 == 1){
    console.log(num1)
  }
  if (num0 % 5 == 2){
    console.log(num2)
  }
  if (num0 % 5 == 3){
    console.log(num3)
  }
  if (num0 % 5 == 4){
    console.log(num4)
  }
  if (num0 % 5 == 0){
    console.log(num5)
  }
  num0 = num0 + 1;
} while (num0 <= num)
