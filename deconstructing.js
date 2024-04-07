// ARRAYS
const input = ['Olav', 'Øye', 'Rørvik'];

// Without deconstructing
const firstName = input[0];
const middleName = input[1];
const lastName = input[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);

// With array deconstructing
const [first, middle, last] = input;

console.log(first);
console.log(middle);
console.log(last);

// ------------------------------------------------------------------

// OBJECTS
const job = { title: 'Web Developer', location: 'Sandnes' };

// Without deconstructing
const jobTitle = job.title;
const jobLocation = job.location;

console.log(jobTitle);
console.log(jobLocation);

// With object deconstructing
// You can also change the key and store it in a new variable
const { title: newTitle, location } = job;

console.log(newTitle);
console.log(location);
