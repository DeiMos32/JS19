'use strict';

   let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
   };



    let money,
        income = 'freelance',
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
        deposit = confirm('Есть ли у вас депозит в банке?'),
        expenses = [],
        mission = 100000,
        period = 12;

    let start = function(){
        do {
        money = prompt('Ваш месячный доход?', 15000);
        } while (!isNumber(money));
    };

    start();

    let showTypeOf = function(data){
        console.log(data, typeof(data));
    };

    let getExpensesMonth = function(){
        let sum = 0;

        for (let i = 0; i < 2; i++){
            expenses[i] = prompt('Введите обязательную статью расходов?');
            let cost = prompt('Во сколько это обойдется?');
            while (!isNumber(cost)){
                cost = prompt('Во сколько это обойдется?');
            }
            sum += Number(cost);
        }
        return sum;
    };


    let expensesAmount = getExpensesMonth();

    function getAccumulatedMonth(){
        return money - expensesAmount;
    }

    let accumulatedMonth = getAccumulatedMonth();

    let getTargetMonth = function(){
        return mission / accumulatedMonth;
    };

    let budgetDay = Math.floor( accumulatedMonth / 30);

    let getStatusIncome = function(){
        if (budgetDay >= 1200) {
            return('У вас высокий уровень дохода');
        } else if (budgetDay < 1200 && budgetDay >=600) {
            return('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay >= 0) {
            return('К сожалению, у вас уровень дохода ниже среднего');
        } else {
            return('Что-то пошло не так');
        }
    };

    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);
    console.log('Расходы за месяц ' +  expensesAmount);
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));
    if (getTargetMonth() > 0) {
        console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев(-а)');
    } else {
        console.log('Цель не будет достигнута');
    }
    console.log('Бюджет на день ' + budgetDay); 
    console.log(getStatusIncome());