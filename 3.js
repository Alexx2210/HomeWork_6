// 3. Дан массив ['spaghetti','pizza', 'risotto', ‘lasagna’];

// - Добавить посередине элемент ‘carbonara’ и вывести в консоль (console.log) результат

let pastaArr = ['spaghetti','pizza', 'risotto', 'lasagna'];

let pastaNew = pastaArr.splice(2, 0, 'carbonara');

console.log(pastaArr);