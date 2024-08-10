// LESSON CHALLENGE

let country = "Germany";
let isIsland = country;
let continent = "Europe";
let language;
let population = 85;
language = "German";
let halfPopulation = population / 2;
let moreHalfPops = halfPopulation + 1;
let finlandPops = 6;
let comparePops = population > finlandPops;
let averagePops = 33;
let averageComparePops = averagePops > population;
let description =
  country +
  " is situated in " +
  continent +
  " and its " +
  population +
  " mln. citizens speak " +
  language;

console.log("Classroom challenge:");
console.log(`${isIsland}, ${continent}, ${population} mln., ${language};`);
console.log("The half of German population is " + halfPopulation + " mln.");
console.log(
  "The half of German population + 1 mln. = " + moreHalfPops + " mln."
);
console.log(country + " has more citizens than Finland:" + comparePops + "!");
console.log(
  "The average number of " +
    country +
    "'s citizens is less than the average number of citizens of the average country:" +
    averageComparePops +
    "!"
);
averageComparePops = averagePops > population;
console.log(description + "!");

//HOMEWORK 

/*  VARIATION 1: Vadim weighs 78 kg and is 1.69 m tall. Alex weighs 92 kg and is 1.95 m tall. */

// Vadim's section
let vadimWeight = 78;
let vadimHeight = 1.69;
let vadimBMI = vadimWeight / vadimHeight ** 2;

// Alex's section
let alexWeight = 92;
let alexHeight = 1.95;
let alexBMI = alexWeight / (alexHeight * alexHeight);

// Boolean data

let markHigherBMI = vadimBMI > alexBMI;

// Console section
console.log();

console.log("Homework:");

console.log("Option 1.");

console.log("Vadim's BMI is " + vadimBMI.toFixed(2) + ";");

console.log("Alex's BMI is " + alexBMI.toFixed(2) + ";");

console.log("Vadim's BMI is higher than Alex's: " + markHigherBMI + "!");

/* VARIATION 2: 
Vadim weighs 95 kg and is 1.88 m tall. 
Alex weighs 85 kg and is 1.76 m tall. */

// Vadim's section
let vadimWeightOpt2 = 95;
let vadimHeightOpt2 = 1.88;
let vadimBMIOpt2 = vadimWeightOpt2 / vadimHeightOpt2 ** 2;

// Alex's section
let alexWeightOpt2 = 85;
let alexHeightOpt2 = 1.76;
let alexBMIOpt2 = alexWeightOpt2 / alexHeightOpt2 ** 2;

// Boolean data
let markHigherBMIOpt2 = vadimBMIOpt2 > alexBMIOpt2;

// Console section
console.log("Option 2.");

console.log("Vadim's BMI is " + vadimBMIOpt2.toFixed(2) + ";");

console.log("Alex's BMI is " + alexBMIOpt2.toFixed(2) + ";");

console.log("Vadim's BMI is higher than Alex's: " + markHigherBMIOpt2 + "!");
