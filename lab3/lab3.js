"use strict";

/**
 * возвращает дробную часть числа num
 * @param {number} num - возводимое число в степень
 * @return {number} - возвращает дробную часть
 */

export function getDecimal(num) {
    if (num < 0) {
        return num - Math.floor(num);
    } else if (num.toString().indexOf(".") !== -1) {
        return parseFloat("0." + num.toString().split(".")[1]);
    } else return 0;
}

/**
 * возвращает строку str с заглавным первым символом
 * @param {string} str - входная строка
 * @returns {string} - строка с заглавным первым символом
 */

export function ucFirst(str) {
    if (!str) return str;
    else return str[0].toUpperCase() + str.slice(1);
}

/** 
* возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
* @param {string} str - Строка для проверки.
* @returns {boolean} - Возвращает true, если строка содержит слова "viagra" или "xxx", иначе - false.
*/

export function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

/**
 * проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
  * @param {string} str - строка, которую нужно обрезать
  * @param {number} maxlength - максимальная длина строки
  * @return {string} - обрезанная строка или исходная строка, если ее длина не превышает максимальную
 */

export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

/**
 * преобразует строку вида 'var-test-text' в 'varTestText'
 * @param {string} str - Строка для преобразования
 * @returns {string} - соединяет [var test text] в 'varTestText'
 */

export function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index == 0 ? word : ucFirst(word)
        )
        .join("");
}

/**
 * принимает неупорядоченный массив чисел arr и возвращает отсортированный массив из тех же элементов
 * @param {array} arr - Исходный массив.
 * @returns {array} - Отсортированный массив.
 */

export function arrReverseSorted(arr) {
    return arr.slice().sort(function (a, b) {
        return b - a;
    });
}

/**
 * вернёт массив уникальных, не повторяющихся значений массива arr
 * @param {array} arr - массив, который нужно обработать
 * @returns {array} - массив с уникальными значениями
 */

export function unique(arr) {
    return Array.from(new Set(arr));
}


