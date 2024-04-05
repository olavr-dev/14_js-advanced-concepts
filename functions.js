// -----------------------------------------------------------------------------
// Set default function parameter
// -----------------------------------------------------------------------------

function greetUser(greetingPrefix, userName = 'User') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

greetUser('Hi', 'Olav'); // Returns Hi Olav!
greetUser('Greetings'); // Returns Greetings User!

// -----------------------------------------------------------------------------
// Working with rest parameters (...parameter) and spread operator (...variable)
// -----------------------------------------------------------------------------

// This function can take any number of parameters
function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; //result += is the same as result = result + number
  }
  return result;
}

console.log(sumUp(1, 5, 10, 11, 20, 31)); // Returns 78

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(inputNumbers)); // Returns 01,5,10,11,20,31

// The spread operator (...variable)
// Splits the array into comma separated numbers
console.log(sumUp(...inputNumbers)); // Returns 78

// -----------------------------------------------------------------------------
// Functions are objects
// -----------------------------------------------------------------------------

console.log(sumUp); // Returns [Function: sumUp]

// -----------------------------------------------------------------------------
// Working with template literals ``
// -----------------------------------------------------------------------------

function greetUser(greetingPrefix, userName = 'User') {
  // console.log(greetingPrefix + ' ' + userName + '!');
  console.log(`${greetingPrefix} ${userName}!`); // Template literals
}

greetUser('Hi', 'Olav'); // Returns Hi Olav!
greetUser('Greetings'); // Returns Greetings User!
