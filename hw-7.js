//Задание 1
let str = 'js';
console.log(str.toUpperCase());

//Задание 2
function searchStart(arrStr, startStr) {
    const arrPosit = [];
    arrStr.forEach((el) => {
        if (el.toLowerCase().startsWith(startStr.toLowerCase())) {
            arrPosit.push(el);
        }
    });
    return arrPosit;
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

//Задание 3
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32), Math.max(52, 53, 49, 77, 21, 32));


//Задание 5
function getRandNum(min, max) {
    console.log(Math.round(Math.random() * (max - min)) + min);
}

getRandNum(1, 10);

//Задание 6
function getRandomArrNumbers(evenNum) {
    const arrRandom = [];
    for (let i = 0; i < Math.floor(evenNum / 2); i++) {
        arrRandom[i] = Math.floor(Math.random() * 10);

    }
    return (arrRandom);
}

getRandomArrNumbers(15);

//Задание 7
function getWholeNum(firstValue, secondValue) {
    if (firstValue < secondValue) {
        return (Math.round(Math.random() * (secondValue - firstValue)) + firstValue);
    }
    else if (firstValue > secondValue) {
        return (Math.round(Math.random() * (firstValue - secondValue)) + secondValue);
    }
    else {
        return 'Числа одиаковые'
    }
}

getWholeNum(2, 6);

//Задание 8
let curDate = new Date();
console.log(curDate);

//Задание 9
let dateNow = new Date();
dateNow.setDate(dateNow.getDate() + 73);

console.log(dateNow)


//Задание 10
function getLongDate(myDate) {
    myDate = new Date();
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + " " + "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    return fullDate
}

getLongDate();


//Задание 11
// см. script.js