//Задание 1
let a = 10;
alert(a);

//Задание 2
const firstIphone = 2007;
alert Number(`Год выпуска первого IPhone - ${firstIphone}`);

//Задание 3
let jsAutor = 'Brandan Eich';
alert(`Создатель языка JavaScript - это ${jsAutor}`);

//Задание 4
let firstnum = 10;
let secondnum = 2;
let sum = firstnum + secondnum;
let dif = firstnum - secondnum;
let mult = firstnum * secondnum;
let div = firstnum / secondnum;
alert(`10+2=${sum}   10-2=${dif}   10*2=${mult}   10/2=${div}`);

//Задание 5
let a = 2;
let result = a ** 5;
alert(`2 в пятой степени равно ${result}`);

//Задание 6
let a = 9;
let b = 2;
let c = a % b;
alert(`Остаток от деления 9 на 2 равен ${c}`);

//Задание 7
// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9.0
const user = {
    name: 'Коля',
    age: 24,
    isAdmin: true
};

//Задание 9.1
user['city of residence'] = 'Бугульма';

//Задание 9.2
user.age = 38;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
alert(user[info]);

//Задание 10
const answer = prompt("Введите Ваше имя", "Имя");
alert(`Привет, ${answer}!`);

