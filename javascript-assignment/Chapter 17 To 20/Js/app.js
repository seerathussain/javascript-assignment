 Question 01
var empty = [];
var num = [10];
var boolean = [false];
var str = [`Hello`];

 Question 02
var multiple = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
document.write(multiple);


 Question 03
for(var i = 1; i <= 10; i++){
    console.log(i);
}

 Question 04
var table = [parseInt(prompt(`If You Want Print A Table So Type Here`))];

for(var i = 1; i <= 10; i++){
    console.log(`${table}  X  ${i}  =  ${table * i}`);
    console.log(i)
}

 Question 05

var fruitsName = [`Apple`, `Mango`, `Pear`, `Banana`, `Guava`, `Papaya`];

for(var i = 0; i < fruitsName.length; i++){
    console.log(i,fruitsName[i]);
}

 Question 06

// a. Counting Series
var countingSeries = [];
for(var i = 1; i < 16; i++){
    countingSeries.push(i);
}

// b. Reverse Counting
var reverseCount = [];
for(var i = 10; i >= 1; i--){
    reverseCount.push(i);
}


// c. Even: 0, 2, 4, 6, 8, ... , 20
let evenSeries = [];
for (let i = 0; i <= 20; i += 2) {
  evenSeries.push(i);
}


// d. Odd: 1, 3, 5, 7, 9, ... , 18
let oddSeries = [];
for (let i = 1; i <= 19; i += 2) {
  oddSeries.push(i);
}

console.log(countingSeries);
console.log(`Counting Series`);
console.log(reverseCount);
console.log(`Reverse Counting`)
console.log(evenSeries);
console.log(`Even Number`);
console.log(oddSeries);
console.log(`Odd Number`);

 Question 07

var foodEnable = prompt(`You Can Search Food`)
var foods = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var flag = `No`

for(var i = 0; i < foods.length; i++){
    if(foodEnable === foods[i]){
        flag = 'Yes';
        console.log(foods[i]);
    }
}

if(flag === `No`){
    console.log(`Sorry, We Don't Have This Food`);
}


var foodEnable = prompt(`You Can Search Food`)
var foods = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var flag = `No`

for(var i = 0; i < foods.length; i++){
    if(foodEnable === foods[i]){
        flag = 'Yes';
        console.log(`${foods[i]} Enable`)       
    }
}
if(flag === `No`){
    console.log(`Sorry, We Don't Have This Food`);
}

 Question 08


var largeNums = [24, 53, 78, 91, 12];
var largestNum = largeNums[0];

for (var i = 1; i < largeNums.length; i++) {
    if (largeNums[i] > largestNum) {
        largestNum = largeNums[i];
    }
}

console.log(`The Largest Number is ${largestNum}`);



 Question 09


var smallNums = [24, 53, 78, 91, 12];
var smallestNum = smallNums[0];

for (var i = 1; i < smallNums.length; i++) {
    if (smallNums[i] < smallestNum) {
        smallestNum = smallNums[i];
    }
}

console.log(`The Smallest Number is ${smallestNum}`);

