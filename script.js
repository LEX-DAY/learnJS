'use strict';

//TASK_1
function TASK_1() {
    alert("Я JavaScript")
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
*/

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
*/

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
}
else if (namberJS < 0) {
  console.log('Отрицательное число');
}
else if  (namberJS == 0) {
  console.log('Нуль');
} else {
  console.log('Что-то ввели не так');
}

//TASK_8_3
let ac = prompt("Первое число?", 1);
let ad = prompt("Второе число?", 2);
let result = (+ac + +ad < 4) ? 'Мало':'Много';
console.log("TASK_8_3")
console.log(result)

//TASK_8_4
let login = prompt('Введите логин', '');
let massageLogin = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте':'Нет логина';
console.log("TASK_8_4")
console.log( massageLogin )


