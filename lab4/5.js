/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
  const open = ["[", "<", "("];
  const closed = ["]", ">", ")"];
  let openIndex = 0,
    closedIndex = 0,
    openorder = []; //для сохранения порядка открывающих скобок
  for (const element of str.split("")) {
    openIndex = open.indexOf(element);
    if (openIndex !== -1) {
      openorder.push(openIndex);
    }
    closedIndex = closed.indexOf(element);
    if (closedIndex !== -1) {
      openIndex = openorder.pop();
      /*console.log(openIndex);
      console.log(closedIndex);*/
      if (closedIndex < openIndex) {
        return false;
      }
    }
  }
  return true;
}

module.exports = checkBrackets;
