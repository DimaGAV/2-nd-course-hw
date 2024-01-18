//Задание 1
let str = 'js';
console.log(str.toUpperCase());

//Задание 2
// let arr
// function searchStart(arrStr, startStr) {
//     // let startStr;
//     const arrPosit = [];
//     arrStr.forEach((el) => {
//         if (el.toLowerCase().startsWith(startStr.toLowerCase())) {
//             arrPosit.push(arrStr[el]);
//             return arrPosit;
//         }
//     });
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

//Задание 3
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
function getRandNum(min, max) {
    console.log(Math.round(Math.random() * (max - min)) + min);
}

getRandNum(1, 10);

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
let currentDate9 = new Date();
currentDate9.setDate(currentDate9.getDate() + 73);