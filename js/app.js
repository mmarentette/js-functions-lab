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

// James' best advice for the course: No matter what you think some variable is, you do not know the value is unless you console.log() it. This is your BEST TOOL.
// We use return when we want our functions to produce some value. Sometimes we return things; sometimes we don't.
// Don't mix up printing to the console and returning! If you use console.log() only, you can print something, but you won't return anything!