console.log('app.js is loading')

// defining a function
// declaring a function
// creating the reusable block of code to be used at a later time in the program
function sayHello(personsName) {
    // write the code to say hello here
    console.log(`Hello, ${personsName}`)
}

// execute the function
// invoke the function
// call the function

// write the function name ()
sayHello('Shavon'); // runs the block of code defined by the sayHello function
sayHello('Megan');
sayHello('Ed');
sayHello('Augusta');


// Define and call the function
// sayGoodbye should accept two parameters, one phrase, and one person's name

function sayGoodbye(phrase, personsName) {
    console.log(`${phrase}, ${personsName}`)
}

sayGoodbye('Adios', 'Laura');
sayGoodbye('Ciao', 'Becky');
sayGoodbye('Goodbye', 'Chad');
sayGoodbye('Peace', 'Frankie');

function add(x, y) {
    return x + y; // return produces a value for the function when it is called (but not all functions need to return a value)
}

// Example: Video Game
function getPlayerUserName(username) {
    return username;
}

// Before a game, we don't know the players' names
let playerOne;
let playerTwo;
let playerThree;
let playerFour;

// After they join the game, we set the player's name
// We want these lines of code below to produce a value, so we use return instead of console.log()
playerOne = getPlayerUserName('Luke'); // == > 'Luke' 
playerTwo = getPlayerUserName('Laura'); // == > 'Laura'
playerThree = getPlayerUserName('kate'); // == > 'kate'
playerFour = getPlayerUserName('Kevin'); // == > 'Kevin'

// James' best advice for the course: No matter what you think some variable is, you do not know what the value actually is unless you console.log() it. This is your BEST TOOL.
// We use return when we want our functions to produce some value. Sometimes we return things; sometimes we don't.
// Don't mix up printing to the console and returning! If you use console.log() only, you can print something, but you won't return anything!

// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed
function maxOfTwoNumbers(x, y) {
if (x >= y) {
    return x;
} else {
    return y;
}

// or more "elegantly" using the fantastic ternary expression!
// return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
function maxOfThree(x, y, z) {
if (x > y && x > z) {
    return x;
} else if (y > x && y > z) {
    return y;
} else if (z > x && z > y) {
    return z;
}
}

console.log(maxOfThree(8, 16, 2));

//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
const vowels = ['a', 'e', 'i', 'o', 'u']
return vowels.includes(char)
}

console.log(isCharAVowel('i'));

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
function sumArray(numsArray) {
let sum = 0;
numsArray.forEach(function(num) {
    sum += num;
});
return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(numsArray) {
let product = 1;
numsArray.forEach(function(num) {
    product *= num;
});
return product;
}

console.log(multiplyArray([2, 4, 5]));

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
function numArgs(args) {
    return arguments.length;
}

console.log(numArgs('fizz', 'buzz', 'fizzbuzz', 'bizz', 'help'));

//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(string) {
    return string.split('').reverse().join('')
}

console.log(reverseString('rockstar'));

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
function longestStringInArray(stringsArray) {
    let longestString = '';
    stringsArray.forEach(function(string) {
        if (string.length > longestString.length) longestString = string;
    })
    return longestString.length;
}

console.log(longestStringInArray(['Alabama', 'Arkansas', 'Michigan', 'Massachusetts']));

//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(stringsArray, minLength) {
    longerStrings = []
    stringsArray.forEach(function(string) {
        if (string.length > minLength) longerStrings.push(string);
    })
    return longerStrings;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
