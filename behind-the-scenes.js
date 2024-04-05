// -----------------------------------------------------------------------------
//? Primitive vs Reference Values
// -----------------------------------------------------------------------------

// Primitive Values are numbers, strings, booleans & more (undefined)
// Reference Values are objects, arrays, functions
const hobbies = ['Coding', 'Gaming', 'Cooking'];
const age = 32;

// This works because the constant hobbies is an object and therefore just a
// pointer to a place in memory.
hobbies.push('RC Cars');

console.log(hobbies); // Returns [ 'Coding', 'Gaming', 'Cooking', 'RC Cars' ]

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
}

// The spread operator copies the person variable to a new place in memory
// and leaves the original one unchanged
console.log(getAdultYears({ ...person }));
console.log(person);
