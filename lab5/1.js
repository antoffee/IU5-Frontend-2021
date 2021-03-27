/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */
Array.prototype.myMap=function(callback){
    let res=[];
    for (const item of this) {
        res.push(callback(item));
    }
    return res;
}