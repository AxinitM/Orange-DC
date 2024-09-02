// HOMEWORK Lesson 29

// Back to Mark and Vasile comparing their BMIs! This time, let's use objects to implement the calculations! 
// 1. For each, create an object with properties for their full name, mass and height (Mark Ganea and Vasile Cibotaru)
// 2. Create a "calcBMI" method on each object to calculate BMI (same method for both objects). 
// Store the BMI value in a property and also return it from the method.
// 3. Display in the console who has the higher BMI, along with their full name and respective BMI. 
// TEST DATA: Mark weighs 78 kg and is 1.69 m tall. Vasile weighs 92 kg and is 1.95 m tall.

const firstPerson = {
  firstName: "Mark",
  lastName: "Ganea",
  weight: 78,
  height: 1.69,
  // Using prompt for testing code
  // weight: prompt("Mark's weight (kg) is "),
  // height: prompt("Mark's height (m.sm) is "),
  calcBMI: function () {
    firstPersonBMI = this.weight / this.height ** 2;
    return firstPersonBMI.toFixed(2);
  },
};

console.log(
  `${firstPerson.firstName} ${
    firstPerson.lastName
  }'s BMI is ${firstPerson.calcBMI()}.`
);

const secondPerson = {
  firstName: "Vasile",
  lastName: "Cibotaru",
  weight: 92,
  height: 1.95,
  // Using prompt for testing code
  // weight: prompt("Vasile's weight (kg) is "),
  // height: prompt("Vasile's height (m.sm) is "),
  calcBMI: function () {
    secondPersonBMI = this.weight / this.height ** 2;
    return secondPersonBMI.toFixed(2);
  },
};

console.log(
  `${secondPerson.firstName} ${
    secondPerson.lastName
  }'s BMI is ${secondPerson.calcBMI()}.`
);

if (firstPerson.calcBMI() > secondPerson.calcBMI()) {
  console.log(
    `${firstPerson.firstName} ${
      firstPerson.lastName
    }'s BMI (${firstPerson.calcBMI()}) is higher than ${
      secondPerson.firstName
    } ${secondPerson.lastName}'s BMI (${secondPerson.calcBMI()})!`
  );
  // Using alert for testing code
  // alert(
  //   `${firstPerson.firstName} ${
  //     firstPerson.lastName
  //   }'s BMI (${firstPerson.calcBMI()}) is higher than ${
  //     secondPerson.firstName
  //   } ${secondPerson.lastName}'s BMI (${secondPerson.calcBMI()})!`
  // );
} else if (firstPerson.calcBMI() < secondPerson.calcBMI()) {
  console.log(
    `${secondPerson.firstName} ${
      secondPerson.lastName
    }'s BMI (${secondPerson.calcBMI()}) is higher than ${
      firstPerson.firstName
    } ${firstPerson.lastName}'s BMI (${firstPerson.calcBMI()})!`
  );
  // Using alert for testing code
  // alert.log(
  //   `${secondPerson.firstName} ${
  //     secondPerson.lastName
  //   }'s BMI (${secondPerson.calcBMI()}) is higher than ${
  //     firstPerson.firstName
  //   } ${firstPerson.lastName}'s BMI (${firstPerson.calcBMI()})!`
  // );
} else {
  console.log(
    `${firstPerson.firstName} ${
      firstPerson.lastName
    }'s BMI (${firstPerson.calcBMI()}) is equal to ${secondPerson.firstName} ${
      secondPerson.lastName
    }'s BMI (${secondPerson.calcBMI()})!`
  );
  // Using alert for testing code
  // alert(
  //   `${firstPerson.firstName} ${
  //     firstPerson.lastName
  //   }'s BMI (${firstPerson.calcBMI()}) is equal to ${
  //     secondPerson.firstName
  //   } ${secondPerson.lastName}'s BMI (${secondPerson.calcBMI()})!`
  // );
}
