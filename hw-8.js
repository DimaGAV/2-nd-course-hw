//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
function isPositive(posEl) {
    return posEl > 0
}
function isMale(peoples) {
    return peoples.gender === 'male'
}
function filter(sendArr, ruleFunction) {
    const outArr = [];
    for (let i = 0; i < sendArr.length; i++) {
        if (ruleFunction(sendArr[i])) {
            outArr.push(sendArr[i]);
        }
    }
    return outArr
}
console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

//Задание 3
function intervalThreeSeconds(stop) {
    // установить интервал 3с для вывода даты в консоль
    let timerId = setInterval(() => { console.log(new Date()) }, 3000);
    // остановить выполнение через stop секунд
    setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло') }, stop * 1000);
}

intervalThreeSeconds(30);

//или просто, но при этом способе в консоль возвращается какое-то значение. Предполагаю, что это timerId
let timerId = setInterval(() => { console.log(new Date()) }, 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло') }, 30000);

//Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        if (callback) { callback(); }
    }, 1000)
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));