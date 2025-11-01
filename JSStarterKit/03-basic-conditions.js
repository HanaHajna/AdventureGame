// User's age
let age = 10;
// Check if user is old enough
if (age >= 13) {
console.log("Welcome! You can access the website.");
}
else {
console.log("Sorry! You cannot access the website.")
}
// Add a message if they can't access
console.log("Age verification complete.");

// Comparison operators
// Equal to (==) - Compares values but not types
console.log(5 == "5");  // true (different types but same value)
// Strictly equal to (===) - Compares both values and types
console.log(5 === "5");  // false (different types)
console.log(5 === 5);    // true (same type and value)
// Not equal to (!=) and strictly not equal (!==)
console.log(5 != "5");   // false (same value)
console.log(5 !== "5");  // true (different types)

// Logical operators
// AND (&&) - Both conditions must be true
console.log(true && true);    // true
console.log(true && false);   // false
// OR (||) - At least one condition must be true
console.log(true || false);   // true
console.log(false || false);  // false
// NOT (!) - Inverts the value
console.log(!true);   // false
console.log(!false);  // true