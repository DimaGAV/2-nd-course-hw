//Задание 1
let i=0;
while (i<2) {
    console.log("Привет");
    i++;
}
        //или

let i=1;
do {
    console.log("Привет");
    i++;
} while (i<=2);

//Задание 2
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}

//Задание 3
let i=7;
while (i<=22) {
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
      console.log (`${key} - зарплата ${obj[key]} долларов`);      
}
