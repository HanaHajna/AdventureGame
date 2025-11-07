// Age input validation
let readline = require('readline-sync');
// User input
let userAge = readline.question("What is your age (0 - 120)? ");
try{
    // convert string to num
    let numberAge = Number(userAge);
    if (isNaN(numberAge)) {
        throw "You must enter a number!";
        }
    if (numberAge < 0 || numberAge > 120) {
        throw "You must enter a number between 0 and 120.";
    }    
    if (!numberAge) {
        throw "You cannot enter a blank value.";
    }
    if (numberAge >= 16) {
        console.log("Congratulations! You can drive.");
    } else {
        console.log("Sorry, you are too young to drive.");
    }
}
catch (error) {
    console.log("Error: " + error);
} 




/*
// Number Guessing
let readline = require('readline-sync');
// Create a number for the user to guess
let secretNumber = 7;
// Get the user's guess
let userGuess = readline.question("Guess a number between 1 and 10: ");
try {
        // Convert string to number
        let numberGuess = Number(userGuess);
        
        // Check if it's actually a number
        if (isNaN(numberGuess)) {
            throw "That's not a number!";
        }
        
        // Check if number is in range
        if (numberGuess < 1 || numberGuess > 10) {
            throw "Number must be between 1 and 10!";
        }
        
        // Check if guess is correct
        if (numberGuess === secretNumber) {
            console.log("Congratulations! You guessed correctly!");
        } else {
            console.log("Sorry, the number was " + secretNumber);
        }
    } catch (error) {
        console.log("Error: " + error);
    }


// Try to multiply text (this will cause an error)
try {
        let result = "5" * 5;
        console.log("Result:", result);
    } catch (error) {
        console.log("Oops! Something went wrong:", error.message);
    }
    console.log("The program continues running!");


// Load the readline-sync library
let readline = require('readline-sync');
// Get input from the user
let name = readline.question("What is your name? ");
let color = readline.question("What is your favorit color? ");
// Show the input
console.log("Hello, " + name + "!");
console.log("I'm glad that your favorit color is " + color + ".");
*/