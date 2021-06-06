'use strict';

    let money = +prompt('Ваш месячный доход?', 15000),
        income = 'freelance',
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
        deposit = confirm('Есть ли у вас депозит в банке?'),
        expenses1 = prompt('Введите обязательную статью расходов?'),
        expenses2 = prompt('Введите обязательную статью расходов?'),
        amount1 = +prompt('Во сколько это обойдется?', 5000),
        amount2 = +prompt('Во сколько это обойдется?', 5000),
        mission = 100000,
        period = 12;


    let showTypeOf = function(data){
        console.log(data, typeof(data));
    };

    let getExpensesMonth = function(){
        return amount1 + amount2;
    };

    function getAccumulatedMonth(){
        return money - (amount1 + amount2);
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
    console.log('Расходы за месяц ' + getExpensesMonth());
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));
    console.log( 'Цель будет достигнута за ' + getTargetMonth() + ' месяцев(-а)');
    console.log('Бюджет на день ' + budgetDay); 
    console.log(getStatusIncome());