'use strict';

let lang = prompt('Введите значение языка');
let namePerson = prompt('Введите имя');
let weekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];



if (lang === 'ru') {
    console.log(weekRu);
} else if (lang === 'en') {
    console.log(weekEn);
} else {
    console.log('Введите правильный яызык!');
}

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
}

let week = [
     [weekEn],
     [weekRu]
];

console.log((namePerson === 'Артем') ? 'директор' : namePerson === 'Максим' ? 'преподователь' : 'ученик');




