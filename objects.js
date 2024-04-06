// Create an object and store it in a custom variable. This is a object literal.
const job = { title: 'Developer', location: 'New York', salary: 50000 };

// Create a build in object with the new keyword. Date() is a blueprint.
new Date().toISOString();

console.log(new Date().toISOString());

// Creating your own blueprint
class Job {
  constructor(title, location, salary) {
    // this refers to the object that will be created
    this.title = title;
    this.location = location;
    this.salary = salary;
  }
  // Adding your own method
  describe() {
    console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
  }
}

// You can use this blueprint to create new instances with the new keyword
const developer = new Job('Web Developer', 'Sandnes', 750000);
console.log(developer);
const cook = new Job('Cook', 'Stavanger', 450000);
console.log(cook);

// Using the new method on the blueprint
const pilot = new Job('Pilot', 'Oslo', 925000);
pilot.describe();
