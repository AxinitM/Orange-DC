// LESSON 23 HOMEWORK

// Anna's Tips Calculator

console.log("Anna's Tips Calculator");

console.log("First Test:");
let bill_1 = 275;
let tip_1 =
  bill_1 >= 50 && bill_1 <= 300 ? (bill_1 * 15) / 100 : (bill_1 * 20) / 100;
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
  bill_2 >= 50 && bill_2 <= 300 ? (bill_2 * 15) / 100 : (bill_2 * 20) / 100;
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
  bill_3 >= 50 && bill_3 <= 300 ? (bill_3 * 15) / 100 : (bill_3 * 20) / 100;
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
