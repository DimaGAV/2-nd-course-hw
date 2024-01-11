//Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) break;
    console.log(numbers[i]);

}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
numbs.indexOf(4);

//Задание 3
const n = [1, 3, 5, 10, 20];
n.join(' ');

//Задание 5
let oneTwo = [1, 1, 1]
for (let i = 1; i <= 3; i++) {
    oneTwo.push(2);
    console.log(oneTwo);
}