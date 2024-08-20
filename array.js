// Задача "Скопирован ли массив?"

let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

// что в fruits?
console.log(fruits.length); // ?

// Выведет 4, потому что добавленное значение было в "копии"

// Задача "Операции с массивами"

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

console.log(styles.shift());

styles.unshift('Рэп', 'Регги');

console.log(styles);

// Задача "Вызов в контексте массива"

//Каков результат? Почему?

let arr = ['a', 'b'];

arr.push(function () {
	console.log(this);
});

arr[2](); // ?

// Выводит: ["a", "b", function]

// Задача

function sumInput() {
}

sumInput();
