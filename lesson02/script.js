let money = 15000,
    income = 'freelance',
    addExpenses = 'Internet, Taxi, Communal Apartment',
    deposit = true,
    mission = 100000,
    period = 12;

    console.log(typeof money);
    console.log(typeof inCome);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен ' + period + ' месяцам');
    console.log('Цель заработать ' + mission + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.split(', '));
    
    let budgetDay = money / 30;
    console.log(budgetDay);