//Задание 1
let password = 'свитер';
let answer = prompt("Введите пароль");
if (answer === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

//Задание 2
let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 3
let d = 5;
let e = 108;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 4
let a = '2';
let b = '3';
a = 2;
b = 3;
alert(a + b);

//Задание 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('В году только 12 месяцев');
}

//Задание 7
let yourNumber = prompt("Пожалуйста, введите любое целое число");
if (isNaN(yourNumber)) {
    console.log("Это не число");
} else if (yourNumber % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечётное число");
}

//Задание 8
let clientOS = prompt("Введите тип операционной системы Вашего устройства: Android или iOS").toLowerCase();
if (clientOS === 'android') { console.log("Установите версию приложения для Android по ссылке") }
else if (clientOS === 'ios') { console.log("Установите версию приложения для iOS по ссылке") }
else { console.log("Некорректный ввод") };

//Задание 9
let clientOS = prompt("Введите тип операционной системы Вашего устройства: Android или iOS").toLowerCase();
if (clientOS === 'android') { clientOS = 0 }
else { clientOS = 1 };
let clientDeviceYear = Number(prompt("Введите год производства своего устройства"));
if (clientOS === 0 && clientDeviceYear > 2015) { console.log("Установите версию приложения для iOS по ссылке") }
else { console.log("Установите облегчённую версию приложения для iOS по ссылке") };
if (clientOS === 1 && clientDeviceYear > 2015) { console.log("Установите версию приложения для Android по ссылке") }
else { console.log("Установите облегчённую версию приложения для Android по ссылке") }        