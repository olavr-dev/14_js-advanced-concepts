// Set default function parameter
function greetUser(greetingPrefix, userName = 'User') {
  console.log(greetingPrefix + ' ' + userName + '!');
}

// This returns "Hi Olav!"
greetUser('Hi', 'Olav');
greetUser('Greetings');

// -----------------------------------------------------------------------------

// Working with rest parameters (...parameter)
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
