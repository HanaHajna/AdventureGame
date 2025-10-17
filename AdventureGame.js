/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
const readline = require("readline-sync");
let playerName = "";

// Create variables for player stats
let health = 100;
let gold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

// Display welcome message and starting stats
playerName = readline.question("Enter your player name: ");
console.log("Hello player " + playerName);
console.log("Here are you starting stats:");
console.log("  Health: " + health);
console.log("  Gold amount: " + gold);
