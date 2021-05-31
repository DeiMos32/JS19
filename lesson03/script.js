let money = +prompt('Ваш месячный доход?', 15000),
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    mission = 100000,
    period = 12,
    budgetMonth = money - (amount1 + amount2),
    budgetDay = Math.floor(budgetMonth / 30);



    console.log(typeof money, typeof inCome, typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцам');
    console.log('Цель заработать ' + mission + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));
    console.log('Бюджет на месяц ' + budgetMonth);
    console.log( 'Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев(-а)');
    console.log('Бюджет на день ' + budgetDay);

    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    }

    if (budgetDay < 1200 && budgetDay >=600) {
        console.log('У вас средний уровень дохода');
    } 

    if (budgetDay < 600 && budgetDay >= 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else {
        console.log('Что-то пошло не так');
    }