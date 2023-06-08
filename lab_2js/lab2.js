/**
 * Возвращает x, возведённое в n-ную степень.
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x ^ n, возведённое в n-ную степень.
 */
function pow(x,n){
  if (n == 0){
    return 1;
  }
  else if (n < 0){
    return 1 / pow(x,-n);
  }
  else {
    return x * pow(x,n - 1);
  }
}

/**
 * Возвращает сумму чисел от 1 до n включительно.
 * @param {number} n Число, до которого вычисляется сумма, должно быть натуральным числом.
 * @return {number} суммирует число n и возвращает функцию(n-1).
 */
function sumTo(n){
  if (n == 1){
    return 1;
  }
  else {
    return n + sumTo(n - 1);
  }
}

/**
 * Возвращает факториал числа n!.
 * @param {number} n Число, факториал которого вычисляется, должно быть натуральным числом.
 * @return {number} умножает число n на функцию(n-1).
 */
function factorial(n){
  if (n == 0){
    return 1n;
  }
  else{
    return BigInt(n) * factorial(n - 1);
  }
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n Порядковый номер числа Фибоначчи, должен быть натуральным числом.
 * @return {number} y, n-е число Фибоначчи.
 */
function fib(n){
  let x = 0n;
  let y = 1n;
  if (n == 0){
    return x;
  }
  else if (n == 1){
    return y
  }
  else{
    for (let j = 2; j <= n; j++) {
            let c = x + y;
            x = y;
            y = c;
        }

        return y;
  }
}
/**
 * Возвращает результат сравнения значений y и x.
 * @param {number} x Первый аргумент.
 * @param {number} y Второй аргумент.
 * @return {function} Функция, которая вернет true, false или null.
 */
function compare(x){
  return function (y){
    if (x == y){
      return null;
    }
    if (x > y){
      return false
    }
    if (x < y){
      return true
    }
  }
}

/**
 * Возвращает сумму всех своих аргументов.
 * @param {number} Значения аргументов.
 * @return {number} Сумма всех своих аргументов.
 */
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
