// HOMEWORK Lesson 27

console.log("HOMEWORK Lesson 27");

//  Task 1. Ana's calculator v.3
// Let's improve Ana's tip calculator even more, this time using cycles!
// 1. Create an array "bills" containing all 10 values of the test bills
// 2. Create 2 empty arrays for "tips" and "totals"
// 3. Use the "calcTip" function to calculate the tips and totals (bill + tip) values
// for each value in the bills array. Use the for loop to perform the 10 calculations!
// 4. Write a function "calcAverage" that takes as argument an array named "arr". This
// function calculates the average of all numbers in the received array.
// Call the function with the "totals" array.

console.log("Task 1. Ana's calculator v.3");

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  console.log(
    "Tips for $" +
      bills[i] +
      " is $" +
      tips[i] +
      " and total amount is $" +
      totals[i] +
      ";"
  );
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let averageTotal = calcAverage(totals);

console.log("Average total amount: $" + averageTotal + ".");

// Task 2. (Optional). Calculating savings and compound interest"

console.log("Task 2 (Optional). Calculating savings and compound interest");
// (Optional). Calculating savings and compound interest"
// Function calculateInterest(principal, rate, years): This function is given a principal amount,
// an interest rate, and a number of years. It will calculate the amount accrued in the account as
// a result of compounded annual interest. Use a "for" cycle to update the amount each year.
// CalculateMonthlyContribution(contribution, rate, years) function:
// This function is given a monthly contribution, an interest rate, and a number of years.
// It will calculate the amount accumulated in the account if a monthly contribution was made,
// applying compound interest each month. Use a "for" cycle to update the amount each month.
// Function printSavings(name, principal, rate, years, contribution):
// This function calls the other two functions and displays in the console the total amount of money
// saved in the account after a certain number of years, taking into account the initial amount,
// the annual interest, and the monthly contributions.
// The printSavings function should display a message such as
// "Joan, the total amount you will have in your account after x years is [Amount]".
// Example of calling the printSavings function: printSavings('Ioana', 1000, 5, 10, 50)
// In this example, 'Ioana' starts with 1000 lei in her account, adds 50 lei monthly and
// has an interest rate of 5% per year. The function should calculate the total amount of money
// Ioana will have in her account after 10 years.

function calculateInterest(principal, rate, years) {
  for (let i = 0; i < years; i++) {
    principal += principal * (rate / 100);
  }
  return principal;
}

function calculateMonthlyContribution(contribution, rate, years) {
  let total = 0;
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;

  for (let i = 0; i < months; i++) {
    total += contribution;
    total += total * monthlyRate;
  }
  return total;
}

function printSavings(name, principal, rate, years, contribution) {
  const principalAmount = calculateInterest(principal, rate, years);
  const contributionAmount = calculateMonthlyContribution(
    contribution,
    rate,
    years
  );
  const totalAmount = principalAmount + contributionAmount;

  console.log(
    name +
      "the total amount you will have in your account after " +
      years +
      " years is $" +
      totalAmount.toFixed(2)
  );
}

printSavings("Ioana", 1000, 5, 10, 50);

// CLASSROOM Exercises (First Part, for loop and .reduce()):

console.log("CLASSROOM Lesson 27");

// Task 1. Display all numbers from 1 to 10 using for loop.
console.log("Task. Display all numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2. Display odd numbers up to 100.

console.log("Task. Display odd numbers up to 100");

for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

// Second code version (using Array)
// let oddArray = [];
// for (let i = 0; i <= 100; i = i + 2) {
// oddArray.push(i);
// }
// console.log(oddArray);

// Task 3. Display the multiplication table to 7.
console.log("Task. Display the multiplication table to 7");

for (let i = 0; i <= 10; i++) {
  console.log(i + " x 7 = " + i * 7 + ";");
}

// Task 4. Calculate and display the sum of numbers 1 through 10 (using the .reduce() method).

console.log("Task. Display the sum of numbers 1 through 10 using .reduce()");
let reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumArray = reduceArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumArray);

// Task 5. Calculate and display the sum of even numbers between 10 and 30 (using the .reduce() method).

console.log(
  "Task. Display the sum of even numbers between 10 and 30 using .reduce()"
);

let oddArrayFromTen = [];

for (let i = 10; i <= 30; i += 2) {
  oddArrayFromTen.push(i);
}

let sumOddArrayFromTen = oddArrayFromTen.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumOddArrayFromTen);

// Task 6. Calculate and display the average of all numbers in an array
// (using the .reduce() method).

console.log(
  "Task. Display the average of all numbers in an array using .reduce()"
);
let bigArray = [];
let numsBigArray;
for (numsBigArray = 0; numsBigArray <= 12; numsBigArray++) {
  bigArray.push(numsBigArray);
}
console.log("Numbers in the array: " + bigArray);

let sumBigArray = bigArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("Sum of numbers of the array: " + sumBigArray);

let averageBigResult = sumBigArray / numsBigArray;

console.log("Average number of the array: " + averageBigResult);

// CLASSROOM Exercises (Second part, while loop)):

// Task 1. Generating a Fibonacci string until 1000.
// Use a while loop for this task.

console.log("Task. Fibonacci's string");
let numOne = 0;
let numTwo = 1;
let sum = numOne + numTwo;

while (sum < 1000) {
  console.log(sum);
  numOne = numTwo;
  numTwo = sum;
  sum = numOne + numTwo;
}

// Task 2. Parity check. Create a program that asks the user to enter integers until the user enters "stop".
// The program should use a while loop to check whether each number entered is even or odd and display a corresponding message.

console.log("Task. Parity check (using prompt and alert)");

let userInput = prompt("Enter a number or stop-word:");

while (userInput !== "stop") {
  let userNumber = parseInt(userInput);

  if (isNaN(userNumber)) {
    alert("Please enter a valid number or stop-word.");
  } else if (userNumber % 2 === 0) {
    alert("Your number is even.");
  } else {
    alert("Your number is odd.");
  }

  userInput = prompt("Enter another number or stop-word:");
}

alert("Program ended. Thank you for your choice! See next time.");

// Task 3. Searching for an element in an array. Create a program that searches for an element in an array
// using a while loop. The program should display the position at which the element was found
// or a message saying that the element was not found.

console.log("Task. Searching for an element in an array");

let namesArray = [
  "Andrei",
  "Mihai",
  "Ioana",
  "Vlad",
  "Elena",
  "Maria",
  "Iuliana",
  "Radu",
  "Alexandra",
  "Sergiu",
  "Gabriela",
];

let targetElement = "Alexandra";
let notFound = true;
let index = 0;

while (notFound && index < namesArray.length) {
  if (namesArray[index] === targetElement) {
    console.log("We found her/his: " + index + " position!");
    notFound = false;
  } else {
    index++;
  }
}

if (notFound) {
  console.log("We can't find this name. Try again!");
}
