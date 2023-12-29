//Задание 1
function minim(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

minim(5, 10);

//Задание 2
function parity() {
    let yourNumber = prompt("Пожалуйста, введите любое целое число");
    if (isNaN(yourNumber)) {
        console.log("Это не число");
    } else if (yourNumber % 2 === 0) {
        return "Чётное число";
    } else {
        return "Нечётное число";
    }
}

parity();

//Задание 3.1
let square1 = (e) => {
    let sq = e ** 2;
    console.log(`Квадрат этого числа равен ${sq}`);
}

square1(e = prompt("Пожалуйста, введите любое число"));

//Задание 3.2
let square2 = (g) => {
    return g ** 2;
}

square2(g = prompt("Пожалуйста, введите любое число"));

//Задание 4
function greeting() {
    let clientAge = Number(prompt("Сколько Вам лет?"));
    if (isNaN(clientAge)) {
        console.log("Ввели не число");
    }
    else if (clientAge < 0) {
        console.log("Вы ввели неправильное значение");
    }
    else if (clientAge >= 0 && clientAge <= 12) {
        console.log("Привет, друг!");
    }
    else if (clientAge >= 13) {
        console.log("Добро пожаловать!");
    }
}

greeting();

//Задание 5
function mult1(num1, num2) {
    num1 = Number(prompt("Введите первое число"));
    num2 = Number(prompt("Введите второе число"));
    if (isNaN(num1) || isNaN(num2)) {
        return ("Одно или оба значения не являются числом");
    }
    else {
        return num1 * num2;
    }
}

mult1();

//Задание 6
function degree(userAnswer) {
    userAnswer = Number(prompt("Введите число"));
    if (isNaN(userAnswer)) {
        console.log("Переданный параметр не является числом");
    }
    else {
        let result1 = Math.pow(userAnswer, 3);
        return `${userAnswer} в кубе равняется ${result1}`;
    }
}

degree();

//Задание 7
const circle1 = {
    radius: 5,
    getArea() {
        return `${this.radius}` ** 2 * Math.PI;
    },
    getPerimeter() {
        return 2 * `${this.radius}` * Math.PI;
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 8,
    getArea() {
        return `${this.radius}` ** 2 * Math.PI;
    },
    getPerimeter() {
        return 2 * `${this.radius}` * Math.PI;
    }
}

console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//Задание 8
// см. script.js
