
let a = 10;
alert (a);
a = 20;
alert (a);

let releaseyear = 2007 // год выпуска первого iPhone
alert (releaseyear)

let jsfounder = "Brendon Eich"; //имя создателя языка JavaScript
alert (jsfounder);

let fingers = Number(prompt("Сколько пальцев на руках?")); //10
let fingerschange = 2;
alert (`А у людей с полидактилией может быть ${fingers + fingerschange}`);
alert (`Если ты предашь главу мафии, после юбицумэ у тебя останется ${fingers - fingerschange}`);
alert (`Если к ним прибавить пальцы ног, то получится ${fingers*fingerschange}`);
alert (`Если ты поделишься одной рукой с другом, то останется ${fingers/fingerschange}`);

let problemswithjs=2;
let resultProblems=2**5;
alert(resultProblems);

let a2 = 9; b = 2;
alert(a2%b);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
++num;
--num;
alert(num);

let age = Number(prompt("Сколько тебе лет?"));
alert(age);

const user = {
    userName: "IhateJS",
    age: 100500,
    isAdmin: false,
};
user.cityOfResidence = "Kongo";
delete user.cityOfResidence;
user.age = 1;
let info = prompt("Какую информацию хотите узнать о пользователе?","userName","age");
alert(user[info]);


let yourname = prompt("Как тебя на районе называют?");
alert(`Привет `+ yourname +` !`);