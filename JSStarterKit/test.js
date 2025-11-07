
try {
  
   if (isNaN(parseInt(userInput))) {
       throw ("Please enter a valid number.");
    }
 
}
catch (error) {
console.log("\n" + error);
}