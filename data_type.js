'use strict';

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let getSum = function () {
	let a = prompt('Ввeдите число ', '');
	let b = prompt('Введите еще число', '');
	return (Number(a) + Number(b))
}
alert(getSum());

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

console.log(randomInteger(1, 5));
console.log(randomInteger(5, 10));
console.log(randomInteger(11, 55));

//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
let str = 'petrovich';

function usFirst() {

	let upC = str[0].toUpperCase();
	str = upC + str.slice(1);
}

usFirst();
alert(str);

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(strSpam) {

	let strLower = strSpam.toLowerCase();

	return strLower.includes("viagra") || strLower.includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
function truncate(strT, x) {

	let strLeng = strT.length;

	if (strLeng > x) {
		return (strT.substr(0, x) + '...')
	} else return strT;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 10));
console.log(truncate("Всем привет!", 4));

//Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число. Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(money) {

	let delSb = money.slice(1);
	return Number(delSb);
}

alert(extractCurrencyValue('$120') === 120); // true

//Array
//Давайте произведём 5 операций с массивом.Создайте массив styles с элементами «Джаз» и «Блюз». Добавьте «Рок-н-ролл» в конец. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.Удалите первый элемент массива и покажите его. Вставьте Рэп и Регги в начало массива.
let styles = ['Джас', 'Блюз', 'Rave', 'Fonk'];
styles.push('Рок-н-ролл');

//Seach middle array
console.log(styles);
let midSt = ((styles.length - 1) / 2);

//add element in array from the end
styles[midSt] = 'Классика';
console.log(styles);

//remove first element in array
styles.shift();
console.log(styles);

//add elements to the begining in array
styles.unshift('Рэп', 'Регги');
console.log(styles);


//Напишите функцию sumInput(), которая: Просит пользователя ввести значения, используя prompt и сохраняет их в массив. Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена». Подсчитывает и возвращает сумму элементов массива. P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
/*
let arr = [];

function sumInput() {

	//cicle write number in array

	while (true) {

		let val = prompt('Write number', 0);
		if (val === null || val === '' || !isFinite(val)) break;

		arr.push(+val)
	}

	// Cicle summ values in array
	let sum = 0;

	for (let numb of arr) {
		sum += numb;
	}
	return sum;
}

console.log(arr);
console.log(sumInput());
*/

//Sum elements array
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

//alert( getMaxSubSum([-1, 2, 3, -2]) ); // 5
//alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, 99, -5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0








