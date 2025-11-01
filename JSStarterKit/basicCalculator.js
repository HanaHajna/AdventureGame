// Item prices
let coffeePrice = 5;
let sandwichPrice = 8;
let cookiePrice = 2;

// Calculate quantities
let coffeeQuantity = 2;
let sandwichQuantity = 1;
let cookieQuantity = 3;

// Calculate subtotals
let coffeeTotal = coffeePrice * coffeeQuantity;
let sandwichTotal = sandwichPrice * sandwichQuantity;
let cookieTotal = cookiePrice * cookieQuantity;

// Calculate final total
let cartTotal = coffeeTotal + sandwichTotal + cookieTotal;

// Display the receipt
console.log("=== Shopping Cart ===");
console.log("Coffee: $" + coffeeTotal);
console.log("Sandwich: $" + sandwichTotal);
console.log("Cookies: $" + cookieTotal);
console.log("Total: $" + cartTotal);

// ========================================
// Original price and discount information
let shirtPrice = 25;
let discountPercent = 20;

// Calculate the discount amount and final price below
// Hint: First convert the percentage to decimal form
// Your code here:

// ==============================
// Display calculations
console.log("=== Discount Calculator ===");
console.log("Original Price: $" + shirtPrice);
console.log("Discount Percentage: " + discountPercent + "%");
// Add your console.log statements to show the discount amount and final price

// ======
// Comprehensive order
let basePrice = 49.99;
let quantity = 2;
let discountPercent1 = 15;
let taxRate = 8;
// Calculate subtotal
let subtotal = basePrice * quantity;
// Calculate discount
let discountDecimal = discountPercent / 100;
let discountAmount = subtotal * discountDecimal;
let priceAfterDiscount = subtotal - discountAmount;
// Calculate tax
let taxDecimal = taxRate / 100;
let taxAmount = priceAfterDiscount * taxDecimal;
let finalPrice = priceAfterDiscount + taxAmount;
console.log("=== Order Details ===");
console.log("Subtotal: $" + subtotal);
console.log("Discount (" + discountPercent1 + "%): -$" + discountAmount);
console.log("Price After Discount: $" + priceAfterDiscount);
console.log("Tax (" + taxRate + "%): $" + taxAmount);
console.log("-----------------------");
console.log("Final Price: $" + finalPrice);