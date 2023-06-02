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

//Задание №5

let rownums = [1, 1, 1];
rownums.push(2, 2, 2);
console.log(rownums);

//Задание №6

let numsletter = [9, 8, 7, 'a', 6, 5];
let numsonly = numsletter.filter(el => el == Number(el));
numsonly.sort()
console.log(numsonly);

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

//Задание №10

