const capitalize = require('../lab3/1.js');
const getMinMax = require('../lab3/2.js');
const multiplyArray = require('../lab3/3.js');
const prettySum = require('../lab3/4.js');

test('capitalize 1', () => {
    expect(capitalize('я вижу солнце')).toBe('Я Вижу Солнце');
});

test('capitalize 2', () => {
    expect(capitalize('я Вижу солнце')).toBe('Я Вижу Солнце');
});

test('capitalize 3', () => {
    expect(capitalize('Я Вижу Солнце')).toBe('Я Вижу Солнце');
});

test('getMinMax 1', () => {
    expect(getMinMax('4 и -6, 2, 1, может 9, 63, -134 и 566]')).toEqual({ min: -134, max: 566 });
});

test('getMinMax 2', () => {
    expect(getMinMax('-2.5 ddd 1 nfuey 222.345 w 0')).toEqual({ min: -2.5, max: 222.345 });
});

test('multiplyArray 1', () => {
    expect(multiplyArray([1, 2, 3, 'ddd', { min: 1 }, 22, false], 2)).toEqual([2, 4, 6, 'ddd', { min: 1 }, 44, false]);
});

test('multiplyArray 2', () => {
    expect(multiplyArray([false, false], 2)).toEqual([false, false]);
});

test('multiplyArray 3', () => {
    expect(multiplyArray([false, false, 2, 3], 2)).toEqual([false, false, 4, 6]);
});


test('prettySum 1', () => {
    expect(prettySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(250);
});

test('prettySum 2', () => {
    expect(prettySum([0, 0, 0, 4, 4, 4])).toBe(16);
});

test('prettySum 3', () => {
    expect(prettySum([-5, 15, 32, -1, 0])).toBe(0);
});

test('prettySum 4', () => {
    expect(prettySum([-4, -1, 3, 5])).toBe(-5);
});
