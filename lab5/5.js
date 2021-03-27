/**
 * @param {Array} arr
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
  let res = [];
  //ищем начало
  arr.forEach((element) => {
    let flag = true;
    for (const item of arr) {
      if (item.to == element.from) flag = false;
    }
    if (flag) res.push(element);
  });
  //собираем цепочку
  for (let i = 0; i < arr.length; i++) {
    let to = res[res.length - 1].to;
    let searchres;
    for (const iterator of arr) {
      if (iterator.from === to) {
        searchres = iterator;
        break;
      }
    }
    if (searchres !== undefined) res.push(searchres);
  }
  console.log(res);
  return res;
}

module.exports = makeRoute;
