// 7. Создать переменную person и поместить туда объект
// {

// name: "Igor",

// children: ['Maxim', 'Ira']

// }
// - Вывести в консоль person.children
// - Новой переменной individ присвоить значение первой переменной
// - Изменить свойство children у переменной individ
// напрмер: individ.children = ['Egor', 'Nastya']
// - Снова вывести в консоль person.children
// - Задуматься - что произошло? (разберем в будущем подробнее ссылочные типы)

let person = {
    name: "Igor",
    children: ['Maxim', 'Ira']
};

console.log(person.children);

let individ = person;
individ.children = ['Kirill', 'Masha'];

console.log(individ.children);
console.log(person.children);