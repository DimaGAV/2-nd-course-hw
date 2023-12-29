//Задание 1
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}
//или

let c = 1;
do {
    console.log("Привет");
    c++;
} while (c <= 2);

//Задание 2
let b = 1;
while (b <= 5) {
    console.log(b);
    b++;
}

//Задание 3
let a = 7;
while (a <= 22) {
    console.log(a);
    a++;
}

//Задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5
let n = 1000;
let num = 0;
do {
    n /= 2;
    num++;
} while (n > 50);
console.log(`Полученное число ${n}`);
console.log(`Количество итераций ${num}`);

//Задание 6
let friday = 1;
console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
do {
    friday += 7;
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
} while (friday <= 24);
//или
let firstFriday = 6;
for (let i=firstFriday; i<=31; i+=7)
{
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

