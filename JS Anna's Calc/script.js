// LESSON 23 HOMEWORK

// Anna's Tips Calculator
// Task
// Anna wants to build a very simple tip calculator for whenever she goes out to eat in a restaurant. In her country, it is customary to tip 15% if the bill is between 50 and 300. If the amount is different, tip 20%.
// Your task is to calculate the tip, depending on the value of the bill. Create a variable called "tip" for this. You are not allowed to use an if/else statement.
// Print to the console containing the bill amount, the tip, and the final amount (bill + tip).
// Test for bills values 275, 40 and 430 dollars.


console.log("Anna's Tips Calculator");

console.log("First Test:");
let bill_1 = 275;
let tip_1 =
  bill_1 >= 50 && bill_1 <= 300 ? bill_1 * 0.15 : bill_1 * 0.2;
let totalAmount_1 = bill_1 + tip_1;
console.log(
  "$" +
    bill_1 +
    " (bill) + $" +
    tip_1 +
    " (tips) = $" +
    totalAmount_1 +
    " (total amount);"
);

console.log("Second Test:");
let bill_2 = 40;
let tip_2 =
  bill_2 >= 50 && bill_2 <= 300 ? bill_2 * 0.15 : bill_2 * 0.2;
let totalAmount_2 = bill_2 + tip_2;
console.log(
  "$" +
    bill_2 +
    " (bill) + $" +
    tip_2 +
    " (tips) = $" +
    totalAmount_2 +
    " (total amount);"
);

console.log("Third Test:");
let bill_3 = 430;
let tip_3 =
  bill_3 >= 50 && bill_3 <= 300 ? bill_3 * 0.15 : bill_3 * 0.2;
let totalAmount_3 = bill_3 + tip_3;
console.log(
  "$" +
    bill_3 +
    " (bill) + $" +
    tip_3 +
    " (tips) = $" +
    totalAmount_3 +
    " (total amount)."
);
