/**
 * @param {string} str
 * @param {Array} accumulator
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
  let count = 1;
  let last = "";
  return str
    .split("")
    .reduce(function (accumulator, currentValue) {
      let res = "";
      if (last == "") count = "";
      if (last != currentValue) {
        res = count == 1 ? currentValue :  count + currentValue;
        /*console.log(count);
        console.log(res);*/
        last = currentValue;
        count = 1;
      } else count++;
      return accumulator.concat(res);
    }, [])
    .concat(count > 1 ? count : [])
    .join("");
}

module.exports = rle;
