// 4. Есть массив ['apple pie', ‘texas barbecue’, ‘tacos’, ‘hot dogs’]

// - Сделать из него новый массив
// ['apple pie', ‘fish’, ‘chips’, ‘churros’, ‘bbq ribs’, ‘meatloaf’, ‘hot dogs’, ‘hamburger’ ]
// - Вывести в консоль все удаленные элементы (!Одним массивом)

let foodArr = ['apple pie','texas barbecue','tacos','hot dogs'];

let foodArr2 = foodArr.slice(1, -1);

console.log(foodArr2); // Удалённые элементы

foodArr.splice(1, 2, 'fish', 'chips', 'churros', 'bbq ribs', 'meatloaf') + foodArr.push('hamburger');
console.log(foodArr); // Новые элементы в массиве