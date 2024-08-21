// LESSON 23 HOMEWORK + additional exercises

      // TASK nr. 1. Leap years
      // Create a function that tells us whether a year is a leap year or not.
      // If a year is divisible by 4 and is not divisible by 100, it is a leap year.
      // If a year is divisible by 400, it is leap (this is the exception for centuries).

      console.log("Task 1. Leap years:");
      function calcLeapYear(x) {
        if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
          console.log(x + " is a leap year!");
        } else {
          console.log(x + " is not a leap year!");
        }
      }
      calcLeapYear(2014);

      // TASK nr. 2. Sport Teams v2
      // Back to the two gymnastics teams, the Dolphins and the Koalas!
      // There is a new gymnastics discipline that works differently.
      // Each team competes 3 times, and then the 3 scores are averaged (so an average score per team).
      // A team wins ONLY if it has at least DOUBLE the average score of the other team.
      // Otherwise, neither team wins! Ignore draws this time.

      // First test (using IF and ELSE IF operators)
      // TEST DATA: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.

      console.log("Task nr. 2. Sport Teams");
      console.log("First test:");

      function calcAverageDolphin(a, b, c) {
        avgDolphin = (a + b + c) / 3;
        console.log("Dolphin scored " + avgDolphin + " points;");
        return avgDolphin;
      }

      function calcAverageKoala(a, b, c) {
        avgKoala = (a + b + c) / 3;
        console.log("Koala scored " + avgKoala + " points;");
        return avgKoala;
      }

      function checkWinner(avgDolphin, avgKoala) {
        if (avgDolphin >= avgKoala * 2) {
          console.log(
            "The Dolphin won: " + avgDolphin + " vs " + avgKoala + "!"
          );
        } else if (avgKoala >= avgDolphin * 2) {
          console.log("The Koala won: " + avgKoala + " vs " + avgDolphin + "!");
        } else {
          console.log("We don't have a winner!");
        }
      }

      avgKoala = calcAverageKoala(65, 54, 49);
      avgDolphin = calcAverageDolphin(44, 23, 71);
      checkWinner(avgDolphin, avgKoala);

      // Second test (using SWITCH operator)
      // TEST DATA: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

      console.log("Second test:");

      function checkWinner(avgDolphin, avgKoala) {
        switch (true) {
          case avgDolphin >= avgKoala * 2:
            console.log(
              "The Dolphin won: " + avgDolphin + " vs " + avgKoala + "!"
            );
            break;
          case avgKoala >= avgDolphin * 2:
            console.log(
              "The Koala won: " + avgKoala + " vs " + avgDolphin + "!"
            );
            break;
          default:
            console.log("We don't have a winner!");
        }
      }
      avgDolphin = calcAverageDolphin(85, 54, 41);
      avgKoala = calcAverageKoala(23, 34, 27);
      checkWinner(avgDolphin, avgKoala);

      // TASK nr. 3. Temperature conversion Fahrenheit to Celsius
      // Create a function called fahrenheitToCelsius that takes a temperature in Fahrenheit
      // and returns the equivalent in Celsius.

      console.log("Task 3. Transform \u2109 to \u2103");

      let fahrenheitGrade = 19;

      function fahrenheitToCelsius(fahrenheitGrade) {
        celsiusGrade = ((fahrenheitGrade - 32) * 5) / 9;
        celsiusGrade = celsiusGrade.toFixed(0);
        return celsiusGrade;
      }

      fahrenheitToCelsius(fahrenheitGrade);
      console.log(fahrenheitGrade + "\u2109 = " + celsiusGrade + "\u2103.");

      // Task nr. 4. Area of a circle.
      // Create a function called calculateCircleArea that takes
      // the radius of a circle and returns its area.

      console.log("Task 4. Circle's area");

      let radiusCircle = 23;

      function calcCircleArea(radiusCircle) {
        const pi = Math.PI;
        let area = pi * Math.pow(radiusCircle, 2);
        area = area.toFixed(2);
        return area;
      }

      let area = calcCircleArea(radiusCircle);
      console.log("Circle's area = " + area + " cm².");

      // Task nr. 5. Checking even or odd numbers.
      // Create a function named isEven that takes an integer and returns true if the number is even
      // and false if it is odd.

      console.log("Task nr. 5. Even or odd");

      // SHORT code variant (output only false or true)

      function isEven(number) {
        return number % 2 === 0;
      }
      console.log("We have " + isEven(13) + " result!");
      console.log("We have " + isEven(2) + " result!");

      // LONG code variant (a lot of texts)
      // let x = 7;
      // function isEven(x) {
      //   if (x % 2 === 0) {
      //     console.log(x + ` is even number!`);
      //   } else {
      //     console.log(x + ` is odd number!`);
      //   }
      //   return x % 2 === 0;
      // }

      // console.log("So we have " + isEven(x) + " result!");

      // Task nr. 6. Converting minutes to hours and minutes
      // Create a function called convertMinutes that takes a number of minutes.
      // Inside it, define two functions: one to extract the number of hours (extractHours)
      // and one to extract the remaining minutes (extractMinutes).
      // The main function will call these two functions and display the results.

      console.log("Task nr. 6. Minutes to hours");

      function convertMinutes(timeData) {
        function extractHours(minutes) {
          return Math.floor(minutes / 60);
        }

        function extractMinutes(minutes) {
          return minutes % 60;
        }

        let hours = extractHours(timeData);
        let minutes = extractMinutes(timeData);

        console.log(
          timeData + " mins = " + hours + " h(s) " + minutes + " mins."
        );
      }

      convertMinutes(35);
      convertMinutes(158);

      // Task nr. 7. Calculate and display Body Mass Index (BMI)
      // The task is to create a function that calculates the Body Mass Index (BMI).
      // The BMI is evaluated in a category (underweight, normal, overweight, obese) and a corresponding message is displayed.
      // Principle for categories: underweight under 18.5 (BMI), normal (18.5-25), overweight (25-30) over 30 - obese.

      console.log("Task nr. 7. BMI calculator");

      function calculatorBMI(weight, height) {
        indexBMI = weight / height ** 2;

        if (indexBMI < 18.5) {
          console.log(
            "My BMI index is " + indexBMI.toFixed(0) + " and I am underweight!"
          );
        } else if (indexBMI >= 18.5 && indexBMI < 25) {
          console.log(
            "My BMI index is " + indexBMI.toFixed(0) + " and I am normal!"
          );
        } else if (indexBMI >= 25 && indexBMI <= 30) {
          console.log(
            "My BMI index is " + indexBMI.toFixed(0) + " and I am overweight!"
          );
        } else {
          console.log(
            "My BMI index is " + indexBMI.toFixed(0) + " and I have obese!"
          );
        }

        return indexBMI;
      }

      calculatorBMI(82, 1.88);

      // Task 8: Exchange rate calculator
      // Create a calculator to convert different currencies (USD, EUR, RON, GBP) to MDL.
      // Create a getExchangeRate(fromCurrency) function that returns the exchange rate
      // for a given currency as a parameter.
      // Use the if-else structure to determine the exchange rate.

      console.log("Task nr. 8. Exchange calculator");

      function getExchangeRate(fromCurrency) {
        let rate;

        if (fromCurrency === "USD") {
          rate = 18.5;
        } else if (fromCurrency === "EUR") {
          rate = 19.5;
        } else if (fromCurrency === "RON") {
          rate = 4.8;
        } else if (fromCurrency === "GBP") {
          rate = 20.6;
        } else {
          return null; // when we have another currency 
        }

        return rate;
      }

      function calculateAmount(initialAmount, rate) {
        return initialAmount * rate;
      }

      function convertCurrency(amount, fromCurrency) {
        let rate = getExchangeRate(fromCurrency);

        if (rate !== null) {
          let convertedAmount = calculateAmount(amount, rate);
          console.log(
            amount + " " + fromCurrency + " = " + convertedAmount + " MDL."
          );
        } else {
          console.log("Sorry, this currency is not supported.");
        }
      }

      convertCurrency(100, "USD");
      convertCurrency(100, "EUR");
      convertCurrency(100, "RON");
      convertCurrency(100, "GBP");
      convertCurrency(100, "ABS");
    