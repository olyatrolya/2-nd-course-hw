function minNumber(a,b) {
    if (a < b)
    return a;
    else {
        return b;
    } 
}
console.log(minNumber(8, 4))
console.log(minNumber(6, 6))

function parityCheck (num) {
    if (num % 2 === 0)
    return 'Число четное';
    else {
        return 'Число нечетное';
    }
}
console.log(parityCheck(30));
console.log(parityCheck(67));

function square (chislo) {
    console.log(chislo * chislo);
};
square(5);
function kvadrat (n) {
    return n * n
};
console.log(kvadrat(8));

function age (question) {
    let userAnswer = Number(prompt(question));
    if (userAnswer < 0) {
    console.log('Вы ввели неправильное значение');
    }
    else if (userAnswer > 0 && userAnswer <= 12) {
        console.log('Привет, друг!');
    }
    else {
            console.log('Добро пожаловать!');
        }
    }
age('Сколько тебе лет?');