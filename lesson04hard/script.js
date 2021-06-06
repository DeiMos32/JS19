'use strict';

let changeString = function(data){
    if (typeof(data) !== 'string') {
        return 'В качестве аршумента передана не строка';
    } else if (data.length > 30){
        data = data.slice(0, 30) + '...';
        return data;
    } else {
        return data.replace(/\s+/g,'');
    }

};

console.log(changeString('Привет меня зовут Леонид и мне 19 лет'));