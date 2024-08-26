// HOMEWORK LESSON 26

console.log("HOMEWORK LESSON 26")

// TASK Shopping list management
// Create an array named ShoppingList and add some products you want to buy.
// Write a function called sortAlphabetic that sorts the shopping list into alphabetical order and displays it.
// Write a function called searchProduct that takes a product as an argument and
// returns its index in the list or a message if not found.
// Write a function named addProduct that takes a product as an argument and
// if it is not already in the list adds it to the shopping list.
// Write a function named removeProduct that takes a product as an argument and
// removes it from the shopping list.
// Display both the initial list and the number of products in it and the final list and the number of products in it.

console.log("Task. Shopping list management")

const originalShoppingList = [
  "Potatoes",
  "Tomatoes",
  "Carrots",
  "Milk",
  "Apples",
  "Eggs",
  "Bread",
  "Cheese",
  "Bananas",
  "Tea",
  "Oranges",
  "Juice",
  "Lettuce",
  "Grapes",
  "Broccoli",
  "Butter",
  "Onions",
];

// Original Shopping List
let shoppingList = [...originalShoppingList];

// Making alphabetical order
let sortAlphabetic = shoppingList.sort();
// sortAlphabetic = sortAlphabetic.join(", ");
console.log("Alphabetical order: " + sortAlphabetic);

// Searching products
console.log("Searching products:");
function searchProduct(product) {
  const index = shoppingList.indexOf(product);
  if (index !== -1) {
    return index;
  } else {
    return product + " not found in the shopping list.";
  }
}
console.log(searchProduct("Onions"));
console.log(searchProduct("Pasta"));

// Adding products
console.log("Adding products:");
function addProduct(product) {
  if (!shoppingList.includes(product)) {
    shoppingList.push(product);
    shoppingList.sort();
    console.log(product + " was added to the shopping list.");
  } else {
    console.log(product + " is already in the shopping list.");
  }
}

addProduct("Coffee");
addProduct("Milk");

// Removed products
console.log("Removed products:");
function removeProduct(product) {
  const index = shoppingList.indexOf(product);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    console.log(product + " was removed from the shopping list.");
  } else {
    console.log(product + " is not found in the shopping list.");
  }
}

removeProduct("Milk");
removeProduct("Pasta");

// Original and Last versions of the Shopping List

console.log("Original shopping list: " + originalShoppingList.join(", ") + ".");
console.log("Last shopping list: " + shoppingList.join(", ") + ".");

// CLASSWORK LESSON 26

console.log("CLASSWORK LESSON 26")
// TASK 1 Ana’s calculator v.2
// Ana wants an upgrade to the tip calculator, using the same rules as before - 15% tip
// if the invoice amount is between 50 and 300, and 20% tip if the amount is different.
// Write a calcTips function that takes as input any invoice value and returns the corresponding tip,
// calculated based on the rules above. Use the type of function you like best.
// And now let's use array! So create an array called Bills containing the test data below.
// Create an array named tips containing the tip amount for each bill,
// calculated from the function you created above.
// Create a totals array containing the total values, so bill + tip.
// TEST DATA: 125, 555 and 44.

console.log("Task 1. Anna's Tips Calculator v.2");

let bills = [125, 555, 44];

function calcTips(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

let tips = bills.map(calcTips);

let totals = bills.map((bills, index) => bills + tips[index]);

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", totals);

totals.forEach((total, index) => {
  console.log(`Total payment for bill ${index + 1}: $${total.toFixed(2)}`);
});

// Task 2. Inverted array.
console.log("Task 2. Invert an array");

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Normal line: " + myArray);
reversedArray = myArray.reverse();
console.log("Reversed line:" + reversedArray);

// TASK 3. Rotate an array by 1 position from the left
// (first element to become the last).

console.log("Task 3. Rotated Array");
const leftShift = (arr) => {
  const first = arr.shift();
  arr.push(first);
  return arr;
};

const originalArray = [0, 10, 20, 30, 40, 50];
console.log("Original array: " + originalArray);
const rotatedArray = leftShift(originalArray.slice());
console.log("Rotated array: " + rotatedArray);

// TASK 4. Create a function that will merge two arrays and return the result as a new array.

console.log("Task 4. Array merging");

const firstArray = [2000, 2004, 2008, 2012];
console.log("First array:" + firstArray);
const secondArray = [2016, 2020, 2024, 2028];
console.log("Second array:" + secondArray);

unitedArray = firstArray.concat(secondArray);

// OR
// function united(unitedArray = firstArray.concat(secondArray)) {
//   return unitedArray;
// }
// const combinedYears = united();

console.log("United array: " + unitedArray);

// TASK 5. Create a function that receives an array of numbers and
// returns an array containing only positive numbers.

console.log("Task 5. Positive numbers");
const mixedArray = [-20, 17, -50, 0, 4, -28, 122, -609, 666, -1.5, 85602, 5.6];
let positiveNumbers = mixedArray.filter((number) => number > 0);
console.log(positiveNumbers);
