// LESSON 22 HOMEWORK

// Task nr. 1. Temperature
console.log(`Task nr. 1 Temperature`);

let temperature = 26;
let message = `The temperature is ${temperature}. `;

if (temperature < 0) {
  message += "The weather is not good. The temperature is freezing!";
} else if (temperature <= 10) {
  message += "The weather is good, but a little cold!";
} else if (temperature <= 25) {
  message += "Nice weather. We can already take off our coats!";
} else {
  message += "Great weather. We are running to the beach!";
}
console.log(message);

// Task nr. 2. Days Week

console.log("Task nr. 2 Days Week");

let day = 5;

let daysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

let messages = {
  1: "Today is Monday. Have a nice week!",
  2: "Today is Tuesday. Second day is the hardest day of week. Be strong!",
  3: "Today is Wednesday. A middle of week. Friday is in two days!",
  4: "Today is Thursday. Almost Friday!",
  5: "Today is Friday. We are alive! Last working day!",
  6: "Today is Saturday. Great! We can sleep till lunch!",
  7: "Today is Sunday. Oh no! Sunday is too fast!",
};

if (day >= 1 && day <= 7) {
  console.log(messages[day] || `Today is ${daysOfWeek[day]}.`);
} else {
  console.log(
    "Oops! I don't know that day! I need the numbers from 1 to 7. Try again."
  );
}

//   Task nr. 3. Even and odd

console.log("Task nr. 3. Even / odd");

let number = 100;

if (number % 2 === 0) {
  console.log(`${number}` + ` is even number!`);
} else {
  console.log(`${number}` + ` is odd number!`);
}

// Task nr. 4. Sale

console.log("Task nr. 4. Sale");

let purchaseAmount = 260,
  sale = 0.1,
  tax = 0.05;
let finalAmount;

if (purchaseAmount >= 100) {
  let discountedAmount = purchaseAmount - purchaseAmount * sale;
  finalAmount = discountedAmount + discountedAmount * tax; //
} else {
  finalAmount = purchaseAmount + purchaseAmount * tax;
}
console.log(`Price: ` + purchaseAmount + ` dollars.`);
console.log(
  `Total amount (with discount and taxes): ` +
    finalAmount.toFixed(2) +
    ` dollars.`
);

//   Task nr. 5. Check password

console.log("Task nr. 5. Check password");

let password = "ygourghtyZhpass";

let strongPassword =
  password.length >= 12 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /\d/.test(password);

let validPassword =
  password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password);

if (strongPassword) {
  console.log("Your password is very strong.");
} else if (validPassword) {
  console.log("Your password is valid.");
} else {
  console.log("Sorry but your password is weak. Try again.");
}

//  Task nr. 6. Prime Numbers

console.log("Task nr. 6. Prime Numbers");

let inputNumber = 105;

function isPrime(inputNumber) {
  if (inputNumber <= 1) return false;
  if (inputNumber === 2) return true;
  if (inputNumber % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(inputNumber); i += 2) {
    if (inputNumber % i === 0) return false;
  }
  return true;
}

if (isPrime(inputNumber)) {
  console.log(`Your number: ` + inputNumber + ` is a prime number.`);
} else {
  console.log(`Your number: ` + inputNumber + ` is not a prime number.`);
}

//  Task nr. 7. Triangle

console.log("Task nr. 7. Triangle");

let side1 = 3,
  side2 = 4,
  side3 = 5;

// Check if a triangle can be constructed

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log(`Great! You have made a triangle!`);
} else {
  console.log(`Ops! This is not a triangle! Try again.`);
}

// Check for rectangularity

if (
  side1 ** 2 + side2 ** 2 == side3 ** 2 ||
  side1 ** 2 + side3 ** 2 == side2 ** 2 ||
  side2 ** 2 + side3 ** 2 == side1 ** 2
) {
  console.log(`Great! Pythagoras likes your triangle!`);
} else {
  console.log(`No! Pythagoras does not like your triangle!! Try again.`);
}
