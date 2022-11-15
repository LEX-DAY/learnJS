'use strict';

//TASK_1
function TASK_1() {
	alert("Я JavaScript");
}

//TASK_2
function TASK_2() {
	const inpt = document.getElementById('$name');
	console.log(inpt)

	let name, admin;

	name = inpt.value;
	admin = name;

	alert("Admin:" + " " + admin)
	inpt.value = ""
}
/*function prikol(event) {
    console.log(event.target.value)
}*/

// TASK_3
/*
let name = "Ilya";

console.log("TASK_3")
console.log(`hello ${1}`); // htllo 1

console.log(`hello ${"name"}`); // hello name

console.log(`hello ${name}`); // hello Ilya

//TASK_4
let nameUser = prompt("Имя пользователя");
console.log("TASK_4")
console.log(nameUser);

//TASK_5
let a = 1,
    b = 1;

let c = ++a; // 2
let d = b++; // 1

console.log("TASK_5")
console.log(a, b)

//TASK_6
/*
"" + 1 + 0 = 10
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "-9 5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2 

let firstNumber = prompt("Первое число?", 1);
let secondNumber = prompt("Второе число?", 2);

console.log("TASK_6")
console.log(+firstNumber + +secondNumber); // 12

//TASK_7
/*
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // false
undefined == null // true
undefined === null // false
null == "\n0\n" //false
null === +"\n0\n" // false


//TASK_8_1
let nameJS = prompt('Какое "официальное" название JavaScript?', '');
console.log("TASK_8_1")
if (nameJS == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

//TASK_8_2
let namberJS = prompt('Введите число', );
console.log("TASK_8_2")
if (namberJS > 0) {
    console.log('Положительное число');
} else if (namberJS < 0) {
    console.log('Отрицательное число');
} else if (namberJS == 0) {
    console.log('Нуль');
} else {
    console.log('Что-то ввели не так');
}

//TASK_8_3
let ac = prompt("Первое число?", 1);
let ad = prompt("Второе число?", 2);
let result = (+ac + +ad < 4) ? 'Мало' : 'Много';
console.log("TASK_8_3")
console.log(result)

//TASK_8_4
let login = prompt('Введите логин', '');
let massageLogin = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' : 'Нет логина';
console.log("TASK_8_4")
console.log(massageLogin)
*/

//TASK_9_1
function TASK_9() {
	const inpt = document.getElementById('TASK_9');
	console.log(inpt)

	let age = Number(inpt.value);
	if (age >= 14 && age <= 90)
		alert("Я бы вам дал меньше лет");

	else if (!(age < 14 && age > 90))
		alert("Вы слишком юны или стары для этой жизни!")
	else alert("Вы ввели что-то не то, попробуйте еще раз :)")
}

/*

let nameLogin = prompt("Введите логин, пожалуйста", '');
if (nameLogin === 'Админ') {
    let password = prompt('Введите пароль, пожалуйста', '');

    if (password === 'Я главный') {
        alert('Здравствйте!')
    } else if (password === '' || password === null) {
        alert("Отменено")
    } else {
        alert("Неверный пароль, попробуйте еще!")
    }
} else if (nameLogin === '' || nameLogin === null) {
    alert("Отменено")
} else {
    alert("Кто вы??")
}
*/


//TASK_10 Cicle

/*
let numHund
 do {
     numHund = prompt("Введите число больше 1", 0);
 } while (numHund <= 1 && numHund);
 */

//Простые числа
/*
let simNum = 10;

    outer:

  for (let i = 1; i <= simNum; i++) {
        for (let j = 2; j < i; j++) {

        if (i % j == 0) continue outer;
        }

    alert(i);
    }
*/

//TASK_11_function
/*
let numFirst = prompt('Введите первое число','');
let numSecond = prompt('Введите второе число','');

function showNum(){
    if (numFirst < numSecond){
    alert(numFirst)
   } else
       alert(numSecond)
}

showNum();


let numNum = prompt('Введите число', '');
let numStep = prompt('Введите степень', '');

function showNum() {
	if (numStep < 1) {
		alert(`Степень ${numStep} не поддерживается, используйте натуральное число`)
	} else {
		alert(numNum ** numStep)
	}
}
showNum();

//TASK_12_Arrow_fanction
let ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
}

ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.")
);

//TASK_13_obj
//TASK_13_1
let user = {};
user["name"] = "John";
user["supName"] = "Smith";

console.log(user.name);
console.log(user.supName);

user.name = prompt('Введите имя пользователя', '');
console.log(user.name);

delete user.name;
console.log(user.name);

//TASK_13_2
let obj = {};

function isEmpty(obj) {
	for (let prop in obj) {
		return true; // true
	}
	return false; // false
}

//TASK_13_3
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let sumSo = 0;

for (let key in salaries) {
	sumSo += salaries[key];
}
console.log(sumSo)

//TASK_13_4
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function numeric() {
	for (let key in menu) {
		if (typeof menu[key] == 'Number') {
			menu[key] *= 2;
		}
	}
}

numeric();
console.log(menu);
*/

//TASK_14_meth_this
//calculator
/*
let calculator = {

	read () {
		calculator["numF"] = prompt('Введите первое число ', '');
		calculator["numT"] = prompt('Введите второе число', '');
	},

	sum () {
		return Number(this.numF)  + Number(this.numT);
	},

	mul () {
		return Number(this.numF) * Number(this.numT);
	}

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},

	down() {
		this.step--;
		return this;
	},

	showStep: function () { // показывает текущую ступеньку
		alert(this.step);
		return this;
	}
};
*/

/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
*/
/*
ladder.up().up().down().showStep().down().showStep();
*/

//TASK_15_new_calculator

/*
function Calculator() {

	this.read = function () {
			this.numF = prompt('Введите первое число ', '');
			this.numT = prompt('Введите второе число', '');
		},

		this.sum = function () {
			return Number(this.numF) + Number(this.numT);
		},

		this.mul = function () {
			return Number(this.numF) * Number(this.numT);
		}
}

let calculator = new Calculator();

calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());
*/

//TASK_15_1_accumulator
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += Number( prompt('Введите число', '') ) ;
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
