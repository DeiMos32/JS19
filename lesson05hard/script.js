'use strict';

let arr = [];


for ( let i = 0; i < 7; i++) {
    arr[i] = prompt('Введите число');
}

for ( let i = 0; i < 7; i++) {
    if (arr[i].slice(0, 1) === '2' || arr[i].slice(0, 1) === '4'){
       console.log(arr[i]); 
    }
}

function isPrime (n) {
    if (n === 1 || n === 0) {
        return false;
    } else {
        for(let i = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;  
    }
}

for (let i = 0; i < 100; i++){
    if (isPrime(i) === true){
        console.log(i + ' Делители этого числа: ' + ' 1 и ' + i);
    }
}