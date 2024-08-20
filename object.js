// Задача "Привет, object"
let user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

// Задача "Проверка на пустоту"

let password = {};
function isEmpty(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}
console.log(isEmpty(password));

// Задача "Объекты-константы?"

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user1 = {
	name: 'John',
};
// это будет работать?
user1.name = 'Pete';
// Да, это будет работать

// Задача "Сумма свойств объекта"

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function sumSalaries(obj) {
	let sum = 0;
	for (let salary in salaries) {
		if (salaries.hasOwnProperty(salary)) {
			sum += salaries[salary];
		} else {
			return 0;
		}
	}
	return sum;
}

console.log(sumSalaries(salaries));

// Задача "Умножаем все числовые свойства на 2"

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

function multiplyNumeric(obj) {
	for (let key in menu) {
		if (typeof menu[key] === 'number') {
			menu[key] *= 2;
		}
	}
}

multiplyNumeric(menu);
