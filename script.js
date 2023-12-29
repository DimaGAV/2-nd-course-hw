function seasons(monthNumber) {
    monthNumber = Number(prompt('Напиши номер месяца'));

    if ((monthNumber > 0 && monthNumber < 3) || monthNumber === 12) {
        alert('Зима');
        console.log('Зима');
        return 'Зима';
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
        console.log('Весна');
        return 'Весна';
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
        console.log('Лето');
        return 'Лето';
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осень');
        console.log('Осень');
        return 'Осень';
    } else {
        alert('Введен некорректный номер месяца');
        console.log('Введен некорректный номер месяца');
        return 'Введен некорректный номер месяца';
    }
}

// alert();