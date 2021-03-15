/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i += 2) {
    res += arr[i];
  }
  return (res *= arr[arr.length - 1]);
}

module.exports = prettySum;
