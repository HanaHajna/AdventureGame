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
let _userName
let weaponDamage = 0;
let firstVisit = true;

// Weapon inventory
const weapons = {
  "Sword": 10,};

// Monster stats
let monsterDefense = 5;

// Healing potion stats
let healingPotionValue = 30;

// Display welcome message and starting stats
playerName = readline.question("Enter your player name: ");
console.log("Hello player " + playerName);
console.log("Here are you starting stats:");
console.log("  Health: " + health);
console.log("  Gold amount: " + gold);
console.log("  Weapon Damage: " + weaponDamage);
console.log("     When you buy a sword, your weapon damage will increase by 10!");
console.log("  Monsters can withstand some damage in combat!");
console.log("     Early monster defense: " + monsterDefense);
console.log("  Healing Potions restore health when used!");
console.log("     Healing Potion value: " + healingPotionValue);
console.log("Good luck on your adventure!");
console.log("You are currently in the " + currentLocation);
console.log("Is this your first time playing? " + firstVisit);
console.log("------------------------------");

while (gameRunning) 
{
  // Village Location / main selection
  if (currentLocation === "village") {
    console.log("\n=== VILLAGE ===");
    console.log("\nYou're in a bustling village. The blacksmith and market are nearby. Where would you like to go?");
    console.log("  1. Go to Blacksmith");
    console.log("  2. Go to Market");
    console.log("  3. Go to Forest");
    console.log("  4. Check my status");
    console.log("  5. Check my inventory");
    console.log("  6. Quit game");

    // First time visit welcome message
    if (firstVisit) {
      console.log("\nVillager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
      firstVisit = false;
    }
  }

  else if (currentLocation === "blacksmith") {
    console.log("\n=== BLACKSMITH ===");
    console.log("\nYou are at the blacksmith John. What would you like to do?");
    console.log("  1. Return to Village");
    console.log("  2. Go to Market");
    console.log("  3. Go to Forest");
    console.log("  4. Check my status");
    console.log("  5. Check my inventory");
    console.log("  6. Quit game");
  }

  else if (currentLocation === "market") {
    console.log("\n=== MARKET ===");
    console.log("\nMerchants sell their wares from colorful stalls. A potion seller catches your eye. What would you like to do?");
    console.log("  1. Return to Village");
    console.log("  2. Go to Blacksmith");
    console.log("  3. Go to Forest");
    console.log("  4. Check my status");
    console.log("  5. Check my inventory");
    console.log("  6. Quit game");
  }

  else if (currentLocation === "forest") {
    console.log("\n=== FOREST ===");
    console.log("\nA dark forest surrounds you. You hear strange noises...");
  
    // Simple battle loop example
    let inBattle = true;
    let monsterHealth = monsterDefense;

    console.log("\nBattle started!");
    console.log("Monster health: " + monsterHealth);
    while (inBattle) {
      if (monsterHealth === 0) {
        console.log("Monster defeated!")
        inBattle = false;
      }
      else {
        console.log("You attack!");
        monsterHealth--;
        console.log("Monster health: " + monsterHealth);
      }
    }
    currentLocation = "village"
    console.log("\nYou return safely to the village.");
  }

// Get player choice

  let choice = readline.question("Enter your choice: ");
  let choiceNum = parseInt(choice);
  if (currentLocation === "village") {
    if (choiceNum === 1) {
      currentLocation = "blacksmith";
      console.log("You walk to the blacksmith.");
    } else if (choiceNum === 2) {
      currentLocation = "market";
      console.log("You walk to the market.");
    } else if (choiceNum === 3) {
      currentLocation = "forest";
      console.log("You walk to the forest.");
    } else if (choiceNum === 4) {
      // Show player status
      console.log("=== PLAYER STATUS ===");     
      console.log("Name: " + playerName);
      console.log("Health: " + health);
      console.log("Gold: " + gold);
      console.log("Weapon Damage: " + weaponDamage);
    } else if (choiceNum === 5) {
      // Show player inventory
      console.log("=== PLAYER INVENTORY ===");
      if (inventory.length === 0) {
        console.log("Your inventory is empty.");
      } else for (let i = 0; i < inventory.length; i++) {
        console.log("Checking inventory slot " + i);
        if (inventory[i]) {
          console.log("Slot " + i + ": " + inventory[i]);
        } else {
           console.log("Slot " + i + " is empty.");
        }
      }

    } else if (choiceNum === 6) {
      console.log("Thank you for playing! Goodbye.");
      gameRunning = false;
    } else {
      console.log("Invalid choice. Please try again.");
    }

  } else if (currentLocation === "blacksmith") {
    if (choiceNum === 1) {
      currentLocation = "village";
      console.log("You return to the village.");
    } else if (choiceNum === 2) {
      currentLocation = "market";
      console.log("You walk to the market.");
    } else if (choiceNum === 3) {
      currentLocation = "forest";
      console.log("You walk to the forest.");
    } else if (choiceNum === 4) {
      // Show player status
      console.log("=== PLAYER STATUS ===");     
      console.log("Name: " + playerName);
      console.log("Health: " + health);
      console.log("Gold: " + gold);
      console.log("Weapon Damage: " + weaponDamage);
      console.log("Inventory: " + inventory.join(", "));
    } else if (choiceNum === 5) {
      // Show player inventory
      console.log("=== PLAYER INVENTORY ===");
      if (inventory.length === 0) {
        console.log("Your inventory is empty.");
      } else {
        for (let i = 0; i < inventory.length; i++) {
          console.log("Checking inventory slot " + i);
          if (inventory[i]) {
            console.log("Slot " + i + ": " + inventory[i]);
          } else {
            console.log("Slot " + i + " is empty.");
          }
        }
      }
    } else if (choiceNum === 6) {
      console.log("Thank you for playing! Goodbye.");
      gameRunning = false;
    } else {
      console.log("Invalid choice. Please try again.");
    } 
    
  } else if (currentLocation === "market") {
    if (choiceNum === 1) {
      currentLocation = "village";
      console.log("You return to the village.");
    } else if (choiceNum === 2) {
      currentLocation = "blacksmith";
      console.log("You walk to the blacksmith.");
    } else if (choiceNum === 3) {
      currentLocation = "forest";
      console.log("You walk to the forest.");
    } else if (choiceNum === 4) {
      // Show player status
      console.log("=== PLAYER STATUS ===");
      console.log("Name: " + playerName);
      console.log("Health: " + health);
      console.log("Gold: " + gold);
      console.log("Weapon Damage: " + weaponDamage);
      console.log("Inventory: " + inventory.join(", "));
    } else if (choiceNum === 5) {
      // Show player inventory
      console.log("=== PLAYER INVENTORY ===");
      if (inventory.length === 0) {
        console.log("Your inventory is empty.");
      } else {
        for (let i = 0; i < inventory.length; i++) {
          console.log("Checking inventory slot " + i);
          if (inventory[i]) {
            console.log("Slot " + i + ": " + inventory[i]);
          } else {
            console.log("Slot " + i + " is empty.");
          }
        }
      }
    } else if (choiceNum === 6) {
      console.log("Thank you for playing! Goodbye.");
      gameRunning = false;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
}
