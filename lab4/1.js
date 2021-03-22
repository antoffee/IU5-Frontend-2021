/**
 * @param {Array} arr
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
  let res = [];
  let checked = [];
  for (const el of arr) {
    let annarrams = [];
    for (const item of arr) {
      if (
        el.toLowerCase().split("").sort().join("") ===
          item.toLowerCase().split("").sort().join("") &&
        checked.indexOf(item) === -1
      ) {
        annarrams.push(item);
        checked.push(item);
      }
    }
    if (annarrams.length !== 0) res.push(annarrams);
  }
  return res;
}

module.exports = getAnagramms;
