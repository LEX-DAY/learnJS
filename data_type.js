'use strict';

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let getSum = function () {
	let a = prompt ('Ввeдите число ', '');
	let b = prompt ('Введите еще число', '');
	return ( Number(a) + Number(b) )
}
alert( getSum());

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

/*
function getNum () {
	let num
	do {
		 num = prompt('Введите число', '') ;
	} while ( !isFinite(num) );s

	if (num === Null || num === '') return null;

	return +num ;
};

alert('Число: ' + getNum());
*/

//Напишите функцию randomInteger(min, max) , которая генерирует случайное целое (integer) число от min до max (включительно).
function randomInteger(min, max) {

	let numRan = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(numRan);
}

console.log( randomInteger(1, 5) );
console.log( randomInteger(5, 10) );
console.log( randomInteger(11, 55) );
