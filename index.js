function sayHello(name) {
    return "Hello, " + name;
}
// or
function sayHello1(name) {
    return `Hello, ${name}`;
}
// or arrow function-best code
const sayHello2 = (name) => `Hello, ${name}`


// 1
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(" ")
};
// вариант codewars
const smash = words => words.join(' ');

// 2
//
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
// вариант codewars
const goals = (a,b,c) => a + b + c;
//

// 3
//Make negative //

function makeNegative(num) {
    if (num < 0) return num;
    return num;
}

// вариант codewars - best
function makeNegative1(num) {
    return num > 0 ? -num : num;
}
//4
//Game Move
function move (position, roll) {
    return position + roll * 2
}

//5
//Personalized Message
function greet (name, owner) {
    if (name === owner) return 'Hello boss';
        return 'Hello guest'
}
//
function greet1 (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}
//
function greet2 (name, owner) {
    return "Hello" + (name === owner ? "boss" : "guess")
}

//6
//Keep Hydrated
function litres(time) {
    return Math.floor(time * 0.5)
}

//7
//Opposites Attract
function lovefunc(flower1, flower2){
    return (flower1 % 2 !== flower2 % 2)
}


//Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray1(string){
    return string.split(" ")
}

//codewars
const stringToArray = string => string.split(' ');


// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA Conversion
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replaceAll("T", "U")
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List
const min1 = (list) => Math.min(...list);
const max1 = (list) => Math.max(...list);

//codewars
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


//Наименьшее значение массива
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    const minValue = Math.min(...arr)
    if (toReturn === 'value') {
        return minValue;
    } else if (toReturn === 'index') {
        return arr.indexOf(minValue);
    }
}
//
min = (arr, toReturn) => {
    const minValue = Math.min(...arr);
    return toReturn === 'value' ? minValue : arr.indexOf(minValue)
};
