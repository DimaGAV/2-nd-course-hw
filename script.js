function seasons(monthNumber) {
    monthNumber = Number(prompt('Напиши номер месяца'));

    if ((monthNumber > 0 && monthNumber < 3) || monthNumber === 12) {

        return 'Зима';
    } else if (monthNumber >= 3 && monthNumber <= 5) {

        return 'Весна';
    } else if (monthNumber >= 6 && monthNumber <= 8) {

        return 'Лето';
    } else if (monthNumber >= 9 && monthNumber <= 11) {

        return 'Осень';
    } else {
        return 'Введен некорректный номер месяца';
    }
}

function guessFruits(fruitsArray) {
    fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
    alert(fruitsArray);
    let firstEl = prompt("Чему равнялся первый элемент массива?");
    let lastEl = prompt("Чему равнялся последний элемент массива?");
    if (/^\s*$/.test(firstEl) || /^\s*$/.test(lastEl)) {
        alert("Один или оба элемента не были введены!");
        return
    };
    if (fruitsArray[0].toLowerCase() === firstEl.toLowerCase() && fruitsArray[6].toLowerCase() === lastEl.toLowerCase()) {
        alert("Поздравляем! Вы угадали оба элемента");
    } else if (fruitsArray[0].toLowerCase() !== firstEl.toLowerCase() && fruitsArray[6].toLowerCase() !== lastEl.toLowerCase()) {
        alert("К сожалению, Вы ответили неверно");
    } else {
        alert("Вы были близки к победе!");
    }
}