/**
 * @param {string} str
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * ['я' ...]
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    return str.split(' ').map((item) => (item[0].toUpperCase()) + item.slice(1)).join(' ');
}

module.exports = capitalize;