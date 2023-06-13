// Задание №1
const persons = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
console.log(persons.sort((prev, next) => prev.age - next.age));

// Задание №2


  function isPositive(arr) {
    return arr.filter((el) => el > 0);
    }

    function filter(arr,callback) {
    return callback(arr);
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    function isMale(arr) {
        return arr.filter((el) => el.gender === 'male');
        }
    
    function filter(arr,callback) {
            return callback(arr);
            }
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// Задание №3

const date = setInterval(() => console.log(new Date()), 1000 * 3);
setTimeout(() => { clearInterval(date); console.log('30 секунд прошло'); }, 1000 * 30);

// Задание №4

function delayForSecond() {
    console.log('Привет, Глеб!')
}
    setTimeout(delayForSecond, 1000)

    setTimeout(function() {
        console.log('Привет, Глеб!');
    }, 1000);

    
// Задание №5


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));


