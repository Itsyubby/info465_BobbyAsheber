const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let myNumbers = [];

console.log("Welcome to the Mean and Median Calculator!");
console.log("Enter your integers below. Type 'q' when you are finished.");

function getNumbersFromUser() {
  rl.question('Enter an integer: ', function(input) {
    
    if (input.toLowerCase() === 'done') {
      if (myNumbers.length === 0) {
        console.log("You didn't enter any numbers. Goodbye!");
        rl.close();
      } else {
        calculateResults(myNumbers);
        rl.close();
      }
      return;
    }

    let parsedInput = parseInt(input);

    if (isNaN(parsedInput)) {
      console.log("That is not a valid number. Please try again or type 'q' to quit.");
    } else {
      myNumbers.push(parsedInput);
    }

    getNumbersFromUser();
  });
}

function calculateResults(arr) {
  // --- CALCULATING MEAN ---
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  let mean = totalSum / arr.length;

  
  arr.sort(function(a, b) {
    return a - b;
  });

  let median;
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    median = arr[middleIndex];
  } else {

    let value1 = arr[middleIndex - 1];
    let value2 = arr[middleIndex];
    median = (value1 + value2) / 2;
  }

  // --- DISPLAY RESULTS ---
  console.log("\n--- Final Statistics ---");
  console.log("Your list of numbers: " + arr);
  console.log("The Mean (Average) is: " + mean.toFixed(2));
  console.log("The Median is: " + median);
}

getNumbersFromUser();