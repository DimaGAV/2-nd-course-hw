//Задание 1
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}
//или

let i = 1;
do {
    console.log("Привет");
    i++;
} while (i <= 2);

//Задание 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Задание 3
let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

//Задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};
for (key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5
let n = 1000;
let num = 0;
do {
    n = n / 2;
    num++;
} while (n > 50);
console.log(`Полученное число ${n}`);
console.log(`Количество итераций ${num}`);

//Задание 6
let friday = 1;
console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
do {
    friday = friday + 7;
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
} while (friday <= 24);

