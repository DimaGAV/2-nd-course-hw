//Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 10) {
        console.log(numbers[i])
    } else if (numbers[i] === 10) {
        console.log(numbers[i]);
        break;
    }
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
numbs.indexOf(4);

//Задание 3
const n = [1, 3, 5, 10, 20];
n.join(' ');

//Задание 4
let one = []
for (let i = 0; i < 3; i++) {
    one[i] = [];
    for (let j = 0; j < 3; j++) {
        one[i][j] = 1;
    }
}
console.log(one);

//Задание 5
let oneTwo = [1, 1, 1]
for (let i = 0; i < 3; i++) {
    oneTwo.push(2);
}
console.log(oneTwo);

//Задание 6
const del = [9, 8, 7, 'a', 6, 5]
del.sort();
del.pop();
console.log(del);

//Задание 7
const guess = [9, 8, 7, 6, 5]
let userAnswer = Number(prompt('Угадай число'));
for (let i = 0; i < guess.length; i++) {
    if (guess.includes(userAnswer)) {
        alert('Угадал');
        break;
    } else {
        alert('Не угадал');
        break;
    }
}
//или
let userAnswer1 = Number(prompt('Угадай число'));
const guess1 = [9, 8, 7, 6, 5]
for (let i of guess1) {
    if (guess.includes(userAnswer1)) {
        alert('Угадал');
        break;
    } else {
        alert('Не угадал');
        break;
    }
}

//Задание 8
let str = 'abcdef';
let arr = str.split('');
arr.reverse();
let rev = arr.join('');
console.log(rev);

//Задание 9
const oneSix = [[1, 2, 3,], [4, 5, 6]]
let myOneSix = oneSix.flat();
console.log(myOneSix);

//Задание 10
const oneTen = [1, 5, 4, 10, 7, 3];
for (let i = 0; i < oneTen.length - 1; i++) {
    console.log(oneTen[i] + oneTen[i + 1]);
}

//Задание 11
function transformToSquare(array) {
    const newArray = array.map(el => el ** 2);
    console.log(newArray);

}

transformToSquare([3, 6, 7, 4, 2]);

//Задание 12
function stringToLength(arrStr) {
    const arrLen = [];
    for (let i = 0; i < arrStr.length; i++) {
        arrLen.push(arrStr[i].length);
    }
    console.log(arrLen);
}

stringToLength(['слово', '', 'слог', 'длинное предложение', 'буква']);
stringToLength(['пример', 'read', 'top']);

//Задание 13
function filterPositive(arrNum) {
    const arrPos = arrNum.filter(el => el < 0);
    console.log(arrPos);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

//Задание 14
const arrRandom = [];
for (let i = 0; i < 10; i++) {
    arrRandom[i] = Math.floor(Math.random() * 10);
}
console.log(arrRandom);
const evenRan = arrRandom.filter(el => el % 2 === 0);
console.log(evenRan);

//Задание 15
const arrRandom15 = [];
for (let i = 0; i < 6; i++) {
    arrRandom15[i] = Math.floor(Math.random() * 10);
}
console.log(arrRandom15);
let mean = (arrRandom15.reduce((i, j) => i + j) / arrRandom15.length);
console.log(mean);
