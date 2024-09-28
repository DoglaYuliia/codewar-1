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

// 3
//Make negative

function makeNegative(num) {
    if (num > 0) {
        return num = -num;
    } else {
        return(num);
    }
}
// вариант codewars
function makeNegative(num) {
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
    if (name === owner) {
        return 'Hello boss'
    }
    else {
        return 'Hello guest'
    }
}
//
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
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


