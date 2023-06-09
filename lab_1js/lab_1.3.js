'use strict';

let num;

do {
  num = prompt("Введите число больше 100");
} while (num !== null && (isNaN(num) || +num <= 100));
