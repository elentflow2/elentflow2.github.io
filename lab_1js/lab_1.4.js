'use strict';

let num = prompt("Введите любое число");
next:
for ( let a = 2; a <= num; a++){
  for ( let b = 2; b < a; b++){
    if (a % b == 0) continue next;
  }
  console.log(a);
}
