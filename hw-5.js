//Задание №1

function minNumber(a,b) {
    if (a < b)
    return a;
    else {
        return b;
    } 
}
console.log(minNumber(8, 4))
console.log(minNumber(6, 6))

const showMinNumber = (a, b) => {
  if (a < b) {
    return a;
  } else {
      return b;
    }
  }
  console.log(showMinNumber(8, 4))
  console.log(showMinNumber(6, 6))

//Задание №2

function parityCheck (num) {
    if (num % 2 === 0)
    return 'Число четное';
    else {
        return 'Число нечетное';
    }
}
console.log(parityCheck(30));
console.log(parityCheck(67));

//Задание №3

function clacSquare (x) {
    console.log(x * x);
};
clacSquare(5);

function showSquare (n) {
    return n * n
};
console.log(showSquare(8));

//Задание №4

function sayHello (question) {
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
sayHello('Сколько тебе лет?');

//Задание №5

function chekNumber(z,v) {
    if (isNaN(z) || isNaN(v))
    console.log('Одно или оба значения не являются числом');
    else {
      console.log(z * v);
    }
  }
  chekNumber(9,7)

//Задание №6   

  function question () {
    let userAnswer = prompt('Введите число');
    if (isNaN(userAnswer))
    return alert('Переданный параметр не является числом');
    else {
      let userAnswerVKube = userAnswer**3;
      return alert(userAnswerVKube);
    }
  }
  question()

  //Задание №7
  
  function getCircleArea() {
    return (Math.PI) * this.radius ** 2;
  }
  function getCirclePerimeter() {
    return 2 * (Math.PI) * this.radius;
  }
   
  const circle1 = {
    radius: 5,
   
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
  };
  const circle2 = {
    radius: 9,
   
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter, 
  };
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());
 

  //Задание №8

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
 

 /*
  const saySeason = () => {
    if (s === 12 || s === 1 || s === 2) {
    return 'зима';
    } else if (s === 3 || s === 4 || s === 5) {
    return 'весна';
    } else if (s === 6 || s === 7 || s === 8) {
    return 'лето';
    } else if (s === 9 || s === 10 || s === 11) {
    return 'осень';
    } else {
        return 'нет такого';
    }
  }
   */