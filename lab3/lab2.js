"use strict";

/**
 * для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} n -  число, до которого должен быть вычислен массив чисел Фибоначчи
 * @returns {array} - массив чисел Фибоначчи с точностью до заданного числа
 */

export function fibs(n) {
    let fibArr = [0n, 1n];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
}

