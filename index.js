const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This array will hold the numbers the user enters
let myNumbers = [];

console.log("Welcome to the Mean and Median Calculator!");
console.log("Enter your integers below. Type 'q' when you are finished.");

// Using a standard function instead of arrow functions
function getNumbersFromUser() {
  rl.question('Enter an integer: ', function(input) {
    
    // Check if the user wants to quit
    if (input.toLowerCase() === 'q') {
      if (myNumbers.length === 0) {
        console.log("You didn't enter any numbers. Goodbye!");
        rl.close();
      } else {
        calculateResults(myNumbers);
        rl.close();
      }
      return;
    }

    // Error Handling: Check if the input is actually a number
    let parsedInput = parseInt(input);

    if (isNaN(parsedInput)) {
      console.log("That is not a valid number. Please try again or type 'q' to quit.");
    } else {
      // Add the valid number to our array
      myNumbers.push(parsedInput);
    }

    // Call the function again to get the next number
    getNumbersFromUser();
  });
}

function calculateResults(arr) {
  // --- CALCULATING MEAN ---
  let totalSum = 0;
  // Using a basic for-loop
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  let mean = totalSum / arr.length;

  // --- CALCULATING MEDIAN ---
  // First, we must sort the numbers from smallest to largest
  // We use a compare function (a, b) so it sorts numbers correctly
  arr.sort(function(a, b) {
    return a - b;
  });

  let median;
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    // If the list is odd, the median is the middle number
    median = arr[middleIndex];
  } else {
    // If the list is even, the median is the average of the two middle numbers
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

// Start the input process
getNumbersFromUser();