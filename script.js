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