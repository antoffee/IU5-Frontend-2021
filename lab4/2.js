/**
 * @param {String} str
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
  return str.split("").reverse().join("") == str ? true : false;
}

module.exports = isPalindrome;
