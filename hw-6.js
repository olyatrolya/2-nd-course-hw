//Задание №1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//Задание №2

const numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));

//Задание №3

let nums = [1, 3, 5, 10, 20];
nums = nums.join(' ');
console.log(nums);

// Задание №4 

let thisArr = [];
for (let i = 0; i < 3; i++) {
    thisArr[i] = [];

    for (let j = 0; j < 3 ; j++)
    {
        thisArr[i][j] = 1;
    }
}
console.log(thisArr);

//Задание №5

let rownums = [1, 1, 1];
rownums.push(2, 2, 2);
console.log(rownums);

//Задание №6

let numsletter = [9, 8, 7, 'a', 6, 5];
let numsonly = numsletter.filter(el => el == Number(el));
numsonly.sort()
console.log(numsonly);

//Задание №7

let theseNumbers = [9, 8, 7, 6, 5];
let userAnswer = +prompt('Введите число'); //+prompt
let search = theseNumbers.includes(userAnswer);
console.log(search);

//Задание №8

let line = 'abcdef';
let arrayLine = line.split('');
arrayLine = arrayLine.reverse();
arrayLine = arrayLine.join('');
console.log(arrayLine);

//Задание №9

let arr = [
    [1, 2, 3,],
    [4, 5, 6]
]
let newArray = arr.flat();
console.log(newArray);

// Задание №10

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ar.length - 1; i++){
    console.log(ar[i] + ar[i+1]);
}


//Задание №11 надо самим числа придумать и подставить?

const numbers11 = [56, 87, 7];

function doubleNumbers11(numbers11) {
    return numbers11.map(x => x ** 2);
}
console.log(doubleNumbers11(numbers11));

//Задание №12

const thatArr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function myMap(thatArr) {
    return thatArr.map((str) => str.length);
}
console.log(myMap(thatArr));

//Задание №13

  function filterPositive(array) {
  const newArray2 = array.filter (el => el < 0);   // return array.filter((el) => el < 0);
  return newArray2;
  }
  (filterPositive([-1, 0, 5, -10, 56])); // => [-1, -9]
  (filterPositive([-25, 25, 0, -1000, -2]))
 