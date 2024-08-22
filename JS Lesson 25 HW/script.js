// TASK 1
// Write a function that accepts 1 argument, a language code (e.g. "es", "de", "en")
// and returns "Hello, World!" for the given language, for at least 3 languages.
// It should return English by default.
// Call that function for each of the supported languages and record the result to make sure it works.

console.log("Task nr. 1. Hello World!");

// SHORT code
function helloWorld(languageCode) {
  const messages = {
    de: "Hallo Welt!",
    ro: "Salut lume!",
    es: "Hola Mundo!",
  };

  return messages[languageCode] || "Hello World!";
}

console.log(helloWorld("de"));
console.log(helloWorld("ro"));
console.log(helloWorld("es"));
console.log(helloWorld("gr"));

// LONG code
// function helloWorld(languageCode) {
//   switch (languageCode) {
//     case "de":
//       console.log("Hallo Welt!");
//       break;
//     case "ro":
//       console.log("Salut lume!");
//       break;
//     case "es":
//       console.log("Hola Mundo!");
//       break;
//     default:
//       console.log("Hello World!");
//       break;
//   }
//   return languageCode;
// }

// helloWorld("de");
// helloWorld("ro");
// helloWorld("es");
// helloWorld("dd");

// TASK 2
// Write a function that:
// Accept 2 arguments: a noun and a number.
// Returns a sentence containing the number and the plural noun (if any),
// e.g. "I have 5 cats" or "I have 1 dog".
// Call the function with dates: '6 pigs', '0 hamster', '1 parrot'.
// Bonus: include the exceptions "sheep" ("I have 1 sheep", "I have 4 sheep")
// and "geese" ("I have 1 goose", "I have 9 geese")

console.log("Task nr. 2. Pets");

function myPets(typeOfPets, quantity) {
  let exceptionsPets;

  if (typeOfPets === "sheep") {
    exceptionsPets = "sheep";
  } else if (typeOfPets === "goose") {
    exceptionsPets = quantity === 1 ? "goose" : "geese";
  } else {
    exceptionsPets = quantity === 1 ? typeOfPets : typeOfPets + "s";
  }

  return "I have " + quantity + " " + exceptionsPets + ".";
}

console.log(myPets("pig", 6));
console.log(myPets("hamster", 0));
console.log(myPets("parrot", 1));
console.log(myPets("sheep", 4));
console.log(myPets("goose", 1));
console.log(myPets("goose", 9));

// LONG code
// function myPets(typeOfPets, quantity) {
//   if (quantity > 1 && typeOfPets !== "sheep" && typeOfPets !== "goose") {
//     message = "I have " + quantity + " " + typeOfPets + "s!";
//   } else if (typeOfPets === "sheep") {
//     message = "I have " + quantity + " " + typeOfPets + "!";
//   } else if (typeOfPets == "goose" && quantity > 1) {
//     message = "I have " + quantity + " " + "geese" + "!";
//   } else {
//     message = "I have " + quantity + " " + typeOfPets + "!";
//   }

//   return message;
// }
// console.log(myPets("pig", 6));
// console.log(myPets("hamster", 0));
// console.log(myPets("parrot", 1));
// console.log(myPets("sheep", 4));
// console.log(myPets("goose", 1));
// console.log(myPets("goose", 9));

// TASK 3
// Create a program that returns the Botanical Garden ticket price by age:
// children under 12 pay 5 MDL, after 12 - 10 MDL, adults - 20 MDL,
// and pensioners (over 65) - 15 MDL.
// Call only 1 function, with year of birth only (you should have 2 functions).
// Dates: 2015, 1985, 1960, 2018

console.log("Task nr. 3. Ticket's price");

function ageVisitors(yearOfBirth) {
  age = 2024 - yearOfBirth;
  return age;
}

function priceTicket(age) {
  if (age <= 12) {
    return 5;
  } else if (age < 18) {
    return 10;
  } else if (age <= 65) {
    return 20;
  } else {
    return 15;
  }
}

let age1 = ageVisitors(2015);
let age2 = ageVisitors(1985);
let age3 = ageVisitors(1950);
let age4 = ageVisitors(2018);

console.log("Ticket's price: " + priceTicket(age1) + " MDL.");
console.log("Ticket's price: " + priceTicket(age2) + " MDL.");
console.log("Ticket's price: " + priceTicket(age3) + " MDL.");
console.log("Ticket's price: " + priceTicket(age4) + " MDL.");

// TASK 4
// Create a program that has 3 variables defined: name, yearNames and isF (boolean).
// 1. Create a function that calculates the person's age.
// 2. Create a function that accepts a boolean value isF and returns the retirement age
// (use ternaryOperator - 67 male, 64 female);
// 3. Create a function that finds out if the person is already retired, in how many years they will retire,
// and if they are not a minor.
// Display in the console the name and the retirement message as for example:
// "Vasile has 26 years until retirement".
// Call only one function with data (Sergiu, 1979. Anastasia, 1963. Andreea, 2010)

console.log("Task nr. 4. Retirement");

let name, yearsNames, isF;

function personAge(dateOfBirth) {
  yearsNames = 2024 - dateOfBirth;
  return yearsNames;
}

function retiredAge(isF) {
  return isF ? 64 : 67;
}

function retirementStatus(name, dateOfBirth, isF) {
  let age = personAge(dateOfBirth);
  let retirementAge = retiredAge(isF);
  let yearsUntilRetirement = retirementAge - age;

  if (age < 18) {
    console.log(name + " is a minor.");
  } else if (yearsUntilRetirement > 0) {
    console.log(
      name + " has " + yearsUntilRetirement + " years until retirement."
    );
  } else {
    console.log(name + " is already retired.");
  }
}

retirementStatus("Sergiu", 1979, false);
retirementStatus("Anastasia", 1963, true);
retirementStatus("Andreea", 2010, true);
retirementStatus("Anatol", 1953, true);
retirementStatus("Alexei", 1976, true);

// TASK 5
// Create a game ROCK-PAPER-SCISSORS (+ cheat door/ Word "winner" opens this door).

console.log("Task nr. 5. ROCK-PAPER-SCISSOR");

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "paper" ||
    userInput === "rock" ||
    userInput === "scissors"
  ) {
    return userInput;
  } 
  // Cheat door for infinite wins
    else if (userInput === "winner") {
    return userInput;
  } else {
    return "Invalid choice. Try again!";
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissors";
    default:
      return "Mistake! Try again!";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `No winner! It's a tie!`;
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return `You lost: the computer won!`;
    } else {
      return `You won!`;
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return `You lost: the computer won!`;
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return `You lost: the computer won!`;
    } else {
      return `You won!`;
    }
  }
}

function playGame() {
  // use "paper", "rock", "scissors" or "winner" (cheat door)
  const userInput = "winner";

  let userChoice = getUserChoice(userInput);
  let computerChoice;

  if (userChoice === "Invalid choice. Try again!") {
    console.log(userChoice);
    return;
  }

  // Cheat code for infinite wins. The word 'winner' unlocks this door ;)

  if (userChoice === "winner") {
    const winningPairs = [
      { user: "rock", computer: "scissors" },
      { user: "scissors", computer: "paper" },
      { user: "paper", computer: "rock" },
    ];

    const randomPair =
      winningPairs[Math.floor(Math.random() * winningPairs.length)];
    userChoice = randomPair.user;
    computerChoice = randomPair.computer;
  } else {
    computerChoice = getComputerChoice();
  }

  console.log("You threw: " + userChoice + ".");
  console.log("The computer threw: " + computerChoice + ".");
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
