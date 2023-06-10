
// Задание №1
let str = 'js';
console.log(str.toUpperCase());

//Задание №2

const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
products.forEach((product) => {
  if (product.toLowerCase().startsWith(search.toLowerCase())) {
    console.log(product);
  }
});

// Задание №3
x = Math.floor(32.58884)

x = Math.ceil(32.58884)

x = Math.round(32.58884)

// Задание №4

n = Math.min( 52, 53, 49, 77, 21, 32);
console.log(n);
m = Math.max( 52, 53, 49, 77, 21, 32);
console.log(m);

// Задание №5

o = Math.round(Math.random() * 10);
console.log(o);

// Задание №6 // почему-то количество чисел в массиве округляется в большую сторону
function getRandomArrNumbers(m) {
    let ArrNumbers = [];
    for(i = 0; i < Math.floor(m / 2); i++) {
        ArrNumbers.push(Math.floor(Math.random() * m));
    }
    return ArrNumbers;
  }
    console.log(getRandomArrNumbers(7));

// Задание №7

function getRandomNums (a, b) {
    if(a > b){c = b; b = a; a = c};
    let array = [];
    for(let i=0; i <= (b - a); i++){
       array[i]=[Math.random(), i + a];
    }
    return array.sort()[0][1];
 }
 console.log(getRandomNums(3,-9))

 // Задание №8

 let currentDate = new Date();
 console.log(currentDate);

//Задание №9
 function getFutureDate(d) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + d);
    return currentDate
  }
  const FutureDate = getFutureDate(73)
  console.log(FutureDate);

// Задание №10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

let hour = myDate.getHours(); // получаем час из нашей даты
let minute = myDate.getMinutes(); // получаем минуты
let second = myDate.getSeconds();

let fullDate = "Дата: " + myDate.getDate() + 
" " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + 
" - это " + days[myDate.getDay()]; 

let time = "Время: " + hour + ":" + minute + ":" + second;

console.log(fullDate); 
console.log(time);


function saySeason () {
  let userAnswer = Number(prompt('Введи номер месяца'));
  if (userAnswer === 12 || userAnswer === 1 || userAnswer === 2) 
      return alert('зима');
   else if (userAnswer === 3 || userAnswer === 4 || userAnswer === 5) 
      return alert('весна');
   else if (userAnswer === 6 || userAnswer === 7 || userAnswer === 8) 
      return alert('лето');
   else if (userAnswer === 9 || userAnswer === 10 || userAnswer === 11) 
      return alert('осень');
   else {
      return alert('нет такого');
  }
}

function guessWord () {
  let arrWords = (['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']);
  arrWords = arrWords.sort(() => Math.random() - 0.5);
  alert(arrWords);
  let userAnswerFirst = (prompt('Чему равнялся первый элемент массива?'));
  let userAnswerSecond = (prompt('Чему равнялся последний элемент массива?'));
  if (
    userAnswerFirst == arrWords[0] && 
    userAnswerSecond == arrWords[arrWords.length - 1]
    )
      alert('угадал');
   else if (
    userAnswerFirst == arrWords[0] || 
    userAnswerSecond == arrWords[arrWords.length - 1]
    ) 
      alert('Вы были близки к победе!');
  else {
    alert('Вы ответили неверно');
  }
}
