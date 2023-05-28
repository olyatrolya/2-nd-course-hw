let i = 0;
while (i < 2) {
    console.log(`Привет!`);
    i++;
}

let ol = 1;
while (ol <= 5) {
    console.log(ol);
    ol++;
}
let mi = 7;
while (mi <= 22) {
    console.log(mi);
    mi++;
}

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};
for (let key in obj) {
    if (obj[key]) {
        console.log(`${key} - зарплата ${obj[key]} доллярёв`);
    }
}


let n = 1000;
let num = 0;
while (n > 50) {
  n /= 2;
  num++;
}
console.log(`число: ${n}`); 
console.log(`количество итераций: ${num}`);

for (let d = 1; d <=31; d +=7) {
    console.log(`Сегодня пятница ${d} число. Необходимо готовить отчёт`);
}